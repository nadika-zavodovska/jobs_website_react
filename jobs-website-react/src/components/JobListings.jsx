import PropTypes from "prop-types";
import { useContext } from "react";
import { JobsContext } from "../contexts/jobs.context";
import JobListing from "./JobListing";

const JobListings = ({ isHome = false }) => {
  const { jobs } = useContext(JobsContext);

  const displayJobs = isHome ? jobs.slice(0, 3) : jobs;

  /**
   * React rendering steps:
   * 1. Component is rendered
   * 2. useEffect is called
   * 3. fetchJobs is called
   * 4. fetchJobs might be called again when the component is re-rendered
   */

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-teal-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayJobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

JobListings.propTypes = {
  isHome: PropTypes.bool,
};

export default JobListings;
