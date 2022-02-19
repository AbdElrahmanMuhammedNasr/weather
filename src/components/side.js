import React, { Component } from 'react'
import image from '../assets/eg.png'
import Country from '../UI/country'
import sun from '../assets/sun.png'

import { countries } from "country-flags-svg";


class Side extends Component {
    Allcountries = [...countries]

    state = {
        countries:[... this.Allcountries]
    }


    searchCountry = (event) => {

        console.log(event.target.value)

        const new_country = this.Allcountries.filter(c => {
            return c.name.toUpperCase().startsWith(event.target.value.toUpperCase());
            })

        this.setState(
            {
                countries: new_country
            }
        )
    }


    render() {

        const scrollStyle = {
            height: "66vh",
            overflow: 'scroll',
            margin: '10px 0px'

        }

        return (
            <div style={{ marginTop: '20px' }}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="search" onChange={(event) => this.searchCountry(event)} />

                    <div style={scrollStyle}>


                        {
                            this.state.countries.map((country, index) => {
                                return (
                                    < >
                                        <Country countryInfo={country} />

                                    </>
                                )
                            })
                        }
                    </div>

                    <div>
                        <div className="card"  >
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Egypt   - <span className='font-weight-light'> 33 </span>  </h5>
                                <img className=' rounded-circle ' style={{ width: '90px', height: '90px' }} src={sun} />
                                <p className="card-text font-weight-bold ">sunny    </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Side