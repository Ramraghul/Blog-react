import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function Header() {

    const [data, setData] = useState([])
    const [loading,setloading]=useState(false)

    useEffect(() => {
        Alldata()
    },[])

    let Alldata = async () => {
        try {
            setloading(true)
            let demo = await axios.get("https://5cdd0a92b22718001417c19d.mockapi.io/api/blog")
            setData(demo.data)
            setloading(false)
        } catch (error) {

        }
    }


    return (
        <>
            {/* Home Header Image */}
            <header
                className="masthead"
                style={{ backgroundImage: `url(./assets/img/home-bg.jpg)` }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>Clean Blog</h1>
                                <span className="subheading">A Blog Theme by Start Bootstrap</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Home Content loop method */}

            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">

                        {
                            data.map((blog,index) => {
                                return (
                                    <>
                                    <div className="post-preview" key={index}>
                                        <Link to={blog.id}>
                                            <h2 className="post-title">{blog.title}</h2>
                                            <h3 className="post-subtitle">{blog.description}</h3>
                                        </Link>
                                        <Link to={blog.id} className="post">
                                            Posted by
                                            <b>{blog.author}</b>
                                            on {blog.createdAt}
                                        </Link>
                                    </div>
                                    <hr class="my-4" />
                                    </>
                                );
                            })
                        }
                        <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
