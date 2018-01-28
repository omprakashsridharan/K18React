import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Events from './components/Events'
import Workshops from './components/Workshops'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <nav>
                        <div>
                            <ul>
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="/workshops">Workshops</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <Route path="/events" component={Events} />
                    <Route path="/workshops" component={Workshops} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
