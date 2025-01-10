/* eslint-disable react/prop-types */
// The children prop is inserted into the div, meaning that any content passed inside the Card component when used will be displayed here.
const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      {children}
    </div>
  );
};

export default Card;