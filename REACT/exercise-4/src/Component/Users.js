import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { Link } from 'react-router-dom'
//import { axios } from 'axios'

function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => { setUsers(json) })
            .catch((e) => { console.log(e); })
            .finally(() => { setIsLoading(false) })

    }, [])

    return (
        <div>
            <h1>Users</h1>
            {isLoading && <div>Loading...</div>}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{"User name: " + user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users;