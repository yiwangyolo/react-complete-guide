import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">products</Link>
      </p>
    </>
  );
};
