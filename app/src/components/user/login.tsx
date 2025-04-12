'use client'

import { userLogin } from '@/app/action';
import Link from 'next/link'
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

function FormButton() {
    const { pending } = useFormStatus()

    return (
        <>
            {pending ? (
                <button
                    className="w-full py-3 px-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
                    disabled={pending}
                >
                    Entrando...
                </button>
            ) : (
                <button className="w-full py-3 px-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors">
                    Entrar
                </button>
            )}
        </>
    )
}

export default function LoginComponent() {
    const [state, action] = useActionState(userLogin, {
        ok: false,
        error: '',
    })

    return (
        <div className="min-h-screen flex items-center justify-center p-2">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Entrar na Conta</h2>
                <form action={action} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
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
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                            placeholder="********"
                        />
                    </div>
                    <FormButton />
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Ainda não tem uma conta?{' '}
                    <Link href="/register" className="text-emerald-600 hover:underline">
                        Criar conta
                    </Link>
                </p>
                {state && state.error && (
                    <span className="text-xs text-red-600">{state.error}</span>
                )}
            </div>
        </div>
    );
}
