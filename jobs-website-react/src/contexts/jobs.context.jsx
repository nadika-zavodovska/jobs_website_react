import PropTypes from "prop-types";
import { createContext, useState } from "react";
import JobsJson from "../jobs.json";

// createContext() creates the JobsContext. This will be used to share the job-related data across the app. The JobsContext provides the state (jobs) and functions (getJobById and updateJob) to all components that consume the context.
export const JobsContext = createContext();

// In React, children is a special prop that represents anything that is nested inside a component.
export default function JobsProvider({ children }) {
  // The state jobs holds the array of job objects.It's initialized using JobsJson.jobs, which comes from a local JSON file. If JobsJson.jobs is empty or missing, it falls back to an empty array ([]).
  const [jobs, setJobs] = useState(JobsJson.jobs || []);

  // This function is used to find a specific job by its ID. It takes an id as an argument and returns the job that matches that ID.
  const getJobById = (id) => jobs.find((job) => job.id === id);

  // Updates the job by mapping through the jobs array and replacing the job that matches the id. It accepts an updatedJob object and replaces the old job (matching by id) with the new one. It uses the map() function to create a new jobs array with the updated job.
  const updateJob = (updatedJob) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
  };

  // It makes the jobs, setJobs, getJobById, and updateJob values available to all components that are children of JobsProvider.
  return (
    // Included getJobById and updateJob in the value
    <JobsContext.Provider value={{ jobs, setJobs, getJobById, updateJob }}>
      {children}
    </JobsContext.Provider>
  );
}

// JobsProvider.propTypes defines the type of the children prop. It ensures that children is a valid React node and that it’s required. If children is not provided, React will display a warning during development.
JobsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
