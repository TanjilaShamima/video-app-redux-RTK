import React from "react";
import SingleVideo from "../SingleVideo/SingleVideo";

const VideoList = () => {
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {/* <!-- single video --> */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((video) => (
          <SingleVideo key={video} />
        ))}

        {/* <!-- error section
                    <div className="col-span-12">some error happened</div> 
                    --> */}
      </div>
    </section>
  );
};

export default VideoList;
