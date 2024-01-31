import React from "react";
import Image from "next/image";
import AnnotationBox from "./AnnotationBox";

const AnnotationComponent = () => {
  return (
    <section >
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
          <div className="flex flex-col w-full items-center px-36">
            <Image
              src="/badCV.png"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={'absolute top-full left-6 shadow-lg flex flex-col rounded-xl bg-white border-gray-300 border-solid border-2 items-center text-xs w-64 p-4 hover:scale-105 ease-in-out duration-500'} >
        Your CV would be more effective and reader friendly if you use concise bullet points instead of lengthy paragraphs
      </div>
      <div className={'absolute top-full right-6 shadow-lg flex flex-col rounded-xl bg-white border-gray-300 border-solid border-2 items-center text-xs w-64 p-4 hover:scale-105 ease-in-out duration-500'} >
        Your CV would be more effective and reader friendly if you use concise bullet points instead of lengthy paragraphs
      </div>
      <div className={'absolute bottom-1/2 left-6 shadow-lg flex flex-col rounded-xl bg-white border-gray-300 border-solid border-2 items-center text-xs w-64 p-4 hover:scale-105 ease-in-out duration-500'} >
        Your CV would be more effective and reader friendly if you use concise bullet points instead of lengthy paragraphs
      </div>
      <div className={'absolute bottom-3/4 right-6 shadow-lg flex flex-col rounded-xl bg-white border-gray-300 border-solid border-2 items-center text-xs w-64 p-4 hover:scale-105 ease-in-out duration-500'} >
        Your CV would be more effective and reader friendly if you use concise bullet points instead of lengthy paragraphs
      </div>
    </section>
  );
};

export default AnnotationComponent;
