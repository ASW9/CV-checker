import React from "react";

const AnnotationBox = (props) => {


    return (
        <div className="flex flex-col rounded-b-xl bg-white">
            {props.text}
        </div>
    );
};

export default AnnotationBox;
