import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Component } from 'react';

function Home(){
  return <h2> Halaman Home </h2>
}

function ListView(){
  return(
        <div>
            <h2> Semua Users </h2>
            <ul>
              <li><Link to='user/dadan'>Dadan</Link></li>
              <li><Link to='user/anwar'>Anwar</Link></li>
            </ul>
        </div>
          
        )
}

function DetailView({match}){
  return <h2> Ini Halaman {match.params.name} </h2>
}

function NoMatch(){
  return <h2> 404, halaman tidak ditemukan </h2>
}

class App extends Component{
 
  render (){
    
    return (

      <BrowserRouter>
        <div>
          <nav>
            <li> <Link to='/'> Home</Link> </li>
            <li> <Link to='/users'> User</Link> </li>
          </nav>

          <main>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/users' exact component={ListView}/>
              <Route path='/user/:name' exact component={DetailView}/>
              <Route component={NoMatch}/>

            </Switch>
          </main>

        </div>
      </BrowserRouter>

    );

  }
}


export default App;
