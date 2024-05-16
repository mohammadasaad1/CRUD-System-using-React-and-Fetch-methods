import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price }),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/products");
      });
  }

  return (
    <>
      <h1>Add Product</h1>
      <form>
        <div className="mb-3 w-50 mx-auto">
          <label htmlFor="ProductTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductTitle"
            aria-describedby="product title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3 w-50 mx-auto">
          <label htmlFor="Price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="Price"
            aria-describedby="product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add Product
        </button>
      </form>
    </>
  );
}
