import React from "react"
import PropTypes from "prop-types"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
} from "@/components/shared/shadcn/dialog"
import user from "@/assets/icons/user.svg"
import { cn } from "@/lib/utils"
export default function Modal({ children, isOpen, widthClass, closeModal , width}) {
    return (
        <Dialog
            open={isOpen}
            onOpenChange={(isOpen) => {
                if (!isOpen) {
                    closeModal()
                }
            }}
        >
            <DialogContent className={`side-scroller ${widthClass ? widthClass : 'w-full md:w-[700px] '} max-h-[90%] min-h-[70%] overflow-y-scroll`}>
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
}
