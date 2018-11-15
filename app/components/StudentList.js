import React from 'react';
import { Link } from 'react-router-dom';

class StudentList extends React.Component {
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

export default StudentList;
