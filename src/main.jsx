import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import "./index.css";

import App from "./App";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Resume from "./pages/Resume";
import WorkPage from "./pages/WorkPage";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "work",
        element: <WorkPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
