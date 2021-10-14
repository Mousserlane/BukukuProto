import { useEffect, useState } from "react";
import { AgeGroup, BookDetail, RawBookDetail } from "../shared.types";
import bookDetail from "../data/bookdata_mock.json";

// TODO : Move this to http helper
// this is just a mock
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line no-unused-vars
const getBookDetail = (bookId: string): Promise<RawBookDetail> => {
  return new Promise((resolve) => {
    const mockBookDetail = bookDetail
    resolve(mockBookDetail);
  })
}

const normalizeBookDetail = (rawBookDetail: RawBookDetail): BookDetail => {
  return {
    ...rawBookDetail,
    coverImg: rawBookDetail.cover_img,
    ageGroup: rawBookDetail.age_group as AgeGroup
  }
}

export const useBookDetail = (bookId: string): BookDetail | null => {
  const [_bookDetail, setBookDetail] = useState<BookDetail>();

  useEffect(() => {
    const _getBookDetail = async () => {
      const bookDetail = await getBookDetail(bookId)
      const normalizedBookDetail = normalizeBookDetail(bookDetail);
      setBookDetail(normalizedBookDetail);
    }
    _getBookDetail();
  }, [])

  return _bookDetail ?? null
}