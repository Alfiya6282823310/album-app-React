import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [data,changeData]= useState({"articles":[]})
    const fetchData=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">userid</th>
                                    <th scope="col">id</th>
                                    <th scope="col">title</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                              {
                                data.articles.map(
                                    (value,index) => {
                                        return   <tr>
                                        <td>{value.title}</td>
                                        <td>{value.name}</td>
                                        <td>{value.publishedAt}</td>
                                        
                                    </tr>
                                    }
                                )
}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall