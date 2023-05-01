import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://img.freepik.com/free-photo/lake-with-autumn-foliage-mountains-with-reflection-new-england-stowe_649448-5418.jpg?w=1380&t=st=1682599573~exp=1682600173~hmac=673ec999ab978b170452864313a7de0f1af911e254185bdbc4969b9f1277bde0",
    address: "dummy address, dummy city",
    description: "First meetup here.",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://img.freepik.com/free-photo/lake-with-autumn-foliage-mountains-with-reflection-new-england-stowe_649448-5418.jpg?w=1380&t=st=1682599573~exp=1682600173~hmac=673ec999ab978b170452864313a7de0f1af911e254185bdbc4969b9f1277bde0",
    address: "dummy address, dummy city",
    description: "Second meetup here.",
  },
];

const HomePage = (props) => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
};

// getStaticProps will only work in pages.
// this is a special key function that nextJS will look/execute before rendering a page
// it will provide props that is needed for this page.
// this function can be set as async as well.
// it will always return an object in this format { props: {} }.

export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1, // this allows the page to regenerate every 10 seconds on server to fetch the latest data.
  };
};

// this will be executed for every incoming view request
// server to pre-render props for the page, so it will always be updated data
// no revalidate will be needed for this.

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export default HomePage;
