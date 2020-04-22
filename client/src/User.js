import React from 'react';

function User(props) {
  return (
    <div>
      <p>id: {props.user.id}</p>
      <p>name: {props.user.name} </p>
      <p>username: {props.user.username}</p>
      <p>email: {props.user.email}</p>
      <p>phone: {props.user.phone}</p>
      <br/>
    </div>
  )
}

export default User;