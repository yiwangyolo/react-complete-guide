// import { useState, useEffect } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  // const [loadedMeetup, setLoadedMeetup] = useState([]);

  // useEffect(() => {
  //   setLoadedMeetup(props.meetupData);
  // }, []);

  const loadedMeetup = props.meetupData;

  return (
    <MeetupDetail
      id={loadedMeetup.id}
      image={loadedMeetup.image}
      title={loadedMeetup.title}
      address={loadedMeetup.address}
      description={loadedMeetup.description}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://img.freepik.com/free-photo/lake-with-autumn-foliage-mountains-with-reflection-new-england-stowe_649448-5418.jpg?w=1380&t=st=1682599573~exp=1682600173~hmac=673ec999ab978b170452864313a7de0f1af911e254185bdbc4969b9f1277bde0",
        title: "meetup title",
        address: "meetup address",
        description: "meetup description",
      },
    },
  };
};

export default MeetupDetails;
