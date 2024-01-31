import React from "react";
import Image from "next/image";

const UpdatedCVComponent = ({}) => {
  return (
    <section id="testimonials">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col justify-items-center text-center w-full mb-20">
            <div className="mb-8">
                <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
                   The Result  
                </h2>
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80 pb-12">
                Here's a CV custom made for you, with the feedback suggested.
            </p>
            <div className="flex flex-col w-full items-center">
                <Image
                    src="/greatCV.png"
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
