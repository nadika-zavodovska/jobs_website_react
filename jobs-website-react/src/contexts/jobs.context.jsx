import PropTypes from "prop-types";
import { createContext, useState } from "react";
import JobsJson from "../jobs.json";

// eslint-disable-next-line react-refresh/only-export-components
export const JobsContext = createContext();

export default function JobsProvider({ children }) {
  const [jobs, setJobs] = useState(JobsJson.jobs || []);

  // Fetch job by ID
  const getJobById = (id) => jobs.find((job) => job.id === id);

  // Updates the job by mapping through the jobs array and replacing the job that matches the id.
  const updateJob = (updatedJob) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
  };

  return (
    // Included getJobById and updateJob in the value
    <JobsContext.Provider value={{ jobs, setJobs, getJobById, updateJob }}>
      {children}
    </JobsContext.Provider>
  );
}

JobsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
