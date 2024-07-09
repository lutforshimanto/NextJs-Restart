import React from 'react'

const UsersList = ({users}) => {
  return (
    <>
        <div className='text-6xl'>List of users:</div>
        <br></br>
        {users.map(user=>{
            return <div key={user.id} className='text-1xl'>
                <p><b>{user.name}</b>: {user.email}</p>
                <br></br>
            </div>
        })}
    </>
  )
}

export default UsersList;

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: {
            users: data
        }
    }
};