import React, { useState } from "react";
import "../css/FormStyle.css";
import { makePOSTRequest } from "../utils/serverHerlper";
import { useNavigate } from "react-router-dom";
import UploadWidget from "./UploadWidget";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  // const [thumbnail, setThumbnail] = useState("");
  const [text, setText] = useState("");
  const [view, setView] = useState("");
  const [source, setSource] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState();
  const navigate = useNavigate();

  const submitProject = async () => {
    const data = { title, thumbnail: imgUrl, text, view, source };
    const response = await makePOSTRequest("/project/create", data);
    if (response.err) {
      alert("Could not create Project");
      return;
    }
    alert("Success");
    navigate("/");
  };

  return (
    <div className="upload-container">
      <div className="form">
        <label htmlFor="title">Project Title </label>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label htmlFor="thumbnail">Thumbnail </label>
        {/* <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail url paste here"
          value={thumbnail}
          onChange={(e) => {
            setThumbnail(e.target.value);
          }}
        /> */}
        {/* {uploadedSongFileName ? (
          <div >
            {uploadedSongFileName.substring(0, 35)}...
          </div>
        ) : (
          <CloudinaryUpload
            setUrl={setPlaylistUrl}
            setName={setUploadedSongFileName}
          />
          )} */}
        <UploadWidget setUrl={setImgUrl} setName={setUploadedFileName} />

        <label htmlFor="view">View Url </label>
        <input
          type="text"
          name="view"
          placeholder="Website url paste here"
          value={view}
          onChange={(e) => {
            setView(e.target.value);
          }}
        />

        <label htmlFor="source">Source Url </label>
        <input
          type="text"
          name="source"
          placeholder="Github or Source url paste here "
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
          }}
        />

        <label htmlFor="text">Text </label>
        <textarea
          name="text"
          rows="3"
          value={text}
          placeholder="About Project"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button type="submit" className="btn" onClick={submitProject}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UploadForm;
