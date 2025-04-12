'use client'

import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function UserProfileComponent({
    name,
    email,
}: {
    name: string;
    email: string;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-8">
                <Link href="/dashboard" className="inline-block mb-6 text-sm text-emerald-600 hover:underline transition">
                    <span className="flex items-center gap-2 text-sm font-medium">
                        <FaArrowLeft size={14} />
                        Voltar para o Dashboard
                    </span>
                </Link>

                <h1 className="text-2xl font-bold mb-6 text-emerald-600">Perfil do Usuário</h1>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-500">Nome</label>
                        <p className="text-lg font-semibold text-gray-800">{name}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-500">Email</label>
                        <p className="text-lg font-semibold text-gray-800">{email}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link
                            href="/update"
                            className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                        >
                            Editar Perfil
                        </Link>
                        <Link
                            href="/editar"
                            className="px-5 py-2 bg-amber-500 text-white text-sm font-medium rounded-lg hover:bg-amber-600 transition"
                        >
                            Alterar Senha
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
