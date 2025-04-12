import { FormatDate } from '@/data/functions/formatDate'
import { TaskInterface } from '@/data/interface/taks'
import Link from 'next/link'
import { DeletarTaskComponent } from './deletar'

export default function DashboardComponent({ data }: { data: TaskInterface[] }) {
    return (
        <div className="p-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-center md:text-left text-white">Minhas Tarefas</h1>
                    <Link
                        href="/task/create"
                        className="mt-4 md:mt-0 px-5 py-2 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition"
                    >
                        + Criar Tarefa
                    </Link>
                </div>

                <div className="space-y-4">
                    {data &&
                        data.map(task => (
                            <div
                                key={task.id}
                                className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                            >
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
                                    <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                                    <div className="text-sm text-gray-500">
                                        <p>Início: {FormatDate(task.data_start)}</p>
                                        <p>Fim: {FormatDate(task.data_end)}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <Link
                                        href={`/task/${task.id}`}
                                        className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                                    >
                                        Editar
                                    </Link>
                                    <DeletarTaskComponent id={task.id} />
                                </div>
                            </div>
                        ))}
                    {data.length === 0 && (
                        <p className="text-center text-white mt-10">Nenhuma tarefa cadastrada.</p>
                    )}
                </div>
            </div>
        </div>
    )
}
