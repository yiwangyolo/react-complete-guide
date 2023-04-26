import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  { id: "product-1", title: "Product 1" },
  { id: "product-2", title: "Product 2" },
  { id: "product-3", title: "Product 3" },
];

export const ProductPage = () => {
  return (
    <>
      <h1>Products Page.</h1>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
