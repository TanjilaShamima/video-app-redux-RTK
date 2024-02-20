import React from "react";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoDescription from "./VideoDescription/VideoDescription";
import RelatedVideo from "./RelatedVideo/RelatedVideo";

const VideoDetails = () => {
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {/* <!-- video player --> */}
            <VideoPlayer />

            {/* <!-- video description --> */}
            <VideoDescription />
          </div>

          {/* <!-- related videos --> */}
          <RelatedVideo />
        </div>
      </div>
    </section>
  );
};

export default VideoDetails;
