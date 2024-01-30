import apiClient from "@/utils/api";
import Link from 'next/link';
import makePayment from '@/utils/client/payment';
import appConfig from "@/config";
import { useHasAccess } from '@/hooks';
import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography, useTheme, Avatar, Backdrop, CircularProgress } from "@mui/material";
import CTAButton from "@/components/CTAButton";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = {
    backdrop: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
}

const Customisation = (props) => {
    const hasAccess = useHasAccess()

    const [loadingState, setLoadingState] = useState(false);

    const theme = useTheme();

    const [systemMessage, setSystemMessage] = useState(props.config.systemMessage)
    const [initialMessage, setInitialMessage] = useState("")

    const save = async () => {

        if (!hasAccess) {
            const priceId = appConfig.stripe.plans[0].priceId
            makePayment({priceId, mode: "subscription"})
            // TODO ensure that the persona configuration settings are restored after payment. It would be so annoying to have to re-enter them after taking a lot of effort to come up with them.
            return
        }

        props.toggleOpen()

        // bullshit loading mode
        setLoadingState("🧠 Processing personality...")
        setTimeout(() => {
            setLoadingState("📸 Taking assistant headshot...")
        }, 2000);
        setTimeout(() => {
            setLoadingState("🔊 Generating voice...")
        }, 4000);
        setTimeout(() => {
            setLoadingState("✨ Putting on the finishing touches...")
        }, 6000);
        // end of bullshit loading mode

        // setLoadingState("📸 Taking assistant headshot...")
        let [img, voice] = await Promise.all([
            generateAvatarImgURL(), 
            selectVoice()
        ])
        // setLoadingState("✨ Putting on the finishing touches...")

        const speakFirst = initialMessage == "" ? "false" : "true"

        const personaId = await apiClient.post("/persona", { 
            sysMsg: systemMessage, 
            imgURL: img, 
            voice: voice, 
            title: "unknown", 
            speakFirst: speakFirst
        }).then(data => {
            const id = data.id
            return id
        })

        const initialMessageBase64 = await apiClient.post("/voice", {
            personaId: personaId,
            initialMessage: initialMessage,
            voice: voice
        }).then(data => {
            const url = data.fetchableUrl
            return url
        })

        props.updateConfig({
            "systemMessage": systemMessage,
            "initialMessageBase64": initialMessageBase64,
            "avatarSrc": img,
            "voice": voice
        })
        props.setConversationState("play")
        setLoadingState(false)
    }

    const generateAvatarImgURL = () => {
        return apiClient.post("/generate-avatar", { systemMessage })
            .then(response => {
                const img = response.url
                return img
            })
    }

    const selectVoice = () => {
        return apiClient.post("/select-voice", { systemMessage })
            .then(data => {
                const voice = data.voice
                return voice
            })
    }

    return <>
        <Dialog open={props.open} fullWidth={true} onClose={props.toggleOpen} TransitionComponent={Transition}>
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={props.toggleOpen}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className="flex flex-col m-auto h-full w-full max-w-md">
                <DialogTitle>
                    <Typography variant="h4">
                        Resume Feedback
                    </Typography>    
                </DialogTitle>
                <DialogContent>
                    <Typography variant="h5">
                        YoUr CV is Tortally cR*p (heading?)
                    </Typography>
                    <DialogContentText>
                        <Typography variant="h5">
                            Some text to do or smth
                        </Typography>
                    </DialogContentText>
                    <TextField fullWidth={true} multiline={true} variant="outlined" onChange={e=>{
                        setSystemMessage(e.target.value)
                    }} value={systemMessage} InputProps={{style: {color: theme.palette.secondary.main, fontSize: "14px"}}} style={{marginTop: "14px"}}/>
                    <DialogContentText style={{marginTop: "14px"}}>
                        <Typography variant="h5">
                            Follow up questions? 
                        </Typography>
                    </DialogContentText>
                    <TextField fullWidth={true} multiline={true} variant="outlined" onChange={e=>{
                        setInitialMessage(e.target.value)
                    }} value={initialMessage} InputProps={{style: {color: theme.palette.secondary.main, fontSize: "14px"}}} style={{marginTop: "14px"}}/>
                </DialogContent>
                <DialogActions style={{justifyContent: "space-between"}}>
                    <Link href="/chat/examples">
                        <Button variant="text" fontSize="16px" color="secondary" style={{margin:"10px"}}>
                            <div style={{fontSize: "16px"}}>
                                Generate Response
                            </div>
                        </Button>
                    </Link>
                    <CTAButton onClick={save} variant="contained">Save</CTAButton>
                </DialogActions>
            </div>
        </Dialog>
        <Backdrop open={loadingState} sx={{zIndex: 1000, backgroundColor: "rgba(0, 0, 0, 0.9)"}}>
            <div style={styles.backdrop}>
                <CircularProgress />
                <Typography variant="h4" style={{margin: "30px", textAlign:"center"}}>
                    {loadingState}
                </Typography>
            </div>
        </Backdrop>
    </>
}

export default Customisation