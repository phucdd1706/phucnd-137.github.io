//THIRD PARTY IMPORTS
import { Navigate, useRoutes } from "react-router-dom";

//LOCAL IMPORTS
import MainRoutes from "~/routes/MainRoutes";

export default function Routes() {
  return useRoutes([
    { path: "*", element: <Navigate to="/" replace /> },
    MainRoutes,
  ]);
}
