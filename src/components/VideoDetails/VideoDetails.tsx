import React from "react";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoDescription from "./VideoDescription/VideoDescription";
import RelatedVideo from "./RelatedVideo/RelatedVideo";
import { useGetSingleVideoQuery } from "@/lib/redux/apiSlice/apiSlice";

interface Props {
  id: number;
}

const VideoDetails = ({ id }: Props) => {
  const { data, isError, isLoading, isSuccess, error } =
    useGetSingleVideoQuery(id);

  console.log("data", id);

  console.log("data", data);
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {/* <!-- video player --> */}
            {isSuccess && (
              <>
                <VideoPlayer title={data.title} link={data.link} />{" "}
                {/* <!-- video description --> */}
                <VideoDescription video={data} />
              </>
            )}
          </div>

          {/* <!-- related videos --> */}
          <RelatedVideo />
        </div>
      </div>
    </section>
  );
};

export default VideoDetails;
