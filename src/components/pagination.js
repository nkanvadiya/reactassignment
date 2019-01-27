import React from 'react';
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { fetchUsers } from '../redux/middleware/users';
import { bindActionCreators } from 'redux';

class GetPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
 
  handlePageChange(pageNumber) {

    this.props.fetchUsers( pageNumber );

    this.setState({activePage: pageNumber});
  }
 
  render() {
    return (
      <div className="pagination-container">
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => { 
    return bindActionCreators({
    fetchUsers,
  }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(GetPagination);