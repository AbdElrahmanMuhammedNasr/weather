import React, { Component } from 'react'
import image from '../assets/eg.png'
import Country from '../UI/sideBar/country'
import CurrentLocation from '../UI/sideBar/currentlocation';


//  liberary
import { countries } from "country-flags-svg";
//  end

class Side extends Component {
    Allcountries = [...countries]

    state = {
        countries: [...countries]
    }


    searchCountry = (event) => {

        // console.log(event.target.value)

        const new_country = this.Allcountries.filter(c => {
            return c.name.toUpperCase().startsWith(event.target.value.toUpperCase());
        })

        this.setState(
            {
                countries: new_country
            }
        )
    }

    countryClick = (event, countryName) => {
        console.log(countryName)

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
                                    <>
                                        <Country countryInfo={country} key={index} clicked={(event) => this.countryClick(event, country.name)} />

                                    </>
                                )
                            })
                        }
                    </div>

                    <div>
                        <CurrentLocation />
                    </div>

                </div>
            </div>
        )
    }
}

export default Side