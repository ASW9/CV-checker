import React from "react";
import Image from "next/image";
import AnnotationBox from "./AnnotationBox";

const AnnotationComponent = () => {
    return (
        <section >
        <div className="flex flex-row justify-items-center text-center w-full mb-20">
            <div className="flex flex-col w-full items-center px-40">
                <div className="max-w-7xl p-12 px-24">
                <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
                    Where you could improve
                </h2>                     
                <p className="m-auto">
                    Don&apos;t take our word for it. Here&apos;s what they have to say
                    about ShipFast. 
                </p>
                </div>
                <Image className="shadow-2xl cursor-text"
                src="/badCV.png"
                width={1000}
                height={1000}
                alt=""
                />
            </div>
            <div className="flex flex-col">
                <div className={'shadow-lgrounded-xl bg-white border-gray-300 border-solid border-2 items-center text-xs w-64 p-4 hover:scale-105 ease-in-out duration-500'}>
                    Your CV would be more effective and reader friendly if you use concise bullet points instead of lengthy paragraphs
                </div>
                <div className={'shadow-lgrounded-xl bg-white border-gray-300 border-solid border-2 items-center text-xs w-64 p-4 hover:scale-105 ease-in-out duration-500'}>
                    Your CV would be more effective and reader friendly if you use concise bullet points instead of lengthy paragraphs
                </div>
            </div>
        </div>
        </section>
  );
};

export default AnnotationComponent;
