import React from "react";

function Video() {

  return (
    <div className="flex relative">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ijxoiPpSmf4?si=DKpbuEwJtvC5sxwm"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-md w-full"
      ></iframe>
    </div>
  );
}

export default Video;

