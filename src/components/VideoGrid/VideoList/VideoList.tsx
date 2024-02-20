'use client';

import React from "react";
import SingleVideo from "../SingleVideo/SingleVideo";
import { VideoType, VideosStateType, useGetVideosQuery } from "@/lib/redux/apiSlice/apiSlice";

const VideoList = () => {
  const {data, isError, isLoading, isSuccess} = useGetVideosQuery();

  console.log("data", data);
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {/* <!-- single video --> */}
        {typeof(data) !== undefined && data?.map((video: VideoType) => (
          <SingleVideo key={video.id} video={video} />
        ))}

        {/* <!-- error section
                    <div className="col-span-12">some error happened</div> 
                    --> */}
      </div>
    </section>
  );
};

export default VideoList;
