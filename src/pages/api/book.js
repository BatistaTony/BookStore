import books from "./../../../books.json";

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
      case "POST": {
      const book = await books.books.filter((b) => {
        return b.isbn === body.isbn;
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
