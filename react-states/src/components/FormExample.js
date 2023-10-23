import {useState} from "react";

function FormExample() {
    // const [name, setName] = useState();
    // const [surname, setSurname] = useState();
    //
    // const onChangeName = (evt) => setName(evt.target.value);
    // const onChangeSurname = (evt) => setSurname(evt.target.value);
    //
    const onRegister = () => {
        // console.log(name + " " + surname);
        // setSurname('')
        // setName('');
        console.log(user)
        alert("İşlem Başarılı");

        setUser({name: '', surname: ''})
    }

    const onChangeForm = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const [user, setUser] = useState({name: '', surname: ''})

    return (
        <form>
            <div>
                <label htmlFor="name"> Ad:</label>
                <input value={user.name}
                       id="name"
                       name="name"
                       onChange={onChangeForm}/>
            </div>

            <div>
                <label htmlFor="surname">Soyad:</label>
                <input value={user.surname}
                       id="surname"
                       name="surname"
                       onChange={onChangeForm}/>
            </div>

            <div>
                <button type="button"
                        onClick={onRegister}>Kaydet
                </button>
            </div>
        </form>
    )
}


export default FormExample;