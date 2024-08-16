import AdminDashboard from "../pages/admin/AdminDashboard/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent/CreateStudent";

interface TRoute {
  path: string;
  element: React.ReactElement;
}
const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "CreateAdmin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "CreateFaculty ",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "CreateStudent",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

//  Progrematically

export const adminRouts = adminPaths.reduce((acc: TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []);

// # Hard code
// export const adminPaths = [
//   {
//     index: true,
//     element: <AdminDashboard />,
//   },
//   {
//     path: "dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
// ];
