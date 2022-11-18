import axios from "axios";

export const GOOGLE_BOOK_URL = "https://www.googleapis.com/books/v1/";
export const SEARCH_BOOK = "volumes";

const api = axios.create({
  baseURL: GOOGLE_BOOK_URL,
});

export const get = (uri, config = {}) => api.get(uri, config);

export const search = ({ text }) =>
  get(SEARCH_BOOK, {
    params: { q: text },
  });

export const getBook = ({ id }) => get(`${SEARCH_BOOK}/${id}`);
