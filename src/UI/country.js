import React  from 'react';

const Country = (props) =>{
    return (
        <div className='row justify-content-start ' style={{ margin:'10px', padding:''}}>
            <img className='rounded-circle align-middle' style={{width:'20px', height:'20px' ,margin:'8px 5px'}} src={props.countryInfo.flag} />
            <p className='align-baseline' style={{margin:'8px'}}>{props.countryInfo.name}</p>
        </div>
    )
}

export default Country;