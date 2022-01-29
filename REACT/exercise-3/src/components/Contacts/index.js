import { useEffect, useState } from 'react/cjs/react.development';
import List from './List';
import Form from './Form';

function Contacts() {
    const [contacts, setContacts] = useState([
        { fullname: "Mes Lif", number: "0539 999 99 99" },
        { fullname: "Girgir Lif", number: "0539 999 98 97" },
        { fullname: "Girgir Mes", number: "0539 919 98 97" }
    ]);

    return (<div id="container">
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />
    </div>)
}

export default Contacts;
