import {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
 
} from "@/components/ui/library/Dialog"
import user from "@/assets/user.svg"

export default function Modal({ children }) {
    return (
        <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent className = "overflow-y-scroll max-h-[90%] side-scroller">
                <div
                    id="image-container"
                    className="flex  w-full justify-center "
                >
                    
                        <img
                            src={user}
                            alt="user information"
                            className="object-contain h-12 w-12"
                        />
       
                </div>

                {children}
            </DialogContent>
        </Dialog>
    )
}
