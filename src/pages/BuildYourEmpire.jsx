import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import Menu from "../layout/Menu";
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Buildings from "../components/buildings/ViewBuildings";
import ListGroup from 'react-bootstrap/ListGroup';


function BuildYourEmpire (){

    return(
        <div className="container">
            <Header/>
            <Menu/>
            <h1>Build Youre Empire!</h1>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <Buildings/>
                        </ListGroup>
                    </Col>
                </Row>
            </Tab.Container>
            <Footer/>
        </div>
    )
}
export default BuildYourEmpire;