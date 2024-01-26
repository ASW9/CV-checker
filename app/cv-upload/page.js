"use client"
import { useEffect, useRef, useState } from 'react';
import AudioRecordingHandler from "@/utils/audio";
import { useSearchParams } from 'next/navigation';
import AudioVisualisingAvatar from "@/components/AudioVisualisingAvatar";
import UserControls from "@/components/UserControls";
import ButtonAccount from '@/components/generic/ButtonAccount';
import PersonaCreator from '@/components/PersonaCreator';
import apiClient from '@/utils/api';

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
    
    return (
        <div style={{height: "100%"}} className='relative'>
            <audio ref={audioRef} ></audio>
            <div className="absolute m-4 left-0">
                <ButtonAccount />
            </div>
            <div style={styles.container} className='flex content-between'>
                {
                    !personaConfig ?
                    <div className="animate-pulse h-32 w-32 bg-purple-500 rounded-full blur-2xl">
                    </div>
                    :
                    <>
                        <AudioVisualisingAvatar avatarSrc={personaConfig.avatarSrc} generatedAudio={generatedAudioForVisualisation} />
                        <UserControls openPersonaCreator={togglePersonaCreator} status={conversationState} onClick={toggleConversationState} />
                        <PersonaCreator toggleOpen={togglePersonaCreator} open={personaCreatorOpen} config={personaConfig} updateConfig={updatePersonaConfig} setUrlId={setUrlId} setConversationState={setConversationState}/>
                    </>
                }
            </div>
        </div>
  );

};

export default ChatPage;