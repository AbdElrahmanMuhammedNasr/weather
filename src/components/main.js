import React, { Component } from 'react'
import Navbar from '../UI/mainpage/navbar'
import cloud from '../assets/cloud.png'
import axios from 'axios'


class Main extends Component {


    state = {
        month30: [],
        city: null,
        loading: true,
    }


    componentDidMount() {



        const axios = require("axios");

        var options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/climate/month',
            params: { q: 'alexandria' },
            headers: {
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                'x-rapidapi-key': '1729cf9aafmshf367a549de72d3fp15224cjsnecde86e8a0bc'
            }
        };
        axios.request(options).then((response) => {
            const { city, list } = response.data
            this.setState(
                {
                    month30: list,
                    city: city,
                    loading: false,
                }
            )
            // console.log(list[18]);


        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            console.log(this.state.month30[18])
        });



    }



    render() {
        let date =  parseInt (new Date().getDate() - 1);
        let month =  parseInt (new Date().getMonth() + 1);
        let year =  parseInt (new Date().getFullYear() );

        return (
            <div>
                <Navbar />
                {
                    this.state.loading
                        ? <h1> Search </h1>
                        : <>
                            <div className='container' style={{ width: '100%', height: 'auto', backgroundColor: '#e9e9e9', marginTop: '20px', padding: '20px', borderRadius: '20px' }}>
                                <h6 className='font-weight-bold'>  {this.state.city.name} ,{this.state.city.country} <span>Loaction</span> ( {this.state.city.coord.lon} , {this.state.city.coord.lat}) </h6>



                                <div className=' row justify-content-md-around' >


                                    <div className="card text-center  h-50" style={{ width: '40%' }} >
                                        <div className="card-header font-weight-bold">  Weather </div>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <img width='50%' src={cloud} />
                                            </h5>
                                            <p className="card-text font-weight-bold">Cloud</p>
                                        </div>
                                        <div className="card-footer text-muted">
                                        {/* (48.2°F − 32) × 5/9 = 9°C */}
                                            {parseInt((this.state.month30[date].temp.average -32) * 5/9) } degree
                                        </div>
                                    </div>


                                    <div className="card text-center " style={{ width: '40%' }}>
                                        <div className="card-header font-weight-bold">
                                            Weather information
                                        </div>
                                        <div className="card-body">
                                            <h5 class="card-title font-weight-bold">
                                                <p>Humidity</p>
                                                <p>{this.state.month30[date].humidity}%</p>
                                            </h5>

                                            <h5 className="card-title font-weight-bold">

                                                <p>Pressure</p>
                                                <p>{this.state.month30[date].pressure} HG</p>
                                            </h5>

                                            <h5 className="card-title font-weight-bold">

                                                <p>Wind speed</p>
                                                <p>{this.state.month30[date].wind_speed} km/h</p>
                                            </h5>

                                        </div>
                                        <div className="card-footer text-muted">
                                            {"".concat(date+1).concat('/').concat(month).concat('/').concat(year)}
                                        </div>
                                    </div>



                                </div>
                            </div>


                            <hr />
                            All Month
                            <div className='row w-100 ' style={{ height: '35vh', margin: '10px 0px', backgroundColor: 'none', overflowX: 'scroll' }}>
                                {
                                    this.state.month30.map((day,index) => {
                                        return (
                                            <div className="col-2 card text-center " style={{ width: '10%' }} >
                                                <div className="card-header font-weight-bold">  Day {index+1} </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        <img width='90%' src={cloud} />
                                                    </h5>
                                                    <p className="card-text font-weight-bold">Cloud</p>
                                                </div>
                                                <div className="card-footer text-muted">
                                                    {parseInt( ( day.temp.average -32) * 5/9 )} degree
                                                </div>
                                            </div>
                                        )
                                    })
                                }



                            </div>

                        </>
                }


            </div>
        )
    }

}

export default Main