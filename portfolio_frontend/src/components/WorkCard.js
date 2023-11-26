import "../css/WorkCardStyle.css";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { NavLink, Link } from "react-router-dom";

const WorkCard = (props) => {
  const [cookie, setCookie] = useCookies(["email"]);
  return (
    <div className="project-card">
      <img src={props.thumbnail} alt={"no Img "} />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className={"btn"} target="_blank">
            View
          </NavLink>
          <NavLink to={props.source} className={"btn"} target="_blank">
            Source
          </NavLink>
          {cookie.email && (
            <NavLink to={"/edit/" + props.projectId} className={"btn"}>
              Edit
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
