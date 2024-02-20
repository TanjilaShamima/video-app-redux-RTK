"use client";
import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import VideoDetails from "@/src/components/VideoDetails/VideoDetails";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const VideoDetailsPage = () => {
  const params = useParams();
  console.log("params", params);
  //const id = String(params.id)?.split("%3D")[1];

  return (
    <div>
      {/* <!-- navigation --> */}
      <Navbar />

      <VideoDetails id={Number(params.id)} />

      {/* <!-- footer --> */}
      <Footer />
    </div>
  );
};

export default VideoDetailsPage;
