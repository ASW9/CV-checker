"use client"
import { useEffect, useRef, useState } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Image from 'next/image';
import FileUpload from '@/components/FileUpload';

const ChatPage = () => {

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
                    </div>
            </div>

        </div>
        
        </>
  );

};

export default ChatPage;