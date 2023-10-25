import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import "./DeleteIcon.scss";

function DeleteIcon({ id }) {
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <div className="delete-icon">
      <MdDeleteOutline
        className="delete-icon__svg"
        size={30}
        onClick={() => {
          handleClick(id);
        }}
      />
    </div>
  );
}

export default DeleteIcon;
