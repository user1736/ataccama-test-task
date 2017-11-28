import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import Table from './Table';

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="app__header">
                    <img src={logo} className="app__logo" alt="logo" />
                    <h1 className="App-title">Ataccama Test Task</h1>
                </header>
                <Table
                    className="app__table"
                    title="shiny_table"
                    columns={[
                        {
                            name: 'foo',
                            renderItem: item => item.foo,
                        },
                        {
                            name: 'bar',
                            renderItem: item => item.bar,
                        },
                    ]}
                    items={[
                        {
                            id: 1,
                            foo: 'foo',
                            bar: 'bar',
                        },
                        {
                            id: 2,
                            foo: 'foo',
                            bar: 'bar',
                        },
                    ]}
                />
            </div>
        );
    }
}

export default App;
