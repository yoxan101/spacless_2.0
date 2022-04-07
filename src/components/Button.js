const Button = (props) => {
  return (
    <button className="btn" ref={props.reference} style={{
      cursor: 'pointer', 
      border: 'none', 
      borderRadius: '20px',
      backgroundColor: props.color, 
      color: props.textColor, 
      height: props.height, 
      width: props.width,
      fontSize: '1.5rem',
      fontWeight: "bold",
      letterSpacing: '1px'
      }}>
        {props.text}
    </button>
  )
}

Button.defaultProps = {
  color: "#16c79a",
  textColor: "#b8d3e0",
  text: "Clik on Me!",
  height: '50px',
  width: '200px',
}

export default Button