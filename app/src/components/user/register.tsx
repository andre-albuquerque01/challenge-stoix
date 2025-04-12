'use client'

import { userCreateAccount } from '@/app/action';
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
                    Criando...
                </button>
            ) : (
                <button className="w-full py-3 px-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors">
                    Criar
                </button>
            )}
        </>
    )
}

export default function RegisterComponent() {
    const [state, action] = useActionState(userCreateAccount, {
        ok: false,
        error: '',
    })

    return (
        <div className="min-h-screen flex items-center justify-center p-2">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Criar Conta</h2>
                <form action={action} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Nome
                        </label>
                        <input
                            type="name"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                            required
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
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
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
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                            required
                            placeholder="********"
                        />
                    </div>
                    <div>
                        <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                            Confirmar Senha
                        </label>
                        <input
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                            required
                            placeholder="********"
                        />
                    </div>
                    <FormButton />
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Já tem uma conta?{' '}
                    <Link href="/" className="text-emerald-600 hover:underline">
                        Entrar
                    </Link>
                </p>
                {state && state.error && (
                    <span className="text-xs text-red-600">{state.error}</span>
                )}
            </div>
        </div>
    );
}
