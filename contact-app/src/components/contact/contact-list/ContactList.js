import React, {useState} from "react";

function ContactList({contacts}) {

    const [filterText, setFilterText] = useState('');

    const filteredContacts = contacts.filter((item) => {
        return Object.keys(item)
            .some((key) => item[key].toString().toLowerCase().includes(filterText.toLowerCase()))
    });


    return (<div>

        <div>
            <input value={filterText}
                   onChange={(e) => setFilterText(e.target.value)}
                   placeholder="Filter Contact"/>
        </div>

        <ul className="list">
            {
                filteredContacts.map((c, i) => (
                        <li key={i}>
                            <span>{c.fullName} </span>
                            <span> ({c.phoneNumber}) </span>
                        </li>
                    )
                )
            }
        </ul>

        <p>Total Contacts({filteredContacts.length})</p>


    </div>)
}

export default ContactList;