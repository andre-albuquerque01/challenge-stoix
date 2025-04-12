'use client'

import { userEditarPassword } from "@/app/action"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { FaArrowLeft } from "react-icons/fa"

export default function EditarPasswordComponent() {
    const [error, setError] = useState<string | boolean>()
    const router = useRouter()

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        const req = await userEditarPassword(data)
        console.log(req);

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
                <div className="mb-6">
                    <Link
                        href="/dashboard"
                        className="text-sm text-emerald-600 hover:underline"
                    >
                        <span className='flex items-center'>
                            <FaArrowLeft size={18} />  Voltar para o Dashboard
                        </span>
                    </Link>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Alterar a senha</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="password_old" className="block text-sm font-medium text-gray-700">
                            Senha atual
                        </label>
                        <input
                            type="password"
                            id="password_old"
                            name="password_old"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                            required
                            placeholder="********"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Nova senha
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
                    <button
                        type="submit"
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
