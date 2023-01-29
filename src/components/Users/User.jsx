import "./User.css";
import { FaUserPlus } from 'react-icons/fa';
import { useState } from "react";
import ErrorModal from "../Modal/ErrorModal";

function User(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [modal, setModal] = useState();

    const usernameHandler = function(e) {
      setEnteredUsername(e.target.value);
    }

    const ageHandler = function(e) {
      const limitInputNumbers = 3;
      setEnteredAge(e.target.value.slice(0, limitInputNumbers));
    }

    const modalHandler = function() {
      setModal(null);
    }

    const addUserHandler = function(e) {
      e.preventDefault();
      if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setModal({
          title: "WTF!, Invalid Input",
          error: "Please Enter A Valid Name & Age"
        })
        return;
      } 

      if(+enteredAge < 1) {
        setModal({
          title: "WTF! Invalid Age",
          error: "Please Enter A Valid Age (More Than 0)"
        })
        return;
      }
      
      if(+enteredAge > 120) {
        setModal({
          title: "WTF! Invalid Age",
          error: "Please Enter Age Less Than 120"
        })
        return;
      }

      props.addUser(enteredUsername, enteredAge);
      setEnteredUsername("");
      setEnteredAge("");
    }


  return (
    <div>
      {modal ? <ErrorModal title={modal.title} message={modal.error} onModalHandler={modalHandler} /> : ""}
      <form onSubmit={addUserHandler} className="form-container" autoComplete="off">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="Your Name" onChange={usernameHandler} value={enteredUsername} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" placeholder="Your Age" onChange={ageHandler} value={enteredAge} />
        <button className="button" type="submit">Add User <FaUserPlus size={20} className="react-icons"/> </button>
    </form>
    </div>
  )
}

export default User