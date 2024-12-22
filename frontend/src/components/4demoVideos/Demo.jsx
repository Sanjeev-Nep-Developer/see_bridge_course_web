import React from "react";

import v1 from "/assets/videos/demoVideos/mat/m1.mp4";
import v2 from "/assets/videos/demoVideos/bio/b1.mp4";
import v3 from "../4demoVideos/c1.mp4";
import v4 from "../4demoVideos/p1.mp4";
import v5 from "../4demoVideos/e1.mp4";

const Demo = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl font-bold font-poppins mb-8 text-gray-900 text-center">
          Bridge Course Videos Demo
        </h1>
        <p className="text-lg leading-relaxed mb-12 text-center">
          Unlock your potential with our exclusive Bridge Course bundle at just
          Rs. 399. Enroll now and take your learning journey to new heights!
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-1/3 md:w-1/2 p-4">
            <video className="w-full h-auto" autoPlay loop controls muted>
              <source src={v1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h2 className="text-lg font-medium text-gray-900 mt-2">
              1 Math (Set Theory )
            </h2>
          </div>

          <div className="lg:w-1/3 md:w-1/2 p-4">
            <video className="w-full h-auto" autoPlay loop controls muted>
              <source src={v2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h2 className="text-lg font-medium text-gray-900 mt-2">
              2 Biology ( ntrodution to Zoology)
            </h2>
          </div>

          <div className="lg:w-1/3 md:w-1/2 p-4">
            <video className="w-full h-auto" autoPlay loop controls muted>
              <source src={v3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h2 className="text-lg font-medium text-gray-900 mt-2">
              3 Chemistry (Language of Chemistry part1 )
            </h2>
          </div>

          <div className="lg:w-1/3 md:w-1/2 p-4">
            <video className="w-full h-auto" autoPlay loop controls muted>
              <source src={v4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h2 className="text-lg font-medium text-gray-900 mt-2">
              4 Physics(Units,Measurement,And Dimensions)
            </h2>
          </div>

          <div className="lg:w-1/3 md:w-1/2 p-4">
            <video className="w-full h-auto" autoPlay loop controls muted>
              <source src={v5} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h2 className="text-lg font-medium text-gray-900 mt-2">
              5 English(Nouns and Articles)
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;

// const Demo = () => {
//   return (
//    <h1>hello</h1>
//   )
// }
// export default Demo;
