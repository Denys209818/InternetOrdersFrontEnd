import { defer } from "react-router-dom";
import data from '../data/category.json';
// import { queryClient } from "../../../tools/reactQuery";
// import { fetchAllCategories } from "../../../http/http";
// import { FetchCategoryResult } from "../../../http/types";
import cards from '../data/cardData.json';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const сatalogLoader = async () => {
    // const response = await queryClient.fetchQuery({
    //     queryKey: ['events'],
    //     queryFn: ({ signal }) => fetchAllCategories({ signal, id: 1 }),
    // });

    return defer({
        cards: cards,
        data: new Promise(async (resolve) => {
            await delay(2000);

            resolve({ data: data });
        }),
    });
}