import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

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
    {
        users.map((user) => {
            console.log(user.name);

        })
    }

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {users.map((user) =>  <div key={user.id}>{user.name}</div>
            )}
        </div>
    )
}

export default Users;
