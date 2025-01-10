/* eslint-disable react/prop-types */
import { useState } from "react";
// Link from 'react-router-dom': This is used to create links to other routes in your app, enabling client - side routing.It allows navigation to different pages without refreshing the entire page.
import { Link } from "react-router-dom";
// This is an icon from the react - icons library, specifically the Font Awesome map marker icon
import { FaMapMarker } from "react-icons/fa";

// The component that takes in a single prop job, which is an object containing details about a specific job posting
const JobListing = ({ job }) => {
    // The useState hook is used to create a piece of state(showFullDescription) to control whether the full job description is shown or just a short preview.
    // Initially, showFullDescription is set to false, meaning the description will only show a short preview.
    const [showFullDescription, setshowFullDescription] = useState(false);
    let description = job.description;
    // If showFullDescription is false, only the first 90 characters of the description will be shown. If showFullDescription is true, the full description is used.
    if (!showFullDescription) {
        description = description.substring(0, 90) + "...";
    }
    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{job.type}</div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                </div>
                {/* The description of the job is rendered here, and it will either be a truncated version (if showFullDescription is false) or the full description (if showFullDescription is true). */}
                <div className="mb-5">{description}</div>
                <button
                    onClick={() => setshowFullDescription((prevState) => !prevState)}
                    className="text-teal-500 mb-5 hover:text-teal-600">
                    {/* A conditional rendering expression that dynamically displays "More" or "Less" based on the value of showFullDescription */}
                    {showFullDescription ? "Less" : "More"}
                </button>
                <h3 className="text-teal-500 mb-2">{job.salary} / Year</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        {/* This icon is used to display a map pin before the job's location. */}
                        <FaMapMarker className="inline text-lg mb-1 mr-1" />
                        {job.location}
                    </div>
                    {/* The Link component is used to create a navigation link to the individual job's detailed page. */}
                    <Link
                        to={`/jobs/${job.id}`}
                        className="h-[36px] bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobListing;
