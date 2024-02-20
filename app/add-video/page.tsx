import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import NewVideoCreate from "@/src/components/NewVideoCreate/NewVideoCreate";
import React from "react";

const AddVideo = () => {
  return (
    <div>
      <Navbar />

      {/* <!-- Add Video Form --> */}
      <NewVideoCreate />

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
};

export default AddVideo;
