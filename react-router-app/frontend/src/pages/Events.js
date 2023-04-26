import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

export const EventsPage = () => {
  // const events = useLoaderData();
  // const data = useLoaderData();

  const { events } = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  // const events = data.events;

  // return (
  //   <>
  //     <EventsList events={events} />
  //   </>
  // );

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not load..." };
    throw json({ message: "Could not fetch events. " }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;

    const resData = await response.json();

    return resData.events;
  }
};

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
