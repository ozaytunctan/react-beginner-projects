import React from "react";
import PropTypes from "prop-types";

function User({name, surname, age, isLoggedIn, friends, address}) {

    if (!isLoggedIn) {
        return <div>Giriş Yapınız.</div>
    }
    return (

        <div>
            <h2>
                {`Ad-Soyad: ${name} ${surname} (${age})`}
            </h2>

            {`${address.title} ${address.zipCode}`}

            {friends && friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
        </div>)
}

//Property tipleri belirtmek için
User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string, // age: PropTypes.number | PropTypes.string,
    age: PropTypes.oneOfType(PropTypes.number, PropTypes.string).isRequired,
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array,
    address: PropTypes.shape({title: PropTypes.string, zipCode: PropTypes.number | PropTypes.string})
}

//Varsayılan değer atamak için
User.defaultProps = {
    isLoggedIn: false
}
export default User;