import { createContext, useEffect, useState } from "react";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();
import { FcAddImage } from "react-icons/fc";
function CloudinaryUploadWidget({ uwConfig, setPublicId, handleNewImg }) {
  const [loaded, setLoaded] = useState(false);
  const iframes = document.querySelectorAll("iframe");
  const uniqueSrcs = new Set();
  let myWidget;
  // Iterate over the iframes
  iframes.forEach((iframe) => {
    const src = iframe.getAttribute("src");

    // Check if the src is already in the set
    if (uniqueSrcs.has(src)) {
      // If it's a duplicate, remove the iframe
      iframe.remove();
    } else {
      // Otherwise, add the src to the set
      uniqueSrcs.add(src);
    }
  });
  console.log(iframes);
  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, []);

  const initializeCloudinaryWidget = () => {
    console.log(1);
    if (loaded) {
      myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            handleNewImg(result.info.url);
            setPublicId(result.info.public_id);
            myWidget.close();
          }
        },
        () => {}
      );

      document.getElementById("upload_widget").addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <FcAddImage
        id="upload_widget"
        className=" bg-[#fff] w-6 h-6"
        onClick={initializeCloudinaryWidget}
      />
    </CloudinaryScriptContext.Provider>
  );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
