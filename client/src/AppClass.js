import React from 'react';
import axios from 'axios';

import User from './User';

class AppClass extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    // (1) API call using axios
    axios.get('http://localhost:5000/users').then(response => {
      const usersFromApi = response.data;
      this.setState({
        users: usersFromApi
      })
    })

    // (2) API call using fetch
    // fetch('http://localhost:5000/users').then(response => {
    //   return response.json();
    // }).then(usersFromApi => {
    //   this.setState({
    //     users: usersFromApi
    //   })
    // })
  }

  render() {
    if (this.state.users.length) {
      return (
        <div>
          {this.state.users.map(user => <User key={user.id} user={user}/>)}
        </div>
      )
    }
  
    return <h2>Users not found</h2>
  }
}

export default AppClass;