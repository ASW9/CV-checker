"use client"
import { useEffect, useRef, useState } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';


const ChatPage = () => {

    const handlingResponse = (response) => {
        console.log(response)
        const cvText = response.data
        console.log(cvText)
    }

    // const form = document.querySelector('form');

    // function handleSubmit(event) {
    //     event.preventDefault();

    //     uploadFiles();
    // }

    // function uploadFiles() {
    //     const url = 'https://httpbin.org/post';
    //     const method = 'post';

    //     const xhr = new XMLHttpRequest();

    //     const data = new FormData(form);

    //     xhr.open(method, url);
    //     xhr.send(data);
    // }

    // const uploadButtonClick = () => {
    //     //In this function we need to trigger a pop up that allows them to upload a file

    //     //then we will call the convertToHTML function with that file. 
    // }

    // async function convertToHTML () {
    //     // const pdf2html = require('pdf2html');
    //     // const html = await pdf2html.html('sample.pdf');
    //     // console.log(html);
    // }
    

    return (
        <>
            <div className='flex content-between h-screen items-center justify-center '>
                <div className='text-2xl font-bold'>
                    Upload CV (as PDF)
                </div>
                <FilePond
                    server={{
                        process: {
                            url: '/api/upload',
                            method: 'POST',
                            withCredentials: false,
                            headers: {},
                            timeout: 8000,
                            onload: handlingResponse,
                            onerror: null,
                            ondata: null,
                        },
                        fetch: null,
                        revert: null,
                    }}
                />
            </div>
        </>
  );
};

export default ChatPage;