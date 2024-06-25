import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { AuthHOC } from "./components/common/AuthHOC";

/* Login */
const Login = lazy(
  () => import(/* webpackChunkName: "login" */ "@/pages/Login/Login"),
);

const Logout = lazy(
  () => import(/* webpackChunkName: "logout" */ "@/pages/Logout/Logout"),
);

/* Partner */
const PartnerCreate = lazy(
  () =>
    import(
      /* webpackChunkName: "partner-create" */ "@/pages/Partner/Create/Create"
    ),
);

const PartnerEdit = lazy(
  () =>
    import(/* webpackChunkName: "partner-edit" */ "@/pages/Partner/Edit/Edit"),
);

const PartnerList = lazy(
  () =>
    import(/* webpackChunkName: "partner-list" */ "@/pages/Partner/List/List"),
);

/* Tree */
const TreeCreate = lazy(
  () =>
    import(/* webpackChunkName: "tree-create" */ "@/pages/Tree/Create/Create"),
);

const TreeEdit = lazy(
  () => import(/* webpackChunkName: "tree-edit" */ "@/pages/Tree/Edit/Edit"),
);

const TreeList = lazy(
  () => import(/* webpackChunkName: "tree-list" */ "@/pages/Tree/List/List"),
);

/* User */
const UserEdit = lazy(
  () => import(/* webpackChunkName: "user-edit" */ "@/pages/User/Edit/Edit"),
);

const UserList = lazy(
  () => import(/* webpackChunkName: "user-list" */ "@/pages/User/List/List"),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthHOC />,
    children: [
      {
        index: true,
        element: <Navigate to="/tree" replace />,
      },
      {
        path: "/partner",
        children: [
          {
            index: true,
            element: <PartnerList />,
          },
          {
            path: "/partner/create",
            element: <PartnerCreate />,
          },
          {
            path: "/partner/:id",
            element: <PartnerEdit />,
          },
        ],
      },
      {
        path: "/tree",
        children: [
          {
            index: true,
            element: <TreeList />,
          },
          {
            path: "/tree/create",
            element: <TreeCreate />,
          },
          {
            path: "/tree/:id",
            element: <TreeEdit />,
          },
        ],
      },
      {
        path: "/user",
        children: [
          {
            index: true,
            element: <UserList />,
          },
          {
            path: "/user/:id",
            element: <UserEdit />,
          },
        ],
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
