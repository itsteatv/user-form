import "./UserList.css";
import { FaTrash } from 'react-icons/fa';
import Button from "../Modal/Button";

function UserList(props) {
  const deleteUserHandler2 = function () {
    props.onDeleteUser(props.id);
  };

  const deleteAllUserHandler = function () {
    props.onDeleteAllUser();
  };

  return (
    <div>
      <ul>
      {props.user.map((user) => (
        <li key={user.id} id={user.id} >
          {user.name} - {user.age} years old
          <button className="trash-button" onClick={deleteUserHandler2} > <FaTrash/> </button>
          </li>
        ))}
        <div className="deleteAll-container">
      <Button className="deleteAll-button" onClick={deleteAllUserHandler} > Delete All <FaTrash/> </Button>
        </div>
    </ul>
    </div>
    
  );
}

export default UserList;
