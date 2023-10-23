import {useEffect, useState} from "react";

function ContactForm({addContact, contacts}) {

    const [contact, setContact] = useState({fullName: '', phoneNumber: ''});


    //form clear eğer contacts değişmiş ise form u temizle
    useEffect(() => {
        //reset
        setContact({fullName: '', phoneNumber: ''});
    }, [contacts]);

    //inputlar değiştiğinde contact objeyi setle
    const onChangeFormValue = (e) => {
        setContact({...contact, [e.target.name]: e.target.value})
    }


    const onSubmit = (e) => {
        e.preventDefault();

        if (contact.fullName === '' || contact.phoneNumber === '') {
            return;
        }
        addContact([...contacts, contact]);
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Create Contact </h2>

            <div>
                <label htmlFor="fullName">Name</label>
                <input
                    name="fullName"
                    id="fullName"
                    value={contact.fullName}
                    onChange={onChangeFormValue}/>
            </div>

            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    name="phoneNumber"
                    id="phoneNumber"
                    value={contact.phoneNumber}
                    onChange={onChangeFormValue}/>
            </div>

            <div className="action-buttons">
                <button>Add</button>
            </div>


        </form>
    )
}

export default ContactForm;