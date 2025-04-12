'use client'

import { createTask } from '@/app/action'
import Link from 'next/link'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { FaArrowLeft } from 'react-icons/fa'

function FormButton() {
    const { pending } = useFormStatus()

    return (
        <>
            {pending ? (
                <button
                    className="w-full py-3 px-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
                    disabled={pending}
                >
                    Salvando tarefa...
                </button>
            ) : (
                <button className="w-full py-3 px-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors">
                    Salvar tarefa
                </button>
            )}
        </>
    )
}

export default function CreateTaskComponent() {
    const [state, action] = useActionState(createTask, {
        ok: false,
        error: '',
    })

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg">
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

                <h2 className="text-2xl font-bold text-center mb-6 text-emerald-600">Criar Nova Tarefa</h2>

                <form action={action} className="space-y-5">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Título
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Descrição
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                            rows={4}
                            required
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label htmlFor="data_start" className="block text-sm font-medium text-gray-700">
                                Data de Início
                            </label>
                            <input
                                type="date"
                                id="data_start"
                                name="data_start"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                                required
                            />
                        </div>

                        <div className="flex-1">
                            <label htmlFor="data_end" className="block text-sm font-medium text-gray-700">
                                Data de Término
                            </label>
                            <input
                                type="date"
                                id="data_end"
                                name="data_end"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                                required
                            />
                        </div>
                    </div>

                    <FormButton />
                </form>
                {state && state.error && (
                    <span className="text-xs text-red-600">{state.error}</span>
                )}
            </div>
        </div>
    )
}
