import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
function Meme(props) {
  function handleClick() {
    props.onDel(props.id);
  }
  const Img = props.src;
  return (
    <div className="polaroid">
      <img src={Img} alt="sorry :(" width="100" height="200" />
      <button className="btn btn-warning btn-circle" onClick={handleClick}>
        <DeleteOutlineIcon />
      </button>
    </div>
  );
}

export default Meme;
