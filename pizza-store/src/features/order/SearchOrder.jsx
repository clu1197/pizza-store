import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleQuerySubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    console.log("Searching for order:", query);
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleQuerySubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
