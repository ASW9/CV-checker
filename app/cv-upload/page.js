"use client"
import { useEffect, useRef, useState } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

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

    const form = document.querySelector('form');

    function handleSubmit(event) {
        event.preventDefault();

        uploadFiles();
    }

    function uploadFiles() {
        const url = 'https://httpbin.org/post';
        const method = 'post';

        const xhr = new XMLHttpRequest();

        const data = new FormData(form);

        xhr.open(method, url);
        xhr.send(data);
    }

    const uploadButtonClick = () => {
        //In this function we need to trigger a pop up that allows them to upload a file

        //then we will call the convertToHTML function with that file. 
    }

    async function convertToHTML () {
        // const pdf2html = require('pdf2html');
        // const html = await pdf2html.html('sample.pdf');
        // console.log(html);
    }
    
    return (
        <>
            <div style={styles.container} className='flex content-between justify'>
                <input name="file" type="file" multiple></input>
                < div >
                    <button action="https://httpbin.org/post" className="btn btn-primary btn-wide" onClick={uploadButtonClick}>
                        Upload CV (as PDF)
                    </button>
                </div>
                <FilePond
                server={{
                    process: '/api/upload',
                    fetch: null,
                    revert: null,
                }}
                />
            </div>
        </>
  );

};

export default ChatPage;