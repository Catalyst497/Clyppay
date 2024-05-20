import {
    Dialog,
    DialogTrigger,
    DialogContent,
} from "@/components/shadcn/Dialog";
import user from "@/assets/icons/user.svg";

export default function Modal({ name, children, isOpen, closeModal,handleOpen }) {
    return (
        <Dialog open={isOpen} onOpenChange={(isOpen) => {
            if (!isOpen && closeModal) {
                closeModal();
            }
        }}>
            <DialogTrigger onClick={handleOpen}>
                {name} modal
            </DialogTrigger>

            <DialogContent className="side-scroller min-h-[70%] max-h-[80%] overflow-y-scroll">
                <div>
                    <div
                        id="image-container"
                        className="flex w-full justify-center"
                    >
                        <img
                            src={user}
                            alt="user information"
                            className="h-12 w-12 object-contain"
                        />
                    </div>
                    <div className="pt-6 mx-auto max-w-[90%] md:max-w-[70%]">
                        {children}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
