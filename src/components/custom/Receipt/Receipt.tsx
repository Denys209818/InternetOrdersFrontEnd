import { useCallback, useMemo, useState } from "react";
import { ReceiptCreator, ReceiptProp } from "../ReceiptCreator/ReceiptCreator";
import { IngredientList, IngredientListType } from "../IngredientList/IngredientList";
import { getRandomInt } from "../../../tools/randomFunc";

export type OptionType = {
    id: number;
    title: string;
    price: number;
    isSize: boolean;
    disabled: boolean;
};

export type ReceiptType = {
    title: string;
    allowMultiple: boolean;
    options: OptionType[];
};

type ReceiptWrapper = {
    data: ReceiptType[];
};

export const Receipt: React.FC<ReceiptWrapper> = ({ data }) => {
    const [choosenProps, setChoosenProps] = useState<ReceiptProp[]>([]);
    const [size, setSize] = useState<ReceiptProp>({
        id: -1,
        title: 'Не визначено',
        price: 0,
    });

    const addShawermaComponent = useCallback((prop: ReceiptProp) => {
        let isEdited = true;

        if (prop.isSize) {
            setSize(prev => {
                if  (prev.id === prop.id) {
                    return {
                        id: -1,
                        title: 'Не визначено',
                        price: 0,
                    };
                } else {
                    return prop;
                }
            });

            return isEdited;
        }

        setChoosenProps(prev => {
            const item = prev.find(el => el.id === prop.id);

            if (prev.length === 7 && !item) {
                isEdited = false;
                return prev;
            }
            
            if (item) {
                return prev.filter(el => el.id !== prop.id);
            } else {
                return [...prev, prop];
            }
        });

        return isEdited;
    }, []);

    const catalogCreator: IngredientListType[] = useMemo(() => {
        const catalogData:IngredientListType[] = [];

        for (const dataItem of data) {
            catalogData.push({
                ...dataItem,
                addToWish: addShawermaComponent
            });
        }

        return  catalogData;
    }, [addShawermaComponent, data]);

    const catalogItems = useMemo(() => catalogCreator.map(catItem => (
        <IngredientList
            key={catItem.title + getRandomInt(1, 1000)}
            {...catItem}
        />
    )), [catalogCreator])

    // useEffect(() => {
    //     for (const catCr of catalogCreator) {
    //         if (catCr.options.length > 0 && !catCr.allowMultiple) {
    //             if (catCr.title || (catCr.options.length > 0 && catCr.options[0].isSize)) {
    //                 addShawermaComponent(catCr.options[0]);
    //             }
    //         }
    //     }
    // }, [addShawermaComponent, catalogCreator]);


    return (<div className="grid min-[744px]:grid-cols-12 grid-cols-4 min-[1440px]:gap-x-5 gap-x-4 gap-y-[52px]">
        <h2 className={`
            min-[1440px]:text-headerLessMain
            min-[744px]:text-headerLessTablet
            text-paragraph
            font-oswald
            uppercase
            min-[744px]:col-span-12
            col-span-4
        `}>
            Або будь творцем – Складай свій власний рецепт!
        </h2>

        <div className={`
            min-[1440px]:col-span-4
            min-[1000px]:col-span-5
            min-[744px]:col-span-6
            col-span-4
            min-[744px]:row-start-2
            min-[744px]:row-end-3

            row-start-3
            row-end-4
            `}>
            <ReceiptCreator
                size={size}
                items={choosenProps}
            />
        </div>

        <div className={`
            min-[1440px]:col-span-4
            min-[1000px]:col-span-7
            min-[744px]:col-span-6
            col-span-4
            row-start-2
            row-end-3
            `}>
            <div className="block border-2">
                <div className="bg-[#FF8080] border-b-2 p-2">
                    <h4 className="font-literata text-black italic text-list">Обери інгредіенти</h4>
                </div>

                <div className="flex flex-col gap-6 px-5 py-6 bg-white">
                    {catalogItems}
                </div>
            </div>
        </div>

        <div className="min-[1440px]:block hidden col-span-4">
            <div className="flex size-full justify-center items-center">
                <div className="block w-[210px]">
                    <div className="block pb-[258%] bg-[url('/src/images/Vertel.svg')] bg-cover"></div>
                </div>
            </div>
        </div>
    </div>);
}