import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <div className="full-screen">
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                        store={props.store}
                    />}/>
                    <Route path="/dialogs" render={() => <DialogsContainer
                        store={props.store}
                    />}/>
                </div>
            </div>
        </div>
    );
}

export default App;
