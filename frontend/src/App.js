import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/User";
import axios from "axios";
import Footer from './components/Footer';
import Navbar from './components/Menu';


const DOMAIN = 'http://127.0.0.1:8000/api/'
const get_url = (url) => `${DOMAIN}${url}`


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarItems: [
        { name: 'Users', href: '/' },
        // {name: 'Todo', href: '/todo'},
      ],
      users: []
    }
  }

  componentDidMount() {
    axios.get(get_url('users/'))
      .then(response => {
        this.setState({ users: response.data })
      }).catch(error => console.log(error))
  }


  render() {
    return (
      <div>
        <header>
          <Navbar navbarItems={this.state.navbarItems} />
        </header>
        <main role="main" class="flex-shrink-0">
          <div className="container">
            <UserList users={this.state.users} />
          </div>
        </main>
        <Footer />
      </div>


    )
  }
}


export default App;
