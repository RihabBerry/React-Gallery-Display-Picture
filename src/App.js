import './App.css';
import Container from './Components/Container/Container';
import
{
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

function App()
{
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path='/' render={() => <Redirect to={"/search"} />} />
          <Route exact path="/search" component={Container} />
          <Route path="/search/:query" component={Container} />
          <Route path="/cats" render={() => { return <Container query={'kittens'} /> }} />
          <Route path="/dogs" render={() => { return <Container query={'puppys'} /> }} />
          <Route path="/birds" render={() => { return <Container query={'birds'} /> }} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
