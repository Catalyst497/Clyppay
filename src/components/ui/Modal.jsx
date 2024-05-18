import {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
} from "@/components/shadcn/Dialog"
import user from "@/assets/icons/user.svg"

export default function Modal({ children, shouldOpen = true}) {
    return (
        <Dialog defaultOpen = {shouldOpen}>
            <DialogTrigger>Signup modal</DialogTrigger>
            <DialogContent className="side-scroller min-h-[60%] max-h-[80%] overflow-y-scroll">
                <div>
                    <div
                        id="image-container"
                        className="flex  w-full justify-center "
                    >
                        <img
                            src={user}
                            alt="user information"
                            className="h-12 w-12 object-contain"
                        />
                    </div>
                    <div className="pt-6 mx-auto max-w-[90%] md:max-w-[70%] ">
                        {children}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
