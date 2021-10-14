import { useState, useEffect } from "react";
import { AgeGroup, Book, RawBook } from "../shared.types";
import bookmarkedItems from "../data/bookmarked_mock.json";

const getBookmarkedItems = (): Promise<RawBook[]> => {
  return new Promise((resolve) => {
    const mockBookmarkedItems = bookmarkedItems;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    resolve(mockBookmarkedItems);
  });
};

const normalizeBookmarkedItems = (rawBookmarkedItems: RawBook[]): Book[] => {
  return rawBookmarkedItems.map((rawBookmarkedItem) => ({
    ...rawBookmarkedItem,
    coverImg: rawBookmarkedItem.cover_img,
    ageGroup: rawBookmarkedItem.age_group as AgeGroup,
    publishedDate: rawBookmarkedItem.published_date
  }));
};

export const useBookmarkedItems = (): Book[] => {
  const [bookmarkedItems, setBookmarkedItems] = useState<Book[]>([]);

  useEffect(() => {
    const _getBookmarkedItems = async () => {
      const bookmarkedItems = await getBookmarkedItems();
      const normalizedBookmarkedItems =
        normalizeBookmarkedItems(bookmarkedItems);

      setBookmarkedItems(normalizedBookmarkedItems);
    };
    _getBookmarkedItems();
  }, []);

  return bookmarkedItems;
};
