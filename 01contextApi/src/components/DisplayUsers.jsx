import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const DisplayUsers = () => {
    const {userData} = useContext(UserContext);
  return (
    <>
        {userData && <h1>{userData.username}</h1>}
        {userData && <p>{userData.email}</p>}
    </>
  )
}

export default DisplayUsers