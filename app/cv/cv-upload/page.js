"use client"
import { useEffect, useRef, useState } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Image from 'next/image';
import FileUpload from '@/components/FileUpload';

const ChatPage = () => {

    const [feedbackText, setFeedbackText] = useState("OPENAPI RESPONSE HERE")

    const handlingResponse = async (response) => {
        console.log("Response returned")
        const cvText = response

        await apiClient.post("/gpt", cvText)
        .then((response) => {
            setFeedbackText(response)

        })

        setLoadingState(false)
    }

    const [loadingState, setLoadingState] = useState(false)

    const onUpload = (formData) => {
        console.log("Triggered onUpload function")
        // bullshit loading mode
        setLoadingState("Uploading file...")
        setTimeout(() => {
            setLoadingState("Processing your CV...")
        }, 2000);
        setTimeout(() => {
            setLoadingState("🧠 Generating feedback...")
        }, 4000);
        setTimeout(() => {
            setLoadingState("✨ Putting on the finishing touches...")
        }, 6000);
        // end of bullshit loading mode
    }


    return (
        <>
        <div className='flex flex-col h-screen w-screen items-center p-16 justify-center '>
            <div className='flex border border-gray-700 rounded-2xl flex-col content-between w-full max-w-md justify-between h-[80%] bg-white shadow-lg duration-500 hover:scale-105 ease-in-out'>
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
                        <div  class="animate-pulse">
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
                                        ondata: onUpload,
                                    },
                                    fetch: null,
                                    revert: null,
                                }}
                                credits={{label:'', url:''}}
                            />
                        </div>
                            
                    </div>
            </div>

        </div>
        
        </>
  );

};

export default ChatPage;