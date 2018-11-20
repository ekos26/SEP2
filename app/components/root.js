import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import connectedStudentList from './StudentList';
import connectedCampusList from './CampusList';

const Root = () => {
  return (
    <div>
      <nav>Welcome!</nav>
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <div>
          {/* <Switch>
            <Route path="/campuses" component={connectedCampusList} />
            <Route path="/students" component={connectedStudentList} />
          </Switch> */}
        </div>
      </main>
    </div>
  );
};

export default withRouter(Root);
