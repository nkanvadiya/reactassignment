import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import UserCard from './usercard';

class RejecteUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    //latest will show first
    let getusers = this.props.users.toJS();
    getusers = getusers.slice(0).reverse();

    return (
        <Row>
            <Col sm="12">
                {
                    getusers.map( function( user ){
                        return(
                            <UserCard key={user.login.uuid} user={user} />
                        )
                    }, this )
                }
            </Col>
        </Row>
    );
  }
}

const mapStateToProps = (state) => {
    return {
            users: state.getIn(["userReducers", "rejected" ])
    };
  };
  
  export default connect(
    mapStateToProps,
    null
  )(RejecteUser);