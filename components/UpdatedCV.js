import React from "react";
import Image from "next/image";

const UpdatedCVComponent = ({}) => {
  return (
    <section classname="">
      <div className="py-24 px-24 max-w-7xl mx-auto">
        <div className="flex flex-col justify-items-center text-center w-full mb-20 px-40">
            <div className="mb-8">
                <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
                    Brand New CV
                </h2>
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80 pb-12">
                A new CV with all the improvements previously mentioned
            </p>
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 blur opacity-100 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse">
              </div>
              <div class="relative bg-white ring-1 ring-gray-900/5 leading-none flex items-top justify-start space-x-6">
                <Image className="shadow-2xl cursor-text"
                  src="/greatCV.png"
                  width={1000}
                  height={2000}
                  alt=""
                />
              </div>
            </div>
            <a href="/greatCV.png" download="cv">
              <button className="btn btn-white btn-wide mt-12">
						    Download  
					    </button>
            </a>
        </div>  
      </div>
    </section>
  );
};

export default UpdatedCVComponent;
