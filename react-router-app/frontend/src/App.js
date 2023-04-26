import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { RootLayout } from "./pages/Root";
import { HomePage } from "./pages/HomePage";
import { EventsRootLayout } from "./pages/EventsRoot";
import { EventsPage, loader as eventLoader } from "./pages/Events";
import {
  EventDetailPage,
  loader as eventDetailLoader,
  action as eventDeleteAction,
} from "./pages/EventDetailPage";
import { NewEventPage } from "./pages/NewEventPage";
import { EditEventPage } from "./pages/EditEventPage";
import { ErrorPage } from "./pages/ErrorPage";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import { action as manipulateAction } from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventDeleteAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
