import React from "react"
import Add from "../components/Add"
import User from "../components/User"

const Admin = (users, delUser, addUser) => {
    return (
        <div>
            <Add addUser={addUser} />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Delete?</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <User key={u._id} user={u} delUser={delUser} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin