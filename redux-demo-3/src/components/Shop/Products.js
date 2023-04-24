import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "1",
    price: 6,
    title: "First Item",
    description: "First Item",
  },
  {
    id: "2",
    price: 12,
    title: "Second Item",
    description: "Second Item",
  },
  {
    id: "11",
    price: 10,
    title: "Third Item",
    description: "Third Item",
  },
  {
    id: "24",
    price: 19,
    title: "Fourth Item",
    description: "Fourth Item",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
