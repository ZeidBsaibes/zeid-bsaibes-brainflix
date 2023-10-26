import UploadForm from "../../components/UploadForm/UploadForm";
import UploadTitle from "../../components/UploadTitle/UploadTitle";

import "./UploadPage.scss";

import React from "react";

function UploadPage() {
  return (
    <>
      <div>
        <UploadTitle />
      </div>
      <div>
        <UploadForm />
      </div>
    </>
  );
}

export default UploadPage;
