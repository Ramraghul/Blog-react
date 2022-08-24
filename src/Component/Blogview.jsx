import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios";

function Blogview() {
    let params = useParams()

    const [data, setData] = useState({})

    useEffect(() => {
        Viewdata()
    })

    let Viewdata = async () => {
        try {
            let game = await axios.get(`https://5cdd0a92b22718001417c19d.mockapi.io/api/blog/${params.id}`)
            setData(game.data)
        } catch (error) {

        }
    }
    return (
        <>
            {/* Header Image */}
            <header
                className="masthead"
                style={{ backgroundImage: `url(./assets/img/post-bg.jpg)` }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">

                                <h2 className="post-title">{data.title}</h2>
                                <h3 className="post-subtitle">{data.description}</h3>

                                <span className="subheading">
                                    Posted by
                                    <b>{data.author}</b>
                                    on {data.createdAt}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* content */}
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-preview">
                            {data.content}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogview