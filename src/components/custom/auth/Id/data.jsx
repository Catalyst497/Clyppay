import front from "@/assets/images/front.svg"
import back from "@/assets/images/back.svg"
import selfie from "@/assets/images/selfie.svg"

const slides = [
    {
        index: 1,
        title: "Submit documents",
        subtext: "We are required by law to verify your identity by collecting your ID and selfie"
       , 
       image: {front},
        imageTitle: "Front of ID",
        imageBody: "Take a photo of the front of your ID in full showing all details",
    },
    {
        index: 2,
        title: "Submit documents",
        subtext: "We are required by law to verify your identity by collecting your ID and selfie"
       , 
       image: {back},
        imageTitle: "Back of ID",
        imageBody: "Take a photo of the back of your ID in full showing all details",
    },
    {
        index: 3,
        title: "Selfie Verification",
        subtext: "We will compare the photo in your document with your selfie to confirm your identity"
       , image: {selfie},
        imageTitle: "Your face",
        imageBody: "Place your face in front of the camera",
    },
    {
        index: 4,
        title: "Selfie Verification",
        subtext: "We will compare the photo in your document with your selfie to confirm your identity"
       , image: {selfie},
        imageTitle: "Verification Pending",
        imageBody: "Your verification is being processed, you will receive a notification once verified.",
    },
]

export default slides