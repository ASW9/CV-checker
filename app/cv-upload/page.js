"use client"
import { useEffect, useRef, useState } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import apiClient from '@/utils/api';


const ChatPage = () => {

    const [feedbackText, setFeedbackText] = useState("OPENAPI RESPONSE HERE")

    const handlingResponse = async (response) => {
        console.log(response)
        const cvText = response
        await apiClient.post("/gpt", cvText)
        .then((response) => {
            setFeedbackText(response)
        })
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
            <div className='flex flex-col content-between h-screen items-center justify-center '>
                <div className='text-2xl font-bold pb-16'>
                    Upload CV (as PDF)
                </div>
                <FilePond className='pt-32'
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
                <div className='pt-16'>
                    {feedbackText}
                </div>
            </div>
        </>
  );
};

export default ChatPage;