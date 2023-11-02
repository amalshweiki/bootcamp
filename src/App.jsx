import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import SharedLayOut from "./components/SharedLayOut";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HTMLPage from "./pages/HTMLPage";
import CSSPage from "./pages/CSSPage";
import JSPage from "./pages/JSPage";
import ReactPage from "./pages/ReactPage";
import ShareResourcesPage from "./pages/ShareResourcesPage";
import Login from "./pages/Login";
function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayOut />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "/htmlpage",
          element: <HTMLPage />,
        },
        {
          path: "/csspage",
          element: <CSSPage />,
        },
        {
          path: "/jspage",
          element: <JSPage />,
        },
        {
          path: "/reactpage",
          element: <ReactPage />,
        },
        {
          path: "/shareresources",
          element: <ShareResourcesPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
