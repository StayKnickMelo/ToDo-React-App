import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';



// components
import Nav from './components/Nav';
import Form from './components/Form';
import List from './components/List';
import Alert from './components/Alert';
import About from './components/About';

// Provider
import ToDoState from './context/TodoState';

function App() {
  return (
    <ToDoState>
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path ='/' render={()=>  {
              return (
              <Fragment>
                <Alert />
                <Form />
                <List />
              </Fragment>
            )
            }}/>
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    </ToDoState>
  );
}

export default App;