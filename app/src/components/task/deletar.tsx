'use client'

import { deleteTask } from "@/app/action"

export const DeletarTaskComponent = ({ id }: { id: number }) => {
    const handleRemove = async (
        id: number,
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault()
        if (confirm('Tem certeza da exclusão?')) await deleteTask(id)
    }
    return (
        <button
            onClick={(e) => handleRemove(id, e)} title="Excluir task"
            className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
        >
            Excluir
        </button>
    )
}