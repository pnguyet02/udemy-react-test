import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./NotFound";

import TableUsers from "../components/TableUsers";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <PrivateRoute path="/users">
          <TableUsers />
        </PrivateRoute> */}
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <TableUsers />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
