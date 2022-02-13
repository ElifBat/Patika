import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function User() {
    const [user, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    let { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => { res.json() })
            .then((data) => { setUsers(data) })
            .finally(() => { setIsLoading(false) })
    }, [id])

    return (
        <div>
            <h1>User Details</h1>
            {isLoading && <p>Loading</p>}
            <pre>id: {id}</pre>
            {!isLoading && <code>{JSON.stringify(user)}</code>}
            <br /><br />
            {<Link to={`/users/${parseInt(id) + 1}`}>
                Next User ({parseInt(id) + 1})
            </Link>}
        </div>
    )
};

export default User;