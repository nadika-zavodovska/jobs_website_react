// createBrowserRouter: Creates a router using the browser’s History API for managing navigation.It's the most common router for web apps.
// createRoutesFromElements: Converts JSX route definitions into a structure that the router can understand.
// Route: Defines individual routes and their behavior.
// RouterProvider: Wraps the app and provides the routing logic.
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // The component that wraps all child routes. MainLayout contains navbar, outlet etc. components.
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage />} />
        {/* :id - dynamic route for editing a specific job, identified by an id parameter. We can access the :id parameter in Components with useParams hook from React Router. */}
        <Route path="/edit-job/:id" element={<EditJobPage />} />
        <Route path="/jobs/:id" element={<JobPage />} />
        {/* A catch-all route for undefined paths, rendering the NotFoundPage. */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  // The RouterProvider connects the router configuration(router) to the app.
  return <RouterProvider router={router} />;
};

export default App;
