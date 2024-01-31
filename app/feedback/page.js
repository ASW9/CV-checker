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
            <StatsDial />
        </>
  );

};

export default FeedbackPage;