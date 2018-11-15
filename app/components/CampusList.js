import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchingCampuses } from '../reducers/campusesReducer';
import { connect } from 'react-redux';

class CampusList extends Component {
  componentDidMount() {
    this.props.fetchingAllCampuses();
  }

  render() {
    let campuses = this.props.campuses;
    return (
      <div>
        <h2>List of Campuses</h2>
        <ul>
          {campuses.map(campus => (
            <li key={campus.id}>
              <a href="#">
                <img src={campus.imageUrl} />
              </a>
              <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingAllCampuses: () => dispatch(fetchingCampuses()),
  };
};

const connectedCampusList = connect(
  mapDispatchToProps,
  mapStateToProps
)(CampusList);

export default connectedCampusList;
