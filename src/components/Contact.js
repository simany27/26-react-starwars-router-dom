import React from 'react';
import '../css_modules/contacts.module.css';
import {base_url, periodMonth, version} from "../utils/Constants";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: ['wait...']
        };
    }

    fillPlanets(url) {
        fetch(url)
            .then(response => response.json())
            .then(json => json.map(item => item.name))
            .then(planets => {
                this.setState({planets});
                let info = {
                    listPlanets: planets,
                    time: Date.now()
                };
                localStorage.setItem('planets', JSON.stringify(info));
            });
    }

    componentDidMount() {
        let planets = JSON.parse(localStorage.getItem('planets'));
        if (!planets || (Date.now() - planets.time) > periodMonth) {
            this.fillPlanets(`${base_url}${version}/planets`);
        } else {
            this.setState({planets: planets.listPlanets});
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <label>First Name</label>
                    <input type="text" name="firstname" placeholder="Your name.."/>
                    <label>Planet</label>
                    <select name="planet">{
                        this.state.planets.map((item, index) => <option value={item} key={index}>{item}</option>)
                    }
                    </select>
                    <label>Subject</label>
                    <textarea name="subject" placeholder="Write something.."/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Contact;