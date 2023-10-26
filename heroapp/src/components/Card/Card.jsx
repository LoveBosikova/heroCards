import React from 'react';
import styles from './card.scss'

const Body = (props) => <div className="card__body">{props.children}</div>;

const Name = (props) => <h2 className="card__name">{props.children}</h2>;

const FullName = (props) => <p className="card__fullname">{props.children}</p>;

const AlterEgo = (props) => <p className="card__alterEgo">{props.children}</p>;

const Occupation = (props) => <p className="card__occupation">{props.children}</p>;

const Img = (props) => <p className="card__imgWrap">{props.children}</p>;

const HeroProgressBar = (props) => <div className="card__progressBar">{props.children}</div>;

const ButtonsWrap = (props) => <div className="card__btnsWrap">{props.children}</div>; 

const EmptyLike = (props) => {

    const emptyLikeSvg = <svg fill="#000000" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 51.997 51.997" xmlSpace="preserve">
            <g>
                <path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
            c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
            c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
            C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25
            c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826
            c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514
            c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z"/>
            </g>
        </svg>
    return (
        <button className="card__likeWrap" onClick={props.onClick}>{emptyLikeSvg}</button>
    )
} 


const FullLike = (props) => {
    const fullLikeSvg = <svg fill="#FF0000" height="40px" stroke='#FF0000' width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 51.997 51.997" xmlSpace="preserve">
        <g>
            <path fill="#FF0000" stroke='#FF0000' d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
            c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
            c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
            C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25
            c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826
            c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514
            c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z"/>
        </g>
    </svg>
    return (
        <button className="card__likeWrap" onClick={props.onClick}>{fullLikeSvg}</button>
    )
} 

const DeleteBtn = (props) => <button className="card__deleteWrap" onClick={props.onClick}>
    <svg className="card__delete" width="40px" height="40px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960 160h-291.2a160 160 0 0 0-313.6 0H64a32 32 0 0 0 0 64h896a32 32 0 0 0 0-64zM512 96a96 96 0 0 1 90.24 64h-180.48A96 96 0 0 1 512 96zM844.16 290.56a32 32 0 0 0-34.88 6.72A32 32 0 0 0 800 320a32 32 0 1 0 64 0 33.6 33.6 0 0 0-9.28-22.72 32 32 0 0 0-10.56-6.72zM832 416a32 32 0 0 0-32 32v96a32 32 0 0 0 64 0v-96a32 32 0 0 0-32-32zM832 640a32 32 0 0 0-32 32v224a32 32 0 0 1-32 32H256a32 32 0 0 1-32-32V320a32 32 0 0 0-64 0v576a96 96 0 0 0 96 96h512a96 96 0 0 0 96-96v-224a32 32 0 0 0-32-32z" fill="#231815" /><path d="M384 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM544 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM704 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0z" fill="#231815" /></svg>
</button>;

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    static Body = Body;
    static Name = Name;
    static FullName = FullName;
    static AlterEgo = AlterEgo;
    static Occupation = Occupation;
    static Img = Img;
    static HeroProgressBar = HeroProgressBar;
    static ButtonsWrap = ButtonsWrap;
    static EmptyLike = EmptyLike;
    static FullLike = FullLike;
    static DeleteBtn = DeleteBtn;

    render() {
        return (
        <li className="card">{this.props.children}</li>
        )    
    }
}