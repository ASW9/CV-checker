"use client"
import { useEffect, useRef, useState } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Image from 'next/image';
import FileUpload from '@/components/FileUpload';
import StatsDial from '@/components/Stats';
import AnnotationComponent from '@/components/AnnotationsPage';
import { Feed } from '@mui/icons-material';
import UpdatedCVComponent from '@/components/UpdatedCV';

const FeedbackPage = () => {

    return (
        <>
            < AnnotationComponent />
            < StatsDial />
            < UpdatedCVComponent />
        </>
  );

};

export default FeedbackPage;