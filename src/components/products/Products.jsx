import React, { useEffect, useState } from "react";
import "./prdcts.css";
import { Link } from "react-router-dom";
export default function Products() {
  const [product, setProduct] = useState([]);
  const getAllProducts = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const deleteProduct = (productId) => {
    fetch(`http://localhost:9000/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => getAllProducts());
  };
  return (
    <>
      <h1 className="text-center">Products Page</h1>
      <Link
        to={"/products/add"}
        className="btn btn-success my-3 addBtn "
        type="button"
      >
        Add new product
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>description</td>
            <td>Price</td>
            <td>Operations</td>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {product.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>${item.price}</td>
                <td>
                  <div className="btn-group">
                    <Link to={`${item.id}`} className="btn btn-success">
                      View
                    </Link>
                    <button className="btn btn-primary">Edit</button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProduct(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
