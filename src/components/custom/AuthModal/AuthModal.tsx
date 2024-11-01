import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Button from "../Button";

type ModalType = {
    title: string;
    description?: string;
    leftBtnText: string;
    rightBtnText: string;
}

export type ModalRefType = {
    showModal: (props: ModalType) => void;
    hideModal: () => void;
};

export const AuthModal: React.ForwardRefExoticComponent<React.RefAttributes<unknown>> = forwardRef(
    (props, ref) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [leftBtnText, setLeftBtnText] = useState('');
    const [rightBtnText, setRightBtnText] = useState('');

    const dialogRef = useRef<HTMLDialogElement>(null);

    const modalStyles = "absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]" + 
    " border border-2 bg-white p-10 backdrop:bg-black/40 w-max";

    useImperativeHandle(ref, () => ({
        showModal: ({ title, description, leftBtnText, rightBtnText }: ModalType) => {
            if (dialogRef.current) {
                setTitle(title);
                setDescription(description || '');
                setLeftBtnText(leftBtnText);
                setRightBtnText(rightBtnText);

                dialogRef.current.showModal();
            }
        },

        hideModal: () => {
            if (dialogRef.current) {
                dialogRef.current.close();
            }
        }
    }));

    const onClose = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    }

    return (createPortal(<dialog
            ref={dialogRef}
            className={modalStyles}
        >
            <div className="flex flex-col gap-6">
                <div className="block w-32">
                    <div className="relative block size-full pb-[77%]">
                        <div className="absolute size-full bg-[url('/src/images/Hendcheese.svg')] bg-cover"></div>
                    </div>
                </div>

                <div>
                    <h1 className="block uppercase font-oswald font-medium tracking-tighter text-3xl">{title}</h1>
                    {description && (
                        <p className="block pt-2 text-[#525A63] font-semibold font-base font-lato">{description}</p>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-x-3 min-[375px]:gap-y-3">
                    <Button
                        sizeBtn="huge"
                        title={leftBtnText}
                        background="white"
                        onClickHandler={onClose}
                    />

                    <Button
                        sizeBtn="huge"
                        title={rightBtnText}
                        background="black"
                        onClickHandler={onClose}
                    />
                </div>
            </div>
        </dialog>,
        document.getElementsByTagName('body')[0]
    ));
});