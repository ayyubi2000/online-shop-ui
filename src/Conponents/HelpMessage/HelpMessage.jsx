import "./HelpMessage.scss"

import { memo } from "react"
const helpMe = () => {
    return (
        <div className="container" >
            <div className="container bg-warning text-white d-flex align-items-center shadow" id="helpMe-scss" >
                <i className='bx bx-user ms-4 p-4' ></i>
                <h3>Welcome to Live Chat!</h3>
            </div>
            <div className="container bg-light shadow " id="smsPage">
                <div className="row ">
                    <div className="col-12">
                        <div className="float-start d-flex">
                            <i className='bx bxs-user-circle mt-4 fs-1' ></i>
                            <div className="bg-info mt-5" id="dvch" >
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="float-end d-flex">
                            <div className="bg-info mt-5" id="dvc" >
                            </div>
                            <i className='bx bxs-user-circle mt-4 fs-1'></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container  d-flex" id="hp-inp">
                <input type='search' className="form-control shadow " />
                <i className='bx bx-link-alt bg-light' style={{ fontSize: '40px' }}></i>
                <i className='bx bxs-send bg-light' style={{ fontSize: '40px' }}></i>
            </div>

        </div>
    )
}

export default memo(helpMe);