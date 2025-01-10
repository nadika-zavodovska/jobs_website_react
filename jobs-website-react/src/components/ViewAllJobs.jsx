// The Link component from react - router - dom is used to create navigation links in a React app.When clicked, it changes the URL without reloading the page, enabling client - side routing.
import { Link } from 'react-router-dom';

const ViewAllJobs = () => {
    return (
        <section className="m-auto max-w-lg my-10 px-6">
            <Link to="/jobs" className="block bg-emerald-900 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View All Jobs</Link>
        </section>
    );
};

export default ViewAllJobs;