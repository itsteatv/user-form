import "./ErrorModal.css";
import Button from "./Button";

function ErrorModal(props) {
  return (
    <div>
      <div className="backdrop" onClick={props.onModalHandler}></div>
      <div className="modal">
        <header className="header">
          <div className="title">{props.title}</div>
        </header>
        <div className="message">
          <p>{props.message}</p>
        </div>
        <footer className="footer">
            <Button onClick={props.onModalHandler} >Ok!</Button>
        </footer>
      </div>
    </div>
  );
}

export default ErrorModal;
