import React, { useEffect, useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import User from './User'
//import { axios } from 'axios'

function Users() {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const {path, url} = useRouteMatch();

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
                        <NavLink activeClassName="active" to={`${url}/${user.id}`}>{"User name: " + user.name}</NavLink>
                    </li>
                ))}
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a user.</h3>
                </Route>
                <Route path={`${path}/:id`} component={User}>
                </Route>
            </Switch>
        </div>
    )
}

export default Users;