"use client"
import { useEffect, useRef, useState } from 'react';
import ButtonAccount from '@/components/ButtonAccount';

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "100%",
        maxHeight: "-webkit-fill-available !important",
        alignItems: "center",
        // backgroundImage: `url(${bkg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        touchAction: "none"
    },
    backdrop: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    menu: {
        position: "absolute",
        top: "10px",
        left: "10px"
    }
}


const ChatPage = () => {

    const uploadButtonClick = () => {
        //In this function we need to trigger a pop up that allows them to upload a file

        //then we will call the convertToHTML function with that file. 
    }

    const convertToHTML = () => {

    }
    
    return (
        <div style={{height: "100%"}} className='relative'>
            <div className="absolute m-4 left-0">
                <ButtonAccount />
            </div>
            <div style={styles.container} className='flex content-between justify'>
                <input type="file"></input>
                <form method="post" enctype="multipart/form-data">
                    <input name="file" type="file" multiple></input>
                    <button type="submit">Upload</button>
                </form>
                <div class >
                    <button className="btn btn-primary btn-wide" onClick={uploadButtonClick}>
                        Upload CV (as PDF)
                    </button>
                </div>
            </div>
        </div>
  );

};

export default ChatPage;