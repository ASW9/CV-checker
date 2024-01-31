"use client"
import { useEffect, useRef, useState } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Image from 'next/image';
import FileUpload from '@/components/FileUpload';
import StatsDial from '@/components/Stats';
import AnnotationComponent from '@/components/Annotations';
import { Feed } from '@mui/icons-material';

const FeedbackPage = () => {

    return (
        <>
            < AnnotationComponent />
            <StatsDial />
        </>
  );

};

export default FeedbackPage;