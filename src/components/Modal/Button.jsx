import "./Button.css";

function Button(props) {
  return (
    <div onClick={props.onClick} className={`${"button"} ${props.className}`}>{props.children}</div>
  )
}

export default Button