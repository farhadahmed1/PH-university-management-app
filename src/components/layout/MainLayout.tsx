import { Layout } from "antd";
const { Header, Content } = Layout;

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

// const items: MenuProps["items"] = [
//   {
//     key: "Dashboard",
//     label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
//     icon: <DashboardOutlined />,
//   },
//   {
//     key: "1",
//     label: "User Management",
//     icon: <UserOutlined />,
//     children: [
//       {
//         key: "Create Admin ",
//         label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//       },
//       {
//         key: "Create Faculty ",
//         label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
//       },
//       {
//         key: "Create Student",
//         label: <NavLink to="/admin/create-student">Create Student</NavLink>,
//       },
//     ],
//   },
//   {
//     key: "2",
//     label: "Video",
//     icon: <VideoCameraOutlined />,
//   },
// ];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Layout>
        <Sidebar />
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
