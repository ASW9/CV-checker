import React from "react";
import Image from "next/image";

const UpdatedCVComponent = ({}) => {
  return (
    <section id="testimonials">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col justify-items-center text-center w-full mb-20">
            <div className="mb-8">
                <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
                    Where you could improve
                </h2>
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80 pb-12">
                Don&apos;t take our word for it. Here&apos;s what they have to say
                about ShipFast.
            </p>
            <div className="flex flex-col w-full justify-items-center">
                <Image
                    src="/UpdatedCV.png"
                    width={1000}
                    height={2000}
                    alt=""
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatedCVComponent;
