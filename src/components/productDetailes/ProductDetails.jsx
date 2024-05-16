import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9000/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {product ? (
        <div>
          <h1 className="mb-5">{product.title}</h1>
          {
            <ul className="list-unstyled text-center">
              <li>
                {<img className="img-fluid w-50" src={product.image}></img>}
              </li>
              <li>{product.description}</li>
              <li>{product.price}</li>
            </ul>
          }
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
