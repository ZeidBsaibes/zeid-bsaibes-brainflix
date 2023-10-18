import React from "react";
import Avatar from "../Avatar/Avatar";
import FormInput from "../FormInput/FormInput";
import FormSubmit from "../FormSubmit/FormSubmit";

function CommentsForm() {
  return (
    <div>
      This is comments form
      <Avatar />
      <FormInput />
      <FormSubmit />{" "}
    </div>
  );
}

export default CommentsForm;
