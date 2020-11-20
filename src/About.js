import React from 'react';

import './style/About.css';


const persons = [
    {
        id : 0,
        img_URL : "https://ca.slack-edge.com/ESZCHB482-W019Y5FLC3A-c9b4d1f37a1e-512",
        name : "Matthew Serwer",
        about : "Matty, a student at Lambda, is considered by many to be the Ricardo Montalban of programming. Raised by chimpanzees in the Swiss Alps, he built his first computer out of twigs and yarn",
    },
    {
        id : 1,
        img_URL : "https://ca.slack-edge.com/ESZCHB482-W0196UMPM5K-9cc66be6487e-512",
        name : "Brian AbeytaPratt",
        about : "Brian Abeyta-Pratt is a module 3 student at Lambda School in the Full Stack Web Development track. For this project, he was responsible for creating the mystore page and mapping user items from the marketplace to the user's store, the profile page and routing the landing page and login page to the rest of the app.",
    },
    {
        id : 2,
        img_URL : "https://ca.slack-edge.com/ESZCHB482-W01AXMMC9GA-5a0e89f9ccac-512",
        name : "Justin Benz",
        about : "Some mystery person",
    },
    {
        id : 3,
        img_URL : "https://ca.slack-edge.com/ESZCHB482-W01B3T2GSN8-e69be997f2d1-512",
        name : "Iaroslav Mokroguz",
        about : "Iaro is a student at unit 2 (Lambda School), that want to be paid for what he have done ",
    },]


const EachPerson = props => {
    const {person} = props;
    return (
        <div className="about-person">
                    <div className="about-img">
                        <img src={person.img_URL} alt={`Person number ${person.id+1}`} />
                    </div>
                    <h1>{person.name}</h1>
                <div className="about-text">{person.about}</div>
        </div>
    )
}

const About = props => {
    return (
        <div className ="about-page">
            {persons.map(person => {
                return <EachPerson key={person.id} person={person}/>
            })}
        </div>
    )
}

export default About;
