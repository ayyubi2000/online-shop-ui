import Card from 'react-bootstrap/Card'
import Cards from '../Cards/Cards';
import "./item.css"
import {Routes , Route,Link} from 'react-router-dom';
const Item = () => {
    return (
        <>
            <div className="container">
                <p className="h2 text-item">Selected Products</p>
                <div className="col-12 mt-4">
                    <span className="item-hover">Trending Item</span>
                    <span className="ms-3 item-hover">New Arrivalssalom</span>
                    <span className="ms-3 item-hover">Best Sale</span>
                    <div className="col-12 bg-item"></div>
                </div>
                <div className="col-12 row">
                    <div className="col-12 col-lg-6  mt-3">
                        <Card.Img style={{height:"430px"}} variant="top" src="https://i0.wp.com/gizmologi.id/wp-content/uploads/2018/05/Xiaomi-Redmi-S2.jpg" />
                    </div>
                    <div className="col-12 col-lg-6 mt-3">
                        <div className='row'>
                                <Card.Img style={{height:"180px"}} variant="top" src="https://i.pcmag.com/imagery/articles/00UFGssMaiILePzrFXVxgPj-11.fit_scale.size_1028x578.v1569489156.jpg" />
                                <div className='col-12 mt-2 ms-1 row d-flex justify-content-center'>
                                  <div className='col-4'>
                                  <Link to="/laptops"><Cards /></Link>  
                                  </div>
                                  <div className='col-4'>
                                  <Link to="/laptops"><Cards /></Link>  
                                  </div>
                                  <div className='col-4'>
                                  <Link to="/laptops"><Cards /></Link>  
                                  </div>
                                </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </>
    );
}



const Items = () => {
    return (
        <>
            <Item />
        </>
    );
}

export default Items;