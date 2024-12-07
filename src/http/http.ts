import { FetchCategory } from "./types";

const url = 'http://localhost:8088';

export const fetchAllCategories = async ({ id, signal }: FetchCategory) => {
    return fetch(url + '/categories/' + id, { signal: signal });
}