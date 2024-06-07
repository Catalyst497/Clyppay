import front from "@/assets/images/front.svg"
import back from "@/assets/images/back.svg"
import selfie from "@/assets/images/selfie.svg"

const slides = [
    {
        index: 1,
        title: "Submit documents",
        subtext:
            "We are required by law to verify your identity by collecting your ID and selfie",
        image: front,
        imageTitle: "Front of ID",
        imageBody:
            "Take a photo of the front of your ID in full showing all details",
    },
    {
        index: 2,
        title: "Submit documents",
        subtext:
            "We are required by law to verify your identity by collecting your ID and selfie",
        image: back,
        imageTitle: "Back of ID",
        imageBody:
            "Take a photo of the back of your ID in full showing all details",
    },
    {
        index: 3,
        title: "Selfie Verification",
        subtext:
            "We will compare the photo in your document with your selfie to confirm your identity",
        image: selfie,
        imageTitle: "Your face",
        imageBody: "Place your face in front of the camera",
    },
    {
        index: 4,
        title: "Selfie Verification",
        subtext:
            "We will compare the photo in your document with your selfie to confirm your identity",
        image: selfie,
        imageTitle: "Verification Pending",
        imageBody:
            "Your verification is being processed, you will receive a notification once verified.",
    },
]

export default slides

export const countries = [
    {
        id: "c4459b79-9ed8-4294-9a4d-dce54d890a28",
        name: "Nigeria",
        image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg",
        countryCode: "NG",
    },
    {
        id: "f2c88e62-024d-4d5a-a0f6-ffdb7fa3a960",
        name: "Kenya",
        image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg",
        countryCode: "KE",
    },
    {
        id: "9207fe13-67c5-4a11-aaaa-f184ca6737b6",
        name: "South Africa",
        image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg",
        countryCode: "ZA",
    },
    {
        id: "4785500f-b118-4eea-bf26-1cdfad7d75ce",
        name: "Ghana",
        image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg",
        countryCode: "GH",
    },
    {
        id: "18f69c3a-a43e-480f-975d-1acb931c0c3d",
        name: "Uganda",
        image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg",
        countryCode: "UG",
    },
]
