import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";
import Header from './components/header';
import { connect } from "react-redux";
import { fetchUsers } from './redux/middleware/users';
import UserList from './components/userlist';
import { Row, Col } from 'reactstrap';
import GetPagination from './components/pagination';
import { Spinner } from 'reactstrap';
import ManagedUser from './components/userinfo/manageduser';

class App extends React.Component {

        constructor(props) {
            super(props);
        }

        componentWillMount() {
             this.props.dispatch(fetchUsers( 1 ));
        }
        
        render() {
                return (
                        <section>
                               <Header />
                               <div className="container">
                                <Row>   
                                        <Col md={1}>
                                                <GetPagination/>
                                        </Col>
                                        <Col md={7}>                                        
                                                { this.props.users.count() === 0 
                                                  || this.props.isFetching
                                                  ? <div><center><Spinner color="danger" />&nbsp;</center></div>
                                                  : <UserList users ={this.props.users}/> 
                                                }
                                        </Col>
                                        <Col md={4}>
                                                <ManagedUser />
                                        </Col>
                                </Row>
                               </div>
                        </section>
                );
        }
}

const mapStateToProps = (state) => {        
        return {
                users: state.getIn(["userReducers", "users" ]),
                isFetching : state.getIn(["userReducers", "isFetching" ])
        };
        
};

export default connect(
        mapStateToProps,
        null
)(App);