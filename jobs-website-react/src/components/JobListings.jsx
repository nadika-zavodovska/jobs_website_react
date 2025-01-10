// This is a package used for type checking of props.In this case, it ensures that the component receives the correct type for its isHome prop.
import PropTypes from "prop-types";
// This hook is used to access the current value of a React context.In this case, it's used to access the JobsContext
import { useContext } from "react";
// The context that contains the jobs data.
import { JobsContext } from "../contexts/jobs.context";
import JobListing from "./JobListing";

// The default value for isHome props is false.
const JobListings = ({ isHome = false }) => {
  // This hook is used to retrieve the jobs data from the JobsContext. It provides an object with the jobs array.
  const { jobs } = useContext(JobsContext);
  // If isHome is true(meaning the component is used on the home page), it will show only the first 3 jobs by calling.slice(0, 3) on the jobs array.
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
        {/* This h2 element contains a title that changes depending on the value of isHome. If isHome is true, it will say "Recent Jobs", otherwise, it will display "Browse Jobs" */}
        <h2 className="text-3xl font-bold text-teal-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* This line maps over the displayJobs array, rendering a JobListing component for each job. key={job.id}: In React, each element in a list needs a unique key prop, and here, job.id is used as the key for each job.*/}
          {displayJobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

// propTypes is used to enforce that the isHome prop passed to the JobListings component must be a boolean.

JobListings.propTypes = {
  isHome: PropTypes.bool,
};

export default JobListings;
