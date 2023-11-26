import React, { useEffect, useState } from "react";
import "../css/SingleProjectEdit.css";
import { makeGETRequest, makePOSTRequest } from "../utils/serverHerlper";
import { useParams, useNavigate } from "react-router-dom";
import UploadWidget from "./UploadWidget";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [view, setView] = useState("");
  const [source, setSource] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [oneProject, setOneProject] = useState([]);
  const { projectId } = useParams();

  // const projectId = "65622128d931815a33789758";

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const response = await makeGETRequest(
        "/project/get/singleproject/" + projectId
      );
      setOneProject(response.data);
    };
    getData();
  }, [projectId]);

  const item = oneProject[0] || {};

  const submitProject = async () => {
    const data = {
      title: title,
      thumbnail: imgUrl,
      text: text,
      view: view,
      source: source,
    };

    if (data.title === "") {
      data.title = item.title || "";
    }
    if (data.text === "") {
      data.text = item.text || "";
    }
    if (data.thumbnail === "") {
      data.thumbnail = item.thumbnail || "";
    }
    if (data.source === "") {
      data.source = item.source || "";
    }
    if (data.view === "") {
      data.view = item.view || "";
    }

    const response = await makePOSTRequest(
      "/project/update/" + projectId,
      data
    );
    if (response.err) {
      alert("Could not update Project");
    } else {
      alert(response.message);
      navigate("/");
    }
  };

  const deleteProject = async () => {
    try {
      await makeGETRequest("/project/delete/" + projectId);
      navigate("/");
    } catch (err) {
      alert("Could not delete Project");
    }
  };

  return (
    <div className="upload-container">
      <div className="form">
        <label htmlFor="title">Edit Title </label>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title === "" ? item.title || "" : title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="thumbnail">Edit Thumbnail </label>
        <label htmlFor="">{uploadedFileName} </label>
        <UploadWidget setUrl={setImgUrl} setName={setUploadedFileName} />
        <label htmlFor="view">Edit View Url </label>
        <input
          type="text"
          name="view"
          placeholder="Website url paste here"
          value={view === "" ? item.view || "" : view}
          onChange={(e) => setView(e.target.value)}
        />
        <label htmlFor="source">Edit Source Url </label>
        <input
          type="text"
          name="source"
          value={source === "" ? item.source || "" : source}
          onChange={(e) => setSource(e.target.value)}
        />
        <label htmlFor="text">Edit Text </label>
        <textarea
          name="text"
          rows="3"
          value={text === "" ? item.text || "" : text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="edit-btns">
          <button type="submit" className="btn" onClick={submitProject}>
            Update
          </button>
          <button type="delete" className="btn" onClick={deleteProject}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
