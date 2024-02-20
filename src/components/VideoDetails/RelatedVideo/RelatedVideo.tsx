import { useGetRelatedVideosQuery } from "@/lib/redux/apiSlice/apiSlice";
import React from "react";
import RelatedSingleVideo from "./RelatedSingleVideo";

interface Props {
  title: string;
  id: number;
}

const RelatedVideo = ({ title, id }: Props) => {
  const { data, isError, isLoading, isSuccess, error } =
    useGetRelatedVideosQuery({ id, title });

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      {isSuccess &&
        data.map((video) => (
          <RelatedSingleVideo key={video.id} video={video} />
        ))}
    </div>
  );
};

export default RelatedVideo;
