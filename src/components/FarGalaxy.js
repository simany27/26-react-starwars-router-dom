import React from 'react';
import styles from '../css_modules/fargalaxy.module.css';
import {base_url, version} from "../utils/Constants";

class FarGalaxy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            this.setState({
                isLoading: false,
                opening_crawl
            });
        } else {
            const episode = Math.floor(Math.random() * 6) + 1;
            fetch(`${base_url}${version}/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        isLoading: false,
                        opening_crawl: data.opening_crawl
                    });
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                })
        }
    }

    render() {
        const text = this.state.isLoading ? 'Loading...' : this.state.opening_crawl;
        return (
            <p className={styles.farGalaxy}>{text}</p>
        );
    }
}

export default FarGalaxy;