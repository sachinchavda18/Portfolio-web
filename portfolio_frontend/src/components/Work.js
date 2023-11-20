import "../css/WorkCardStyle.css";
import React, { useEffect, useState } from "react";
import WorkCard from "./WorkCard";
import {makeGETRequest} from "../utils/serverHerlper"

const Work = () => {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await makeGETRequest("/project/get/allproject");
      setProjectData(response.data)
    };
    getData()
  },[]);

  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {projectData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              thumbnail={val.thumbnail}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
        {/* {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgSrc={val.imgSrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default Work;
