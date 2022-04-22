import React from 'react';
import "./Category.scss";


function Category() {
    return (

        <div>
            <div className='containerNAV container-fluid'>
                <h6 className='mt-3 ms-3'>Home / Categories / Tablet & Laptops Acceccories</h6>
                <div className='row'>
                    <div className='divIMG col-lg-2'>
                        <div>
                            <img className='img1 mt-3 ms-3' src='https://img.gkbcdn.com/p/2017-11-22/lenovo-p8-tablet-pc-3g-16g-blue-1571980894598._w500_.jpg' />
                            <img className='img2 mt-3 ms-3' src='https://img.gkbcdn.com/p/2017-11-22/lenovo-p8-tablet-pc-3g-16g-blue-1571980894598._w500_.jpg' />
                            <img className='img3 mt-3 ms-3' src='https://img.gkbcdn.com/p/2017-11-22/lenovo-p8-tablet-pc-3g-16g-blue-1571980894598._w500_.jpg' />
                            <img className='img4 mt-3 ms-3' src='https://img.gkbcdn.com/p/2017-11-22/lenovo-p8-tablet-pc-3g-16g-blue-1571980894598._w500_.jpg' />
                            <img className='img5 mt-3 ms-3' src='https://img.gkbcdn.com/p/2017-11-22/lenovo-p8-tablet-pc-3g-16g-blue-1571980894598._w500_.jpg' />
                        </div>
                    </div>

                    <div className='col-lg-10 '>
                        <div className='row'>
                            <div className='bigImgDiv col-lg-5'>
                                <img className='bigIMG mt-5' src='https://img.gkbcdn.com/p/2017-11-22/lenovo-p8-tablet-pc-3g-16g-blue-1571980894598._w500_.jpg' ></img>
                            </div>

                            <div className='col-lg-7'>
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <p className='ms-3'>1 customer rewiev</p>
                                        </div>

                                        <div className='col-lg-6'>
                                            <p className='ms-5'>SKU:ED1420</p>
                                        </div>
                                    </div>

                                    <div className='col-lg-12 mt-3'>
                                        <h2>Lenovo P8 TAb3 8 plus TB - 8703F 8.0 inch</h2>
                                        <p className='text-success'>In Stock</p>
                                    </div>

                                    <div className='col-lg-12 mt-3 '>
                                        <p>Color:
                                            <button className='btn border-success rounded-pill ms-3'>Dark Blue</button>
                                            <button className='btn border-success rounded-pill ms-3'>White</button>
                                        </p>
                                    </div>

                                    <div className='col-lg-12 mt-3 '>
                                        <p>RAM:
                                            <button className='btn border-success rounded-pill ms-3'>16 gb</button>
                                            <button className='btn border-success rounded-pill ms-3'>32 gb</button>
                                            <button className='btn border-success rounded-pill ms-3'>64 bg</button>
                                        </p>
                                    </div>

                                    <div className='col-lg-12 mt-4'>
                                        <div className='divCART col-lg-9 border border-5 rounded-pill'>
                                            <h1 className='ms-5 mt-4 d-flex'>$329.99
                                                <button className='btnCART btn btn-outline-success btn-large rounded-pill ms-3'>Add to cart</button>
                                                <button className='btn btn-outline-success btn-large rounded-pill ms-3'><i className='bx h4 bx-heart'></i></button>
                                            </h1>
                                        </div>
                                    </div>

                                    <div className='col-lg-12 mt-4  '>
                                        <p> Delivery: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at <a href=''>View More</a></p>
                                    </div>

                                    <div className='col-lg-12 mt-4  '>
                                        <p> Payment: 
                                            <img className='ms-3' id='imgPAYME' src='https://logobank.uz:8005/media/logos_png/payme-01.png'/> 
                                            <a className='ms-3' href=''>View More</a>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Category;