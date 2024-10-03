import React, {useEffect, useState} from 'react';
import UserServices from '../../../services/UserServices';
const UserList = () => {
    const [users,setusers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await UserServices.getUsers();
        setusers(response.data);
    };

    const addUser = async () => {
        const newUser = { name: "Devesh yadav", email: "dy88292@gmail.com"};
        await UserServices.createUser(newUser);
        fetchUsers();
    };

    const deleteUser = async (id) => {
        await UserServices.deleteUser(id);
        fetchUsers();
    };

    

  return (
    <div>
    <h1>User List</h1>
      <button  onClick={addUser}>Add User</button>
      <ul>
        {users.map(user =>(
            <li key={user.id}>
                {user.name} ({user.email})

                <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
        ) )}
      </ul>
    </div>
  )
}

export default UserList;
