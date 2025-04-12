import { userProfile } from "@/app/action";
import UserProfileComponent from "@/components/user/profile";

export default async function Profile() {
    const data = await userProfile()
    return (
        <div>
            <UserProfileComponent
                name={data.name}
                email={data.email}
            />
        </div>
    );
}