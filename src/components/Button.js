const Button = ({color, textColor, text}) => {
  return (
    <button style={{backgroundColor: color, color: textColor}} className="btn">
        {text}
    </button>
  )
}

export default Button