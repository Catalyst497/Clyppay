import React from "react"
import PropTypes from "prop-types"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
} from "@/components/shared/shadcn/dialog"
import user from "@/assets/icons/user.svg"

export default function Modal({ children, isOpen, closeModal }) {
    return (
        <Dialog
            open={isOpen}
            onOpenChange={(isOpen) => {
                if (!isOpen) {
                    closeModal()
                }
            }}
        >
            <DialogContent className="side-scroller w-full  max-h-[90%] min-h-[70%] overflow-y-scroll">
                <div className="mx-auto w-full max-w-[90%] pt-6 md:max-w-[70%]">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
}
