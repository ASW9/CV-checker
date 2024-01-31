import React from "react";

const AnnotationBox = (props) => {

    return (
        <div className="flex flex-col rounded-xl bg-white border-gray-500 border-solid border-2 items-center h-64 w-64 p-4" >
            {props.text}
        </div>
    );
};

export default AnnotationBox;
