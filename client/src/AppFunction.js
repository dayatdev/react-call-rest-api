// === React function using react hooks (useState, useEffect) === 

import React, {useState, useEffect} from 'react';
import axios from 'axios';

import User from './User';

function AppFunction() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // (1) API call using axios
    axios.get('http://localhost:5000/users').then(response => {
      const usersFromApi = response.data;
      setUsers(usersFromApi);
    })

    // (2) API call using fetch
    // fetch('http://localhost:5000/users').then(response => {
    //   return response.json();
    // }).then(usersFromApi => {
    //   setUsers(usersFromApi)
    // })
  }, [])

  if (users.length) {
    return (
      <div>
        {users.map(user => <User key={user.id} user={user}/>)}
      </div>
    )
  }

  return <h2>Users not found</h2>
}

export default AppFunction;