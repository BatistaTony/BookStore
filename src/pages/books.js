import useSWR from "swr";

function Books() {
  
  const fetcher = (url) =>
    fetch(url, { method: "GET" }).then((res) => res.json());

  const { data, error } = useSWR("/api/books", fetcher);

  if (error) return <h1>Error loading books</h1>;
  if (!data) return <h1>Loading</h1>;
  if (data) return <div className="list_books">list of Books</div>;
}

export default Books