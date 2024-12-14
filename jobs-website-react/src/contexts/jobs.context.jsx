import PropTypes from "prop-types";
import { createContext, useState } from "react";
import JobsJson from "../jobs.json";

export const JobsContext = createContext();

export default function JobsProvider({ children }) {
  const [jobs, setJobs] = useState(JobsJson.jobs || []);

  return (
    <JobsContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobsContext.Provider>
  );
}

JobsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
