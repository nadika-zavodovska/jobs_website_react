import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import JobsProvider from "../contexts/jobs.context";

const MainLayout = () => {
  return (
    <JobsProvider>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </JobsProvider>
  );
};

export default MainLayout;
