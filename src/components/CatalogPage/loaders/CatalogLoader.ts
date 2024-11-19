import { defer } from "react-router-dom";
import data from '../data/category.json';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const сatalogLoader = async () => {
    // const response = json({ data: data }, { status: 200 });

    return defer({
        data: new Promise(async (resolve) => {
            await delay(2000);

            resolve({ data: data });
        }),
    });
}