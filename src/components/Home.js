import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {defaultHero, friends} from "../utils/Constants";
import {Redirect} from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            existHero: true,
            hero: defaultHero
        }
    }

    getHero = () => {
        let existHero = true;
        let hero = this.props.match.params.hero || defaultHero;
        if (!friends.includes(hero)) {
            hero = defaultHero;
            existHero = false;
        }
        this.props.changeHero(hero);
        this.setState({existHero, hero: hero});
    }

    componentDidMount() {
        this.getHero();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.hero !== prevProps.match.params.hero){
            this.getHero();
        }
    }

    render() {
        if (this.state.existHero){
            return (
                <main className="clearfix">
                    <Hero hero={this.state.hero}/>
                    <DreamTeam hero={this.state.hero}/>
                    <FarGalaxy/>
                </main>
            );
        }else{
            return <Redirect to={`/error`}/>
        }

    }
}

export default Home;