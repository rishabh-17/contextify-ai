import React from "react";
import { ShareSocial } from "react-share-social";
import { IoClose } from "react-icons/io5";

export default function index({ url, setSharePop }) {
  return (
    <div className="absolute md:w-2/3 w-fit  h-fit left-0 right-0 top-0 bottom-0 m-auto  bg-[#fff]  border shadow-md">
      <div className="flex justify-end m-1 mb-0">
        <IoClose
          className="h-4 w-4 text[#000] cursor-pointer"
          onClick={() => setSharePop(false)}
        />
      </div>
      <ShareSocial
        url={url}
        socialTypes={[
          "facebook",
          "twitter",
          "line",
          "linkedin",
          "whatsapp",
          "viber",
          "telegram",
          "reddit",
          "instapaper",
          "livejournal",
          "mailru",
          "ok",
          "hatena",
          "email",
          "workspace",
        ]}
      />
    </div>
  );
}
