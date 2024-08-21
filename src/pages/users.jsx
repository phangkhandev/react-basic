import UserForm from "../component/user/user.form";
import UserTable from "../component/user/user.table";

const UserPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <UserForm />

            <UserTable />
        </div>
    )
}

export default UserPage;