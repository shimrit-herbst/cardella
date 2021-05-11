import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Board from './pages/Board';

function App() {
  return (
    <div className="app flex">
      <Router>
        <Switch>
          <Route path="/boards/:boardId" component={Board} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
