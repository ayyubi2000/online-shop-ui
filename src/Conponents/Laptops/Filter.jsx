import Accordion from 'react-bootstrap/Accordion';
const Filter = () => {

  const filter = [
    { title :"Refine by",body:"alik" },
    { title :"Refine by",body:"alik" }
];
  return (<>
      <div className="container shadow-sm p-3   rounded Filter-bg mt-3">
        <Accordion defaultActiveKey="0">
          {filter.map((elem, index) => {
            return (
              <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header className="font-weight-bold">
                 {elem.title}
                </Accordion.Header>
                <Accordion.Body>
                  {elem.body}
                </Accordion.Body>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </div>
  </>);
}
export default Filter;