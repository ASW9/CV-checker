import React from "react";
import Image from "next/image";
import AnnotationBox from "./AnnotationBox";

const AnnotationComponent = () => {
    return (
        <section >
        <div className="flex flex-col items-center text-center">
          <div className="max-w-7xl p-12 px-24">
            <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
                Where you could improve
            </h2>                     
            <p className="m-auto">
                Don&apos;t take our word for it. Here&apos;s what they have to say
                about ShipFast. 
            </p>
          </div>
          <div className="flex flex-row justify-items-center text-center w-full mb-20">
              <div className="flex flex-col w-full items-center pl-40 pr-10">
                  <Image className="shadow-2xl cursor-text"
                  src="/badCV.png"
                  width={1000}
                  height={1000}
                  alt=""
                  />
              </div>
              <div className="flex flex-col pr-20">
                  <div className={'hover:shadow-lg rounded-xl bg-gray-100 items-center text-xs w-64 p-4 hover:scale-105 ease-in-out duration-500 mt-50 transform hover:translate-x-[-3rem]'}>
                    You may want to omit your GCSE grades and focus on your recent qualifications and experiences.
                  </div>
                  <div className={'hover:shadow-lg rounded-xl bg-gray-100 items-center text-xs w-64 p-4 hover:scale-105 ease-in-out duration-500 mt-6 transform hover:translate-x-[-3rem]'}>
                    Your CV would be more effective and reader friendly if you use concise bullet points instead of lengthy paragraphs
                  </div>
                  <div className={'hover:shadow-lg rounded-xl bg-gray-100 items-center text-xs w-64 p-4 hover:scale-105 ease-in-out duration-500 mt-6 transform hover:translate-x-[-3rem]'}>
                    Review your text for typos to ensure a polished and professional impression
                  </div>
                  <div className={'hover:shadow-lg rounded-xl bg-gray-100 items-center text-xs w-64 p-4 hover:scale-105 ease-in-out duration-500 mt-6 transform hover:translate-x-[-3rem]'}>
                    Consider moving some of this detail to a cover letter to keep your resume concise and focused.
                  </div>
                  <div className={'hover:shadow-lg rounded-xl bg-gray-100 items-center text-xs w-64 p-4 hover:scale-105 ease-in-out duration-500 mt-6 transform hover:translate-x-[-3rem]'}>
                    Some of this information may not be relevant to the position you are applying for.
                  </div>
              </div>
          </div>
        </div>
        </section>
  );
};

export default AnnotationComponent;
