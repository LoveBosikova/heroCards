import { connect, useDispatch } from 'react-redux';
import { getHeroes, getBoolFetching, getAllHeroes, setLikeHero } from "../../redux/allHeroes-reducer";
import { useEffect } from 'react';
import Card from "../Card/Card";
import Img from '../Img/Img';
import store from '../../redux/redux-store';

//props.heroes[0]?.name

function AllHeroesList (props) {

    useEffect(()=> {
        props.getHeroes()
    }, [])

    // {store.dispatch(setLikeHero(1))}

    return (<div className="allHeroesList">
        {props.isFetching ? <>Loader</>:<ul className="allHeroesList__cardsWrap">{props.heroes.map((hero)=> {
            return (<Card key={hero.id}>
                <Card.Body>
                    <Card.Name>Name: {hero.name}</Card.Name>
                    {hero.alterEgos === ""? null : <Card.FullName>Full name: {hero.alterEgos}</Card.FullName>}
                    {hero.occupation === "-"? null : <Card.Occupation>Occupation: {hero.occupation}</Card.Occupation>}
                    <Card.Img>
                        <Img src={hero.image} alt={hero.name}></Img>
                    </Card.Img>
                </Card.Body>
                <Card.ButtonsWrap>
                    <Card.Like isFavorite={hero.isFavorite}></Card.Like>
                    <Card.DeleteBtn></Card.DeleteBtn>
                </Card.ButtonsWrap>
            </Card>)
        })}</ul>}
    </div>)
}

let mapStateToProps = (state) => {
    return {
    heroes: getAllHeroes(state),
    isFetching: getBoolFetching(state),
    }
};

export default connect(mapStateToProps, { getHeroes })(AllHeroesList);