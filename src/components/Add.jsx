import React from "react"


const Add = ({ addUser }) => {
    const onSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.Username.value
        const password = e.target.password.value
        addUser({ name, email, password })
}
}

return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="Username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">
                Add User
            </button>
        </form>
    )

export default Add