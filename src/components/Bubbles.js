const Bubbles = (props) => {

  return (
    <div style={{height: props.size, width: props.size, left: props.horPosition, top: props.verPosition, opacity: props.opacity}} ref={props.reference} className="bubble"></div>
  )
}

export default Bubbles