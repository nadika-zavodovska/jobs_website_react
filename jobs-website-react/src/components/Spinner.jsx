/* eslint-disable react/prop-types */
// The ClipLoader component is imported from the react - spinners library.This is a pre - built, customizable loading spinner component.
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    display: 'block',
    margin: '100px auto'
};

// The component that accepts a prop called loading. This prop controls whether the spinner should be visible or not. If loading is true, the spinner will show; if loading is false, it will be hidden.
const Spinner = ({ loading }) => {
    return (
        <ClipLoader color='#289' loading={loading} cssOverride={override} size={150} />
    );
};

export default Spinner;