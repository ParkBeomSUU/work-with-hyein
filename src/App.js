import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth } from './pages';
import MenuShow from './MenuContents/MenuShow';


class App extends Component {
    render() {
        return (
            <div>
              
                <Route path="/auth" component={Auth}/>
                <Route path="/menu" component={MenuShow} />
                <Route exact path="/" component={Home}/>
            </div>
        );
    }
}

export default App;
