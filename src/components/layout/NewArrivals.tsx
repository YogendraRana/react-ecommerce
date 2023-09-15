// import components
import Slider from '../utils/Slider.tsx';

// import data
import data from '../../data/data.ts';

const NewArrivals = () => {

    return (
        <Slider title="New Arrivals." message="Good things are waiting for you." items={data}  />
    )
}

export default NewArrivals;