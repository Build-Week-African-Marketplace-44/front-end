import React from 'react';


const persons = [
    {
        id : 0,
        img_URL : "https://ca.slack-edge.com/ESZCHB482-W019Y5FLC3A-c9b4d1f37a1e-512",
        name : "Matthew Serwer",
        about : "Some info",
    },
    {
        id : 1,
        img_URL : "https://ca.slack-edge.com/ESZCHB482-W0196UMPM5K-9cc66be6487e-512",
        name : "Brian AbeytaPratt",
        about : "Some info",
    },
    {
        id : 2,
        img_URL : "https://ca.slack-edge.com/ESZCHB482-W01AXMMC9GA-5a0e89f9ccac-512",
        name : "Justin Benz",
        about : "Some info",
    },
    {
        id : 3,
        img_URL : "https://ca.slack-edge.com/ESZCHB482-W01B3T2GSN8-e69be997f2d1-512",
        name : "Iaroslav Mokroguz",
        about : "Some info",
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
