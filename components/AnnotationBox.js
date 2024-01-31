import React from "react";

const AnnotationBox = (props) => {

    return (
        <div className={'absolute top-full left-6 shadow-lg flex flex-col rounded-xl bg-white border-gray-300 border-solid border-2 items-center text-xs w-64 p-4 hover:scale-105 ease-in-out duration-500'} >
            {props.text}
        </div>
    );
};

export default AnnotationBox;
