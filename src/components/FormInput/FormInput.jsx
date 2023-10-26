import React from "react";
import "./FormInput.scss";

function FormInput() {
  return (
    <div className="form-input">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="form-input__field form-input__icon"
      ></input>
    </div>
  );
}

export default FormInput;
