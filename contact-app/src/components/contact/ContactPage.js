import ContactList from "./contact-list/ContactList";
import ContactForm from "./contact-from/ContactForm";
import {useEffect, useState} from "react";
import './ContactPage.css';

function ContactPage() {

    const [contacts, setContacts] = useState([
        {
            fullName: "ozay tunçtan",
            phoneNumber: "05380110467"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);


    return (
        <div id="container">

            <h1>Contacts</h1>

            <ContactList contacts={contacts}/>

            <ContactForm addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default ContactPage;