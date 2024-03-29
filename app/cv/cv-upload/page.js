"use client"
import { useEffect, useRef, useState } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Image from 'next/image';
import FileUpload from '@/components/FileUpload';
import { Backdrop, CircularProgress, Typography} from '@mui/material';
import apiClient from '@/utils/api';
import { useRouter } from 'next/navigation'
import TextInput from '@/components/hyperUI/TextInput';

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
    const router = useRouter()

    const [feedbackText, setFeedbackText] = useState("OPENAPI RESPONSE HERE")

    const handlingResponse = async (response) => {
        console.log("Response returned")
        const cvText = response

        triggerLoadingScreen()

        await apiClient.post("/gpt", cvText)
        .then((response) => {
            console.log(response)
            setFeedbackText(response)
        })
    }

    const [loadingState, setLoadingState] = useState(false)

    const triggerLoadingScreen = async () => {
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

        setLoadingState("Uploading file...")
        await delay(2000)
        setLoadingState("Processing your CV...")
        await delay(4000)
        setLoadingState("🧠 Generating feedback...")
        await delay(2000)
        setLoadingState("✨ Putting on the finishing touches...")
        await delay(6000)

        // setTimeout(() => {
        //     setLoadingState("Processing your CV...")
        // }, 2000);
        // //if (loadingState == false) {return}
        // setTimeout(() => {
        //     setLoadingState("🧠 Generating feedback...")
        // }, 2000);
        // //if (loadingState == false) {return}
        // setTimeout(() => {
        //     setLoadingState("✨ Putting on the finishing touches...")
        // }, 3000);

        setLoadingState(false)
        // end of bullshit loading mode

        //router.push('/cv/feedback')
    }


    return (
        <>
            <div className='flex flex-col h-screen w-screen items-center p-16 justify-center'>
                <div className='flex border border-gray-300 rounded-2xl flex-col content-between w-full max-w-md justify-between h-[80%] bg-white shadow-lg'>
                        <div className='text-2xl font-bold border-b border-gray-300 p-4'>
                            A new CV in 30 seconds
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
                            </div>
                            <div  class="h-[7rem] duration-500 hover:scale-[1.01] ease-in-out'">
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
                                    credits={{label:'', url:''}}
                                />
                            </div>
                            {/* <TextInput placeholder="Paste a link to the job description"/> */}
                            <div>
                                <label for="Job Description" class="block font-bold text-xl text-center"> Link to job post </label>

                                <input
                                    id="OrderNotes"
                                    className="mt-2 p-4 w-full rounded-lg border-2 border-solid border-gray-200 align-top shadow-sm sm:text-sm"
                                    placeholder="Paste a link to a website describing the company/job..."
                                ></input>
                            </div>
                        </div>
                </div>

            </div>
            <Backdrop open={loadingState} sx={{zIndex: 1000, backgroundColor: "rgba(0, 0, 0, 0.9)"}}>
                <div style={styles.backdrop}>
                    <CircularProgress />
                    <Typography variant="h4" className='m-6 text-white'>
                        {loadingState}
                    </Typography>
                </div>
            </Backdrop>
        </>
  );

};

export default ChatPage;