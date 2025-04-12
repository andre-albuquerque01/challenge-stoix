import { getAllTasks } from "@/app/action";
import DashboardComponent from "@/components/task/dashboard";

export default async function Dashboard() {
    const data = await getAllTasks()

    return (
        <div className="mt-20"><DashboardComponent data={data} /></div>
    );
}
