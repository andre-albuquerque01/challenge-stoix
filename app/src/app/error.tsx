'use client'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col justify-center items-center gap-3 h-[calc(100vh-80px)]">
            <h1 className="text-white text-2xl">
                Olá! Desculpe, infelizmente aconteceu algo não esperado.
            </h1>
            <button
                onClick={() => reset()}
                className="w-full py-3 px-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
            >
                Tente novamente
            </button>
        </div>
    )
}