import Card from 'react-bootstrap/Card'
import "./Like.css"
function LikeCard() {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://filearchive.cnews.ru/img/zoom/2020/03/11/apple_ipad_(2019)_128_gb.jpg" />
                <Card.Body>
                    <Card.Title><div className="justify-content-around ms-1">
                <i class="bi bi-star-fill text-warning "></i>
                <i class="bi bi-star-fill text-warning ms-1"></i>
                <i class="bi bi-star-fill text-warning ms-1"></i>
                <i class="bi bi-star-fill text-warning ms-1"></i>
                </div></Card.Title>
                    <Card.Text>
                     <h5 className='ms-1'>Planshet sotiladi holati ideal Narhi</h5>
                    </Card.Text>
                </Card.Body>
                  <h1 className='ms-3'>$329.99</h1>
                <Card.Body>
                   <button className='btn btn ms-1 bg-btnn text-light' id='btn'>Add to Cart</button>
                   <i class="bi bi-heart ms-4" id='Love'></i>
                
                </Card.Body>
                   
            </Card>
        </>
    );
}
export default LikeCard;