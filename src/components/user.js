import * as React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import posed, { PoseGroup } from 'react-pose';
import { fetchAcceptedUser, fetchRejectedUser } from '../redux/actions/index';
import { connect } from "react-redux";
import { MdClear, MdDone } from 'react-icons/md';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isVisible: true };

        this.onConnectClick = this.onConnectClick.bind(this);
        this.onDeclineClick = this.onDeclineClick.bind(this);
    }

    onConnectClick(value){
        
        this.props.onConnectDispach( value );
        //store.dispatch( fetchAcceptedUser( value ) );
        
        this.setState({
            isVisible: !this.state.isVisible
        });
    }

    onDeclineClick(value){

        this.props.onDeclineDispach( value );
        // store.dispatch( fetchRejectedUser( value ) );

        this.setState({
            isVisible: !this.state.isVisible
        });
    }

    render() {
        const { isVisible } = this.state;
        const { user } = this.props;

        const CardModal = posed.div({
            enter: { 
                opacity: 1,                
            },
            exit: {                                
                x: 50,
                opacity: 0,
                transition: { duration: 300 }
            }
          });

        return (
            <PoseGroup  >
                {isVisible && [
                <CardModal key="modal"  pose={ isVisible ? "enter" : "exit"} >
                    <Card className="user-card" >
                        <CardBody className="text-center" >
                        <CardImg src={ user.picture.large } alt={`${user.name.first} ${user.name.last}`} />
                            <CardTitle>{ user.name.first } { user.name.last } <span className="yrs-span" >({`${user.dob.age}yrs`})</span>
                            </CardTitle>
                            <CardText>{`  ${user.location.street} ${user.location.city} 
                                ${user.location.state} ${user.location.postcode}
                            `}</CardText>
                            <Button onClick={(e) => this.onConnectClick(user)} color="success"><MdDone /> Connect</Button>{' '}
                            <Button onClick={(e) => this.onDeclineClick(user)} color="secondary"><MdClear />  Decline</Button>
                        </CardBody>
                    </Card>
                </CardModal>
                ]}
            </PoseGroup>
        );
    }
}


const mapDispachToProps = dispatch => {
    return {
      onConnectDispach: (value) => dispatch( fetchAcceptedUser(value) ),
      onDeclineDispach: (value) => dispatch( fetchRejectedUser(value) )
    };
};

export default connect(
    null,
    mapDispachToProps
)(User);