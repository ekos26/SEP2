import React from 'react';
import { Link } from 'react-router-dom';
import { fetchingStudents } from '../reducers/studentsReducer';
import { connect } from 'react-redux';

class StudentList extends React.Component {
  componentDidMount() {
    this.props.fetchingAllStudents();
  }

  render() {
    let students = this.props.students;
    return (
      <div>
        <h2>List of Students</h2>
        <ul>
          {students.map(student => (
            <li key={student.id}>
              <Link to={`/students/${student.id}`}>
                {`${student.firstName} ${student.lastName}`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.students,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingAllStudents: () => dispatch(fetchingStudents()),
  };
};

const connectedStudentList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList);

export default connectedStudentList;
