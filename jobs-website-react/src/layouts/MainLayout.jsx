import { Outlet } from "react-router-dom";
// From the react - toastify library. Displays toast notifications for showing success, error, or info messages.
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
// Context provider for managing job - related state and sharing it across components.
import JobsProvider from "../contexts/jobs.context";

const MainLayout = () => {
  return (
    <JobsProvider>
      <Navbar />
      {/* Child routes will be displayed here. If we don’t use Outlet, the parent layout (MainLayout) would always render its content, but the child routes wouldn’t display anything. Benefit of Outlet - we don’t need to repeat shared elements like the navbar or footer in every route. */}
      <Outlet />
      <ToastContainer />
    </JobsProvider>
  );
};

export default MainLayout;
