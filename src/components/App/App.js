import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import RootTable from '../../containers/RootTable';

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="app__header">
                    <img src={logo} className="app__logo" alt="logo" />
                    <h1 className="app__title">Ataccama Test Task</h1>
                </header>
                <main className="app__content">
                  <RootTable />
                </main>
            </div>
        );
    }
}

export default App;
