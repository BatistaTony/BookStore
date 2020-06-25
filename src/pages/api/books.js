import books from "./../../../books.json";

export default async (req, res) => {
    const { body, method } = req;
    
    switch (method) {
        
        case "GET": {
            res.status(200).json(await books)
            break
        }


        default: {
            res.status(405).json({error: "Only allowed GET and POST"})
            break;
        }
    }
};
