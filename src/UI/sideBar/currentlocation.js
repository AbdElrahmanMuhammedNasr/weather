import React from 'react';
import sun from '../../assets/sun.png'


const CurrentLocation = (props) => {

    return (
        <div className="card"  >
            <div className="card-body">
                <h5 className="card-title font-weight-bold">Egypt   - <span className='font-weight-light'> 33 </span>  </h5>
                <img className=' rounded-circle ' style={{ width: '90px', height: '90px' }} src={sun} />
                <p className="card-text font-weight-bold ">sunny    </p>
            </div>
        </div>
    )
}

export default CurrentLocation;