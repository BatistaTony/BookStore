import { NextApiRequest, NextApiResponse } from "next";
import { IBook } from "../../../components/types";
import books from "./../../../books.json";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  const AllBooks: Array<IBook> = books;

  switch (method) {
    case "POST": {
      const book = await AllBooks.filter((singleBook: IBook): any => {
        return singleBook.isbn === body.isbn;
      });

      res.status(200).json(book[0]);
      break;
    }

    case "GET": {
      break;
    }

    default: {
      res.status(405).json({ error: "ONly allowed POST" });
      break;
    }
  }
};
