import React from 'react';
import "./Blog.scss";

function Blog() {
    return (
        <div className='container-fluid h-100 dadadiv'>
            <div className='container'>
                <div className='row'>
                    <div className='container-fluid '> 
                        <div className='row mt-4'>
                            <div className='col-lg-2'>
                                <h3>Latest Blog</h3>
                            </div>

                            <div className='col-lg-2'>
                                <h6 className='mt-2' id='seeAll' >See All</h6>
                            </div>

                            <div className='col-lg-6'>

                            </div>
                            <div className='col-lg-2'>
                                <button className='btn btn-light '>x</button>
                                <button className='btn btn-light '>x</button>

                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6    '>
                        <div className='row'>
                            <div className='col-lg-4 '>
                                <img className='imgMotion mt-5' src='https://eadn-wc03-3360597.nxedge.io/wp-content/uploads/Staring-at-computer.jpg'></img>
                            </div>

                            <div className='col-lg-8 '>
                                <div className='col-lg-12 mt-5 '>
                                    <i className=''>18 Mar, 2022</i>
                                </div>

                                <div className='col-lg-12 mt-2'>
                                    <b className=''>Leap Motion review: A glimpse into the</b>
                                </div>

                                <div className='col-lg-12 mt-2'>
                                    <i className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</i>
                                </div>

                                <div className='col-lg-12 mt-4'>
                                    <button className='btnReadMore btn '>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6    '>
                        <div className='row'>
                            <div className='col-lg-4 '>
                                <img className='imgMotion mt-5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/I2_Hill_Dis.PNG/250px-I2_Hill_Dis.PNG'></img>
                            </div>

                            <div className='col-lg-8 '>
                                <div className='col-lg-12 mt-5 '>
                                    <i className=''>18 Mar, 2022</i>
                                </div>

                                <div className='col-lg-12 mt-2'>
                                    <b className=''>FTC in talks with apple over health data</b>
                                </div>

                                <div className='col-lg-12 mt-2'>
                                    <i className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</i>
                                </div>

                                <div className='col-lg-12 mt-4'>
                                    <button className='btnReadMore btn '>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                   

                </div>
            </div>
        </div>

    )
}

export default Blog;