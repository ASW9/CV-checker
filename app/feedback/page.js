"use client"
import { useEffect, useRef, useState } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Image from 'next/image';
import FileUpload from '@/components/FileUpload';
import StatsDial from '@/components/Stats';

const FeedbackPage = () => {

    return (
        <>
        <div className='flex flex-col h-screen w-screen items-center p-16 justify-center bg-gradient-to-br from-gray-900 via-gray-400 to-gray-200'>
            <StatsDial />
        </div>
        
        </>
  );

};

export default FeedbackPage;