import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext';

const CreateUser = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {setUserData} = useContext(UserContext);

    const handleCreateUser = (e) => {
        e.preventDefault();
        const user = {username, email, password}
        setUserData(user);
    }

  return (
    <form onSubmit={handleCreateUser}>
        <label htmlFor="username">Username</label>
        <input onChange={(e) => setUsername(e.target.value)} type="text" name='username' id='username' />
        <br />
        <label htmlFor="email">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' id='email' />
        <br />
        <label htmlFor="password">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' id='password' />
        <br />
        <button type='submit'>Create User</button>
    </form>
  )
}

export default CreateUser