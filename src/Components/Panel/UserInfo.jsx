import './UserInfo.css'


const UserInfo = () => {
  const userJSON = localStorage.getItem('user');
  const userParse = JSON.parse(userJSON);
  const user = userParse[0]
  return (
    <div className="panel-user-info">
      <h3>Bienvenido: {user.nombre} {user.apellido}</h3>
      <p>DNI: {user.dni}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserInfo;
