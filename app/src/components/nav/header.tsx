'use client'

import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
import { LogoutComponent } from '../user/logout'

export default function HeaderNav() {
    return (
        <header className="w-full bg-emerald-600 text-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/dashboard">
                    <h1 className="text-xl font-bold tracking-wide hover:opacity-90 transition">
                        TaskManager
                    </h1>
                </Link>

                <nav className="flex items-center gap-6 text-sm font-medium">
                    <Link
                        href="/profile"
                        className="flex items-center gap-2 hover:text-neutral-200 transition"
                    >
                        <FaUser size={16} />
                        Perfil
                    </Link>
                    <LogoutComponent />
                </nav>
            </div>
        </header>
    )
}
