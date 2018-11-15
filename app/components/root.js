import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CampusList from './CampusList';
import StudentList from './StudentList';
import connectedCampusList from './CampusList';

const Root = () => {
  return (
    <div>
      <nav>Welcome!</nav>
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <div>
          <Switch>
            <Route exact path="/campuses" component={connectedCampusList} />
            <Route exact path="/students" component={StudentList} />
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default Root;
