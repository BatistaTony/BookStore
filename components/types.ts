export interface IBook {
  isbn: string;
  title: string;
  subtitle: string;
  author: string;
  published: Date | string;
  publisher: string;
  pages: number;
  price: number;
  description: string;
  website: string;
}
