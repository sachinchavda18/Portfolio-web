import React, { useEffect, useRef } from "react";

const UploadWidget = ({setUrl, setName}) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    // console.log(cloudinaryRef)
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dbm00gxt1",
        uploadPreset: "Portfolio",
      },
      function (error, result) {
        if (!error && result.event === "success") {
            setUrl(result.info.secure_url);
            setName(result.info.original_filename);
          } else {
            if (error) {
              console.log(error);
            }
          }
      }
    );
  }, []);

  return <button onClick={() => widgetRef.current.open()}>upload Image</button>;
};

export default UploadWidget;
