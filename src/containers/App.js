import React from 'react';
import './App.css'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [], 
            searchField: ''
        };
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event) {
        this.setState({
            searchField: event.target.value
        });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            return res.json();
        })
        .then(users => {
            this.setState({robots: users})
        });
    }

    render () {
        const filteredRobots = this.state.robots.filter((r) => {
            return r.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        if (!this.state.robots.length) {
            return <h1>Loading...</h1>
        }
        else return (
            <div className = 'tc'>
                <h1>RoboFriends</h1>
                <SearchBox change = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

