import { VideoType } from "@/lib/redux/apiSlice/apiSlice";
import React from "react";

interface Props {
  video: VideoType
}

const VideoDescription = ({video}: Props) => {
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {video.title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {video.date}
        </h2>

        {/* <!-- delete/edit --> */}
        <div className="flex gap-10 w-48">
          <div className="flex gap-1">
            <div className="shrink-0">
              <img className="w-5 block" src="/assets/edit.svg" alt="Edit" />
            </div>
            <a
              href="add-video.html"
              className="text-sm leading-[1.7142857] text-slate-600"
            >
              Edit
            </a>
          </div>
          <div className="flex gap-1">
            <div className="shrink-0">
              <img
                className="w-5 block"
                src="/assets/delete.svg"
                alt="Delete"
              />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
              Delete
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {video.description}
      </div>
    </div>
  );
};

export default VideoDescription;
