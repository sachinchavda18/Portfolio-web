// CloudinaryUpload.js
import { openUploadWidget } from "../utils/CloudinaryService.js";
import { cloudinary_upload_preset } from "../utils/config.js";

const CloudinaryUpload = ({ setUrl, setName }) => {
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dbm00gxt1",
        uploadPreset: cloudinary_upload_preset,
        sources: ["local"],
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
    myUploadWidget.open();
  };

  return (
    <button  onClick={uploadImageWidget}
    >
      Select Image
    </button>
  );
};

export default CloudinaryUpload;
