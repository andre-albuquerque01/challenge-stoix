import { userProfile } from "@/app/action";
import UpdateComponent from "@/components/user/update";

export default async function Update() {
    const data = await userProfile()
    return (
        <div><UpdateComponent data={data} /></div>
    );
}
