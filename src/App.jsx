import ThemeSwitcher from "./components/Theme Switcher/ThemeSwitcher";
import User from "./components/Users/User";
import UserList from "./components/Users/UserList";
import Button from "./components/Modal/Button";
import useLocalStorage from "./components/LocalStorage/useLocalStorage";
import "./App.css";

function App() {
  const [userList, setUserList] = useLocalStorage("userForm", []);

  const addUserHandler = function (enteredUserName, enteredAge) {
    setUserList((prevUserList) => {
      const newUser = [...prevUserList];
      newUser.unshift({
        name: enteredUserName,
        age: enteredAge,
        id: Math.random().toString(),
      });
      return newUser;
    });
  };

  const deleteUserHandler = function (id) {
    setUserList(prevUserList => {
      const newUser = [...prevUserList];
      newUser.splice(newUser.findIndex(value => value.id === id), 1);
      return newUser;
    })
  };

  const deleteAllUserHandler = function () {
    setUserList([]);
  }

  return (
    <div className="App">
      <ThemeSwitcher></ThemeSwitcher>
      <User addUser={addUserHandler} />
      <div className="container">
      {userList.length >= 1 ? <UserList user={userList} onDeleteUser={deleteUserHandler} onDeleteAllUser={deleteAllUserHandler} /> : <Button>Add Something (: </Button> }
      </div>
    </div>
  );
}

export default App;
