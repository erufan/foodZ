import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LayOut from "./Pages/LayOut";
import RecipesPage from "./Pages/RecipesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/recipes", element: <RecipesPage /> },
    ],
  },
]);

export default router;
