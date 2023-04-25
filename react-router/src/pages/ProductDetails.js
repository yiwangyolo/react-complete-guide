import { useParams, Link } from "react-router-dom";

export const ProductDetailsPage = () => {
  const params = useParams();

  return (
    <>
      <main>
        <h1>Product details page for {params.productId}.</h1>
        <Link to=".." relative="path">
          Back
        </Link>
      </main>
    </>
  );
};
