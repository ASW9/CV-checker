import React from "react";
import Image from 'next/image';
// A better way to illustrate with icons
// Pass any SVG icon as children (recommended width/height : w-6 h-6)
// By default, it's using your primary color for styling
const StatsDial = ({ children }) => {
  return (
    <section className="bg-base-200">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col justify-items-center text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-6 md:mb-8">
              Where you could improve
            </h2>
          </div>
          <div className="flex flex-col w-full items-center">
            <Image
              src="/dials.png"
              width={700}
              height={400}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    );
};

export default StatsDial;  