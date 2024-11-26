import { useState } from "react";
import Button from "../Button";

interface ButtonGroupType {
    title: string;
    btnGroupName: string;
    additionalText?: string;
    additionalImage?: '' | 'google' | 'instagram' | 'clock' | 'card';
    disabled?: boolean;
    hasModal?: React.FC;
    onClickHandler?: (arg: string) => void;
}

interface ButtonGroupListType {
    buttons: ButtonGroupType[];
}

export const ButtonGroup: React.FC<ButtonGroupListType> = ({ buttons }) => {
    const [readyTime, setReadyTime] = useState('');

    return (
        <div className='flex flex-col pt-3 gap-3'>
            {buttons.map(btn => (
                <div key={btn.btnGroupName}>
                    <Button
                        title={btn.title}
                        widthFull
                        background='white'
                        sizeBtn='huge'
                        disabled={btn.disabled}
                        additionalImage={btn.additionalImage}
                        isSelected={readyTime === btn.btnGroupName}
                        onClickHandler={
                            () => {
                                setReadyTime(btn.btnGroupName);
                                
                                if (btn.onClickHandler) {
                                    btn.onClickHandler(btn.btnGroupName);
                                }
                            }
                        }
                    />

                    {btn.additionalText && <p className='block font-lato pt-2 min-[744px]:text-orderAuthDesc text-orderAuthDescPhone text-[#1F2933]'>
                        {btn.additionalText}
                    </p>}

                    {btn.hasModal && readyTime === btn.btnGroupName && <btn.hasModal />}
                </div>
            ))}
        </div>
    );
}