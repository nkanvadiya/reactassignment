import * as React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap';

export default class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;

        return (
                    <Card className="user-manage-card" >
                        <CardBody >
                        <Row>
                            <Col md={3}>
                                <CardImg src={ user.picture.medium } alt={`${user.name.first} ${user.name.last}`} />
                            </Col>
                            <Col md={9}>
                                <CardTitle>{ user.name.first } { user.name.last } <span className="yrs-span" >({`${user.dob.age}yrs`})</span>
                                </CardTitle>
                                <CardText>{`  ${user.location.street} ${user.location.city} 
                                    ${user.location.state} ${user.location.postcode}
                                `}</CardText>
                             </Col>
                            </Row>
                        </CardBody>
                    </Card>
        );
    }
}