import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import "./DeleteIcon.scss";
import deleteComment from "../../scripts/utils/delete-comment";
import fetchVideosFromId from "../../scripts/utils/fetch-videos-detail";

function DeleteIcon({ commentId, videoId, setComments }) {
  const handleDelete = async (videoId, commentId) => {
    try {
      console.log(`commentid`, commentId);
      console.log(`videoId`, videoId);
      const response = await deleteComment(videoId, commentId);
      console.log(response);
      const updatedVideoObject = await fetchVideosFromId(videoId);

      setComments(updatedVideoObject.comments);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="delete-icon">
      <MdDeleteOutline
        className="delete-icon__svg"
        size={30}
        onClick={() => {
          handleDelete(videoId, commentId);
        }}
      />
    </div>
  );
}

export default DeleteIcon;
