// import logo from './logo.svg';
import './App.css';
import React from "react"
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {Redirect, withRouter} from "react-router";
import Preloader from "./components/Common/Preloader/Preloader";
import {initializeFull} from "./redux/app-reducer";

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeFull()
    }
    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className="full-screen">

                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <React.Suspense fallback={<div> <Preloader/> </div>}>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                        </React.Suspense>
                        <Route path="/login" render={() => <Login/>}/>
                        <Route exact path="/" render={() => <Login/>}><Redirect from="/" to="/profile"/></Route>
                    </div>
                </div>

            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeFull}))
(App)
