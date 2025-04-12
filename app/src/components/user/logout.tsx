'use client'

import { userLogout } from "@/app/action"
import { FaSignOutAlt } from "react-icons/fa"

export const LogoutComponent = () => {
    const handleLogout = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault()
        await userLogout()
    }
    return (
        <button
            onClick={(e) => handleLogout(e)} title="Sair"
            className="flex items-center gap-2 hover:text-neutral-200 cursor-pointer transition"
        >
            <FaSignOutAlt size={16} />Sair
        </button>

    )
}