'use server'

import ApiServer from "@/data/api/apiAction";
import ApiError from "@/data/api/apiError";
import { formatDateToMysql } from "@/data/functions/formatDate";
import { TaskRequestWithoutReturnError, TaskRequestWithReturnError } from "@/data/functions/task-error";
import { UserRequestWithoutReturnError, UserRequestWithReturnError } from "@/data/functions/user-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

// User
export async function userLogin(state: { ok: boolean, error: string }, data: FormData) {
    const schema = z.object({
        email: z.string().email(),
        password: z.string(),
    });

    const formData = {
        name: data.get('name') as string,
        email: data.get('email') as string,
        password: data.get('password') as string,
        password_confirmation: data.get('password_confirmation') as string,
    };

    const result = schema.safeParse(formData);
    if (!result.success) {
        return { ok: false, error: "* " + result.error.errors.map(e => e.message).join(" * ") };
    }

    const cookieStore = await cookies();

    try {
        const response = await ApiServer('/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(result.data),
        });

        const data = await response.json();

        if (!response.ok) return UserRequestWithoutReturnError(data.message);

        cookieStore.set('token', data.token, {
            expires: Date.now() + 2 * 60 * 60 * 1000,
            secure: true,
            httpOnly: true,
            sameSite: 'strict',
        });

    } catch (error) {
        return ApiError(error);
    }

    redirect('/dashboard');
}

export async function userLogout() {
    const cookieStore = await cookies();

    try {
        await ApiServer('/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        cookieStore.delete('token')

    } catch (error) {
        return ApiError(error);
    }

    redirect('/');
}

export async function userCreateAccount(state: { ok: boolean; error: string }, data: FormData) {
    const schema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z
            .string()
            .min(8, "A senha deve ter pelo menos 8 caracteres.")
            .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
            .regex(/[0-9]/, "A senha deve conter pelo menos um número.")
            .regex(/[^A-Za-z0-9]/, "A senha deve conter pelo menos um caractere especial."),
        password_confirmation: z.string().min(8),
    }).refine((d) => d.password === d.password_confirmation, {
        path: ["password_confirmation"],
        message: "As senhas devem coincidir.",
    });

    const formData = {
        name: data.get('name') as string,
        email: data.get('email') as string,
        password: data.get('password') as string,
        password_confirmation: data.get('password_confirmation') as string,
    };

    const result = schema.safeParse(formData);

    if (!result.success) {
        const errorMessage = result.error.errors.map(e => e.message).join(" * ");
        return { ok: false, error: "* " + errorMessage };
    }

    try {
        const response = await ApiServer('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(result.data),
        });

        const res = await response.json();

        if (res.message !== 'success') {
            return UserRequestWithoutReturnError(res.message);
        }
    } catch (error) {
        return ApiError(error);
    }
    revalidateTag('user')
    redirect('/');
}

export async function userProfile() {
    const cookiesStore = await cookies()
    try {
        const response = await ApiServer('/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${cookiesStore.get('token')?.value}`,
            },
            next: {
                tags: ['user']
            }
        })

        const data = await response.json()

        return data.data
    } catch (error) {
        return ApiError(error)
    }
}

export async function userEditarPassword(request: object) {
    const authenticateBodySchema = z.object({
        password_old: z.string(),
        password: z.string(),
        password_confirmation: z.string(),
    })

    const result = authenticateBodySchema.safeParse(request)

    if (!result.success) {
        return "* " + result.error.errors.map(e => e.message).join(" * ");
    }

    const cookiesStore = await cookies()

    try {
        const response = await ApiServer('/update/password', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${cookiesStore.get('token')?.value}`,
            },
            body: JSON.stringify(result.data),
        })

        const data = await response.json()
        console.log(data);


        if (response.status !== 201) {
            console.log('aqui');
            return UserRequestWithReturnError(data.message)
        }

        revalidateTag('user')
        return true


    } catch (error) {
        console.error(error)
        return false
    }
}

export async function userUpdate(request: FormData) {
    const authenticateBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
    })

    const requestJson = Object.fromEntries(request)
    const result = authenticateBodySchema.safeParse(requestJson)

    if (!result.success) {
        return "* " + result.error.errors.map(e => e.message).join(" * ");
    }

    const cookiesStore = await cookies()

    try {
        const response = await ApiServer('/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${cookiesStore.get('token')?.value}`,
            },
            body: JSON.stringify(result.data),
        })

        const data = await response.json()

        if (!response.ok) {
            console.log('entrou');

            return UserRequestWithReturnError(data.message)
        }

        revalidateTag('user')
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}


// Task
export async function getAllTasks() {
    const cookiesStore = await cookies();
    try {
        const response = await ApiServer('/task', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${cookiesStore.get('token')?.value}`,
            },
            next: {
                revalidate: 60 * 60 * 22,
                tags: ['task'],
            }
        });

        const data = await response.json();
        return data.data
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
        return [];
    }
}

export async function createTask(state: { ok: boolean, error: string }, request: FormData) {
    const schema = z.object({
        title: z.string().min(3, "O titulo deve ter pelo menos 3 caracteres.")
            .max(120, "O titulo não pode ter mais de 120 caracteres."),
        description: z.string().min(3, "A descrição deve ter pelo menos 3 caracteres.")
            .max(255, "A descrição não pode ter mais de 255 caracteres."),
        data_start: z.coerce.date(),
        data_end: z.coerce.date(),
    }).refine(data => data.data_end >= data.data_start, {
        message: "A data de término deve ser igual ou posterior à data de início.",
        path: ['data_end'],
    });

    const formData = {
        title: request.get('title') as string,
        description: request.get('description') as string,
        data_start: new Date(request.get('data_start') as string),
        data_end: new Date(request.get('data_end') as string),
    };

    const result = schema.safeParse(formData);

    if (!result.success) {
        return { ok: false, error: "* " + result.error.errors.map(e => e.message).join(" * ") };
    }

    const cookiesStore = await cookies()

    const formattedData = {
        ...result.data,
        data_start: formatDateToMysql(result.data.data_start),
        data_end: formatDateToMysql(result.data.data_end),
    };

    try {
        const response = await ApiServer('/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${cookiesStore.get('token')?.value}`,
            },
            body: JSON.stringify(formattedData),
        })

        const res = await response.json();

        if (res.message !== 'success') return TaskRequestWithoutReturnError(res.message);
    } catch (error) {
        return ApiError(error);
    }
    revalidateTag('task')
    redirect('/dashboard')
}

export async function updateTask(id: number, request: object) {
    const schema = z.object({
        title: z.string().min(3, "O titulo deve ter pelo menos 3 caracteres.")
            .max(120, "O titulo não pode ter mais de 120 caracteres."),
        description: z.string().min(3, "A descrição deve ter pelo menos 3 caracteres.")
            .max(255, "A descrição não pode ter mais de 255 caracteres."),
        data_start: z.coerce.date(),
        data_end: z.coerce.date(),
    }).refine(data => data.data_end >= data.data_start, {
        message: "A data de término deve ser igual ou posterior à data de início.",
        path: ['data_end'],
    });

    const result = schema.safeParse(request);

    if (!result.success) {
        return { ok: false, error: "* " + result.error.errors.map(e => e.message).join(" * ") };
    }


    const formattedData = {
        ...result.data,
        data_start: formatDateToMysql(result.data.data_start),
        data_end: formatDateToMysql(result.data.data_end),
    };

    const cookiesStore = await cookies()
    try {
        const response = await ApiServer(`/task/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${cookiesStore.get('token')?.value}`,
            },
            body: JSON.stringify(formattedData),
        })

        const res = await response.json();
        if (res.message !== 'success') return TaskRequestWithReturnError(res.message);
    } catch (error) {
        console.error(error)
        return false
    }
    revalidateTag('task')
    redirect('/dashboard')
}

export async function getTaskById(id: number) {
    const cookiesStore = await cookies();
    try {
        const response = await ApiServer(`/task/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${cookiesStore.get('token')?.value}`,
            },
            next: {
                tags: ['task']
            }
        });

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(`Erro ao buscar tarefa ID ${id}:`, error);
        return [];
    }
}


export async function deleteTask(id: number) {
    const cookiesStore = await cookies();
    try {
        const response = await ApiServer(`/task/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${cookiesStore.get('token')?.value}`,
            },
        });

        if (!response.ok) return ('Erro ao excluir tarefa');
        revalidateTag('task')
        return true;
    } catch (error) {
        console.error(`Erro ao excluir tarefa ID ${id}:`, error);
        return false;
    }
}
