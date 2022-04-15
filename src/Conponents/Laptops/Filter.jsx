import Accordion from 'react-bootstrap/Accordion';
const Filter = () => {
               return (<>
                 <div className="container-fluid ">
                   <div className="container shadow-sm p-3 mb-5 bg-white rounded Filter-bg mt-3">
                     <Accordion defaultActiveKey="0">
                       <Accordion.Item eventKey="0">
                         <Accordion.Header className="font-weight-bold">
                           Related Categories
                         </Accordion.Header>
                         <Accordion.Body>
                           Tablet & Laptops Acceccories
                         </Accordion.Body>
                       </Accordion.Item>
                       <Accordion.Item eventKey="1">
                         <Accordion.Header>Refine by</Accordion.Header>
                         <Accordion.Body>
                           <input type="text" className="form-control" />
                           <p className="text-center mt-2">Clear All</p>
                         </Accordion.Body>
                       </Accordion.Item>
                       <Accordion.Item eventKey="2">
                         <Accordion.Header>Price</Accordion.Header>
                         <Accordion.Body>
                           <input type="text" className="form-control" />
                           <p className="text-center mt-2">Price: $55 — $5000</p>
                         </Accordion.Body>
                       </Accordion.Item>
                       <Accordion.Item eventKey="3">
                         <Accordion.Header>Operating System</Accordion.Header>
                         <Accordion.Body>
                           <p className=" mt-2">
                             Android 6.0 <br />
                             Android 5.1<br />
                             Android 5.0<br />
                             Android 4.4</p>
                         </Accordion.Body>
                       </Accordion.Item>
                       <Accordion.Item eventKey="4">
                         <Accordion.Header>Screen Size</Accordion.Header>
                         <Accordion.Body>
                           <p className=" mt-2">
                             1920x1200 <br />
                             1280x800 <br />
                             2560x1600 <br />
                             1920x1080 <br />
                             2048X1536 <br />
                             1920*1280 <br />
                             1024x600</p>
                         </Accordion.Body>
                       </Accordion.Item>
                       <Accordion.Item eventKey="5">
                         <Accordion.Header className="font-weight-bold">
                           Processor Core
                         </Accordion.Header>
                         <Accordion.Body>
                           Tablet Data Capacity
                         </Accordion.Body>
                       </Accordion.Item>
                       <Accordion.Item eventKey="6">
                         <Accordion.Header className="font-weight-bold">
                           Tablet Data Capacity
                         </Accordion.Header>
                         <Accordion.Body>
                           Tablet Data Capacity
                         </Accordion.Body>
                       </Accordion.Item>
                     </Accordion>
                   </div>
                 </div>
               </>);
             }

export default Filter;