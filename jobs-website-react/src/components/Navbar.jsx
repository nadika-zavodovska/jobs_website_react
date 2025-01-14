// NavLink is a component from react - router-dom used for navigation.It works similarly to an anchor(<a>) tag, but it automatically manages active link styling and routing without reloading the page.
import { NavLink } from "react-router-dom";
import logo from "../assets/images/job-search.png";

const Navbar = () => {
    // The arrow function takes an object(with isActive as a property) and returns a string containing the CSS classes. React Router determines if a link is "active" by comparing the current URL (the one displayed in the browser's address bar) with the to prop of a NavLink.
    const linkClass = ({ isActive }) => isActive ? 'bg-emerald-900 text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
    return (
        <nav className="bg-teal-700 border-b border-teal-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        {/* The linkClass function is used in the NavLink components in the Navbar to dynamically assign classes */}
                        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                            <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">Find a Job</span>
                        </NavLink>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <NavLink to="/" className={linkClass}>
                                    Home
                                </NavLink>
                                <NavLink to="/jobs" className={linkClass}>
                                    Jobs
                                </NavLink>
                                <NavLink to="/add-job" className={linkClass}>
                                    Add Job
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
