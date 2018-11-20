import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
              <img src={campus.imageUrl} />

              <NavLink to={`/campuses/${campus.id}`}>{campus.name}</NavLink>
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
  mapStateToProps,
  mapDispatchToProps
)(CampusList);

export default connectedCampusList;
