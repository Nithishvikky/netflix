import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { HomePages } from './Home/HomePages';
import { Footer } from './components/footer/Footer';
import { SinglePage } from './components/watch/SinglePage';

function App() {
  return (
    <>
    <Router>
     <Header/>
      <Switch>
        <Route exact path='/' component={HomePages}/>
        <Route exact path='/singlePage/:id' component={SinglePage}/>
      </Switch>
    </Router>
      <Footer/>
    </>
  );
}

export default App;
