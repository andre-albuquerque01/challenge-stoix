import { getTaskById } from "@/app/action";
import EditarTaskComponent from "@/components/task/editar";

type Params = Promise<{ id: number }>

export default async function EditarTask(props: { params: Params }) {
    const params = await props.params
    const id = await params.id

    const data = await getTaskById(id)

    return (
        <div><EditarTaskComponent data={data} id={id} /></div>
    )
}