import "../css/WorkCardStyle.css";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { NavLink, Link } from "react-router-dom";

const WorkCard = (props) => {
  const [cookie, setCookie] = useCookies(["email"]);
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }

    // Find the last space before the character limit
    const lastSpaceIndex = text.lastIndexOf(" ", limit);

    // Ensure we have a valid space before the limit
    const truncatedText =
      lastSpaceIndex !== -1
        ? text.substring(0, lastSpaceIndex)
        : text.substring(0, limit);

    return truncatedText;
  };
  const displayText = showFullText ? props.text : truncateText(props.text, 150);

  return (
    <div className="project-card">
      <img src={props.thumbnail} alt={"no Img "} />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{displayText}</p>
        {props.text.length > 150 && (
          <span className="read-more-btn" onClick={toggleText}>
            {showFullText ? "Read Less" : "Read More"}
          </span>
        )}
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
