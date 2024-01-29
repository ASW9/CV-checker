"use client"
import { useEffect, useRef, useState } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Image from 'next/image';
import FileUpload from '@/components/FileUpload';
import Customisation from '@/components/PersonaCreator';

const ChatPage = () => {

    //to be deleted
    const [personaConfig, setPersonaConfig] = useState({
        "avatarSrc": "",
        "systemMessage": "persona.sysMsg",
        "initialMessageBase64": "initialMessageBase64",
        "voice": "persona.voice",
        "title": "persona.title", 
        "speakFirst": "persona.speakFirst",
    })

    // end of to be deleted

    const [openFeedbackBox, setOpenFeedbackBox] = useState(false)
    const toggleFeedbackBox = () => {
        setOpenFeedbackBox(true)
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
    

    //heading - done
    //subtitle - done
    //better font
    //cool gradient on background (behind card, i.e full page behind card) -

    return (
        <>
        <div className='flex flex-col h-screen w-screen items-center p-16 justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600'>
            <div className='flex border border-gray-700 rounded-2xl flex-col content-between w-full max-w-md justify-between h-[80%] bg-white shadow-2xl'>
                    <div className='text-2xl font-bold border-b border-gray-300 p-4'>
                        Resume checker
                    </div> 
                    <div className='h-full flex flex-col justify-center p-4'>
                        <div className='flex flex-col items-center'>
                            <Image className='rounded-xl' 
                                src="/upload-icon.png"
                                width={100}
                                height={100}
                                alt="just an image tbh"
                            />
                            <div className="font-bold text-xl p-4">
                                Upload CV (as PDF)
                            </div>
                            <div className="pb-4 text-gray-500">
                                You're one click away from your perfect job!
                            </div>
                        </div>
                        <FileUpload
                            server={{
                                process: '/api/upload',
                                fetch: null,
                                revert: null,
                            }}
                            credits={{label:'', url:''}}
                        />
                        <Customisation toggleOpen={toggleFeedbackBox} open={openFeedbackBox} config={personaConfig} updateConfig={setPersonaConfig}/>
                    </div>
                    <button onClick={setOpenFeedbackBox} >
                        CLick me
                    </button>
            </div>

        </div>
        </>
  );

};

export default ChatPage;