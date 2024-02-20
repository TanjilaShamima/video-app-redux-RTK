import React from "react";

interface Props {
  title: string;
  link: string;

}

const VideoPlayer = ({title, link}: Props) => {
  console.log("link", link);
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={link}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default VideoPlayer;
