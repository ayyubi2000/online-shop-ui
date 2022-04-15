import User from './../../Assets/Images/User.png'
import './Contakt.css'
const Contakt = () => {
    return (
        <div className="container">
            <div className='row '>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <button className='btm'><i className="bi bi-arrow-left-short " style={{ fontSize: '40px' }}></i></button>
                            <img src={User} className=" imgs ms-5" />
                            <button className='box rounded-circle ms-3'><i className="bi bi-plus-circle-fill text-warning " style={{ fontSize: "50px" }}></i></button>
                        </div>
                        <div className="col-lg-12">
                            <h4 className='mt-4'>Username: {localStorage.getItem('Name')}</h4>
                            <h4 className='mt-3'>Lastname: {localStorage.getItem('Lastname')}</h4>
                            <h4 className='mt-3'>Number:  {localStorage.getItem('Number')} </h4>
                            <p className='mt-2'>Tasks</p>
                            <p className='mt-2'>Calendar</p>
                            <p className='mt-2'>Files</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    {/* <h5 className="mt-5">Nora spends most of their time on...</h5>
                    <div className='alert bg-secondary mt-3'><h3><i className="bi bi-phone"></i> Product Infrastructura</h3></div>
                    <div className='alert bg-secondary mt-3'><h3><i className="bi bi-lock"></i>Network Security</h3></div>
                    <div className='alert bg-secondary mt-3'><h3><i className="bi bi-pin-map-fill"></i> Security Testing</h3></div>
                    <div className='alert bg-secondary mt-3'><h3><i className="bi bi-globe"></i> Security Audit Outsourcing</h3></div>
                    <div className='alert bg-secondary mt-3'><h3><i className="bi bi-bug-fill"></i> Bugs</h3></div> */}
                </div>
            </div>
        </div>


    )
}
export default Contakt;