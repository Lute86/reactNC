import { useEffect, useState } from "react";
import axios from 'axios'
import { useGlobalState } from "../../Context/context";

const Users = () => {
  const [users, setUsers] = useState([])
  const { API_URL } = useGlobalState()

  useEffect(()=>{
    async function fetchUsers(){
      const users = await axios.get(`${API_URL}/admin/users`)
      console.log(users.data.data);
      setUsers(users.data.data)
    }
    fetchUsers()
  },[])


  return (
    <div>
      <h2>Users</h2>
      {users?.map((user) => (
        <p>
         {user.nombre} {user.apellido} {user.dni}
        </p>
      ))}
    </div>
  );
};

export default Users;

