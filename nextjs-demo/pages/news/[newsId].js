import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // ie. sending a request to the backend API with newsId to fetch news

  return <h1>{newsId} Details Page.</h1>;
}

export default DetailsPage;
