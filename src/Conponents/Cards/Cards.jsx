import Card from 'react-bootstrap/Card';

const Car = (props) => {
    return ( 
        <>
         <Card style={{ width: '10rem'}} className="" onClick={()=> window.location.pathname = "/product"}>
                <Card.Img variant="top" src={props.img}  />
                <Card.Body>
                    <Card.Text className="">
                        {props.Name} 
                    <h4> {props.Sena} </h4>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
     );
}
 
const Cards = () => {
    
    return (
        <>
           <Car
           img="data:image/jpeg;base64,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 "
           Name="8.0 Inch CHUWI Hi8 Air"
           Sena="$300.99"
           />
        </>
    );
}
export default Cards;