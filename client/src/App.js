import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";
import NotFound from "./components/not-found";
import MovieForm from "./components/movieForm";
import Login from "./components/login";
import Register from "./components/register";
import Try from "./components/try";
import "react-toastify/dist/ReactToastify.css";
import React, { Component } from "react";
import Logout from "./components/common/logout";
import auth from "./services/authService";
import ProtectedRoute from "./components/common/protectedRoute";
import ContactUs from "./components/contactus";
import About from "./components/about";
class App extends Component {
  state = {};
  //navbar main nam show krany ky loye token ko decode karna ha or pas in navbar
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <div className="abc">
        <ToastContainer />
        <Navbar user={user} />
        <main className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={user} />}
            />
            <Route path="/try" component={Try} />
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
