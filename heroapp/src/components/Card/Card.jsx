import React from 'react';

const Body = (props) => <div className="card__body">{props.children}</div>;

const Name = (props) => <h2 className="card__name">{props.children}</h2>;

const Universe = (props) => <p className="card__universe">{props.children}</p>;

const AlterEgo = (props) => <p className="card__alterEgo">{props.children}</p>;

const Occupation = (props) => <p className="card__occupation">{props.children}</p>;

const Img = (props) => <p className="card__imgWrap">{props.children}</p>;

const HeroProgressBar = (props) => <div className="card__progressBar">{props.children}</div>;
export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    static Body = Body;
    static Name = Name;
    static Universe = Universe;
    static AlterEgo = AlterEgo;
    static Occupation = Occupation;
    static Img = Img;
    static HeroProgressBar = HeroProgressBar;

    render() {
        return (
        <li className="card">{this.props.children}</li>
        )    
    }
}