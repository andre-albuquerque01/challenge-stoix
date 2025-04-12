'use client'

import { userUpdate } from "@/app/action";
import { UserProfileInterface } from "@/data/interface/user";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function UpdateComponent({ data }: { data: UserProfileInterface }) {
    const [error, setError] = useState<string | boolean>()
    const router = useRouter()
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const req = await userUpdate(formData)
        if (req === true) {
            alert('Alterado com sucesso!')
            router.back()
        } else {
            setError(req)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-2">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Alterar a conta</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Nome
                        </label>
                        <input
                            type="name"
                            id="name"
                            name="name"
                            defaultValue={data.name ?? ''}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="seu nome"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={data.email ?? ''}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="seu@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="********"
                        />
                    </div>
                    <button
                        className="w-full py-3 px-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
                    >
                        Alterar
                    </button>
                    {error && (
                        <p className="text-xs text-red-600">{error}</p>
                    )}
                </form>
            </div>
        </div>
    );
}
