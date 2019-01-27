import * as React from "react";
import User from "./user";
import PropTypes from 'prop-types';

export default class UserList extends React.Component {
    render() {

        return (
            <div>
                { 
                    this.props.users.toJS().results.map( function( user ){
                        return(
                            <User key={user.login.uuid} user={user} />
                        )
                    }, this )
                }                
            </div>
        );
    }
}

UserList.propTypes = {
    users: PropTypes.object.isRequired
};
