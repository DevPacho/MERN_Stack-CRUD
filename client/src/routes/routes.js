import { createBrowserRouter } from "react-router-dom";
import UsersList from "../components/UsersList";
import CreateUser from "../components/CreateUser";
import UpdateUser from "../components/UpdateUser";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersList />,
    errorElement: <Error />,
  },
  {
    path: "/createUser",
    element: <CreateUser />,
  },
  {
    path: "/updateUser/:_id",
    element: <UpdateUser />
  },
]);

export default router;
