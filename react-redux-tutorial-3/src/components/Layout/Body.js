import React from 'react';
import AddToDo from '../AddToDo';
import ListToDo from '../ListToDo';
import FilterToDo from '../FilterToDo';
import {Container,Row,Col} from 'reactstrap';

class Body extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <AddToDo />
                    </Col>
                </Row>                
                <Row>
                    <Col md={{size:4, offset:4}}>
                        <ListToDo />
                    </Col>
                </Row>                
                <Row>
                    <Col>
                        {/* <FilterToDo /> */}
                    </Col>
                </Row>                
            </Container>
        );
    }
}

export default Body;