import { AgeGroup, Book, BookList } from "../shared.types";

type RawBook = {
  id: string;
  title: string;
  subtitle: string;
  cover_img: string;
  age_group: string;
  published_date: string;
};

type RawBookList<T> = {
  age_group: T;
  books: {
    // This type needs to be fixed
    [RB in keyof RawBook]: RawBook[RB];
  }[];
};

export const normalizeBookList = (
  bookList: RawBookList<AgeGroup>[]
): BookList[] => {
  return bookList.map((item) => ({
    ageGroup: item.age_group,
    books: item.books.map((book) => ({
      id: book.id,
      title: book.title,
      subtitle: book.subtitle,
      coverImg: book.cover_img,
      ageGroup: book.age_group,
      publishedDate: book.published_date
    })) as unknown as Book[] // TODO : The unknown might be wrong
  }));
};
