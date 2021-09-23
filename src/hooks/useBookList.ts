import { BookList } from "../shared.types";
import { bookListMock } from "../data/booklist_mock";
import { normalizeBookList } from "../utils/normalizeData";

export const useBookList = (): BookList[] => {
  // TODO : This function should fetch from API,
  // normalize the result to match our type, &
  // return the normalized data.

  // TODO : This is just a mock but it should make a call to the server
  const mockResult = bookListMock as any;
  const normalizedBookList = normalizeBookList(mockResult);

  return normalizedBookList;
};
