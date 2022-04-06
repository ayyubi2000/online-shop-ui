import axios from "axios";
import {useEffect} from 'react'
import Contakt from "../../Conponents/Contakt/Contakt"
const Contact = () => {
    useEffect(()=>{
        axios.post('/register', {

        })
        .then(res =>  console.log(res))
    }, []);
   
    return ( 
                   <>
                   <Contakt/>
                   </>
                );
}
 
export default Contact;