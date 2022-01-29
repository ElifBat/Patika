import React from 'react';
import { useState } from 'react/cjs/react.development';

function List({ contacts }) {
    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter(
        (item) => {
            return Object.keys(item).some(
                (key) => item[key].toString().toLowerCase().includes(filterText.toLowerCase())
            );
        });

    return (
        <div>
            <h1>Contacts List App</h1>
            <input
                placeholder={"I filter"}
                value={filterText}
                onChange={(event) => setFilterText(event.target.value)}
            />

            <ul className="list">
                {filtered.map((contact, i) => (
                    <li key={i}>
                        <span>{contact.fullname}</span>
                        <span>{contact.number}</span>
                    </li>
                ))}
            </ul>
            <p>Total contact ({filtered.length})</p>
        </div>
    );
}

export default List;
