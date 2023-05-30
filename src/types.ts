export type BookType = {
  book: {
    id?: number;
    isbn: string;
    title: string;
    cover?: string;
    author: string;
    published: string | number | Date;
    pages: number;
  };
  status: number;
};

export type UserType = {
  id: number;
  name: string;
  email: string;
  key: string;
  secret: string;
};
