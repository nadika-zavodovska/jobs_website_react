import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      {/* Displays a list of job postings with a prop (isHome={true} */}
      <JobListings isHome={true} />
      {/* A link that allows users to navigate to a page with all available jobs. */}
      <ViewAllJobs />
    </>
  );
};

export default HomePage;