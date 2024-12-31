import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
// Integrated JobsContext
import { useContext } from "react";
import { JobsContext } from "../contexts/jobs.context";

/**
 *
 * Assignment:
 * 1. Use jobs context to show the job details by using the id from the params
 * 2. Use delete job function to delete the job from the context and redirect to the jobs page
 */

const JobPage = () => {
  const navigate = useNavigate();
  // Retrieve the job by id
  const { id } = useParams();
  const { jobs, setJobs } = useContext(JobsContext);

  // Find the job based on the ID from params
  const job = jobs.find((job) => job.id === id);
  // The job's ID from the URL is used to look up the matching job in the list of jobs. This means we don’t need to use useLoaderData or fetch the job details from an API.
  // const job = useLoaderData();

  const deleteJob = (jobId) => {
    // Filter out the deleted job and update state
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
  };

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );

    if (!confirm) return;

    deleteJob(jobId);

    toast.success("Job deleted successfully");

    navigate("/jobs");
  };

  if (!job) {
    return (
      <div className="container m-auto py-6 px-6">
        <p>Job not found</p>
        <Link
          to="/jobs"
          className="text-teal-500 hover:text-teal-600 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Back to Job Listings
        </Link>
      </div>
    );
  }

  return (
    <>   
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-teal-500 hover:text-teal-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-teal-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-teal-800 text-lg font-bold mb-6">
                  Job Description
                </h3>
                <p className="mb-4">{job.description}</p>
                <h3 className="text-teal-800 text-lg font-bold mb-2">Salary</h3>
                <p className="mb-4">{job.salary} / Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                <h2 className="text-2xl">{job.company.name}</h2>
                <p className="my-2">{job.company.description}</p>
                <hr className="my-4" />
                <h3 className="text-xl">Contact Email:</h3>
                <p className="my-2 bg-teal-100 p-2 font-bold">
                  {job.company.contactEmail}
                </p>
                <h3 className="text-xl">Contact Phone:</h3>
                <p className="my-2 bg-teal-100 p-2 font-bold">
                  {" "}
                  {job.company.contactPhone}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-teal-500 hover:bg-teal-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

// const jobLoader = async ({ params }) => {
//   const res = await fetch(`/api/jobs/${params.id}`);
//   const data = await res.json();
//   return data;
// };

// export { JobPage as default, jobLoader };

export default JobPage;
