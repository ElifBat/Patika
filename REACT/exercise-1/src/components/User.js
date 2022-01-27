import PropTypes from 'prop-types';
function User({ isLoggedIn, name, surname, age, friends, address }) {
    if (!isLoggedIn) {
        return <div> Giriş yapınız.</div>;
    }
    return (
        <>
            <h1> {`${name} ${surname} (${age})`}</h1>

            {friends.map((friend) =>
                (<div key={friend.id}> {friend.name} </div>)
            )}
        </>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string,
    age: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    friend: PropTypes.array,
    isLoggedIn: PropTypes.bool,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    name: "Unnamed",
    isLoggedIn: false
}
export default User;