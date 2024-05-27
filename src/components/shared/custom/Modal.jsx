import React from "react";
import PropTypes from "prop-types";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
} from "@/components/shared/shadcn/dialog";
import user from "@/assets/icons/user.svg";

export default function Modal({ children, isOpen, closeModal }) {
    return (
        <Dialog open={isOpen} onOpenChange={(isOpen) => {
            if (!isOpen) {
                closeModal();
            }
        }}>
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

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};
