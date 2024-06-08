import { useState } from "react";
import CloudinaryUploadWidget from "./Cloudnairy";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
export default function Uploader({ handleNewImg, context }) {
  const [publicId, setPublicId] = useState("olympic_flag");
  const [cloudName] = useState("dmhrtscbx");
  const [uploadPreset] = useState("vbsvsreg");

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
    cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    multiple: false, //restrict upload to a single file
    folder: "context_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    theme: "purple", //change to a purple theme
  });

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  const myImage = cld.image(publicId);

  return (
    <div className="App">
      <CloudinaryUploadWidget
        uwConfig={uwConfig}
        context
        setPublicId={setPublicId}
        handleNewImg={handleNewImg}
      />
    </div>
  );
}
