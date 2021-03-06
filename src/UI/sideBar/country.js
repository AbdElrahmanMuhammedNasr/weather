import React  from 'react';


const Country = (props) =>{

    return (
        <div className='row justify-content-start ' style={{ margin:'10px', cursor:'pointer'}} onClick={ props.clicked}>
            <img className='rounded-circle align-self-center' style={{width:'20px', height:'20px' ,margin:' 0'}} src={props.countryInfo.flag} />
            <p className='align-baseline' style={{margin:'8px'}}>{props.countryInfo.name}</p>
        </div>
    )
}

export default Country;