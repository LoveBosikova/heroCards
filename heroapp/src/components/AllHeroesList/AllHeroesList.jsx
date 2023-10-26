import { connect, useDispatch } from 'react-redux';
import { getHeroes, getBoolFetching, getAllHeroes, likeHero, dislikeHero, deleteHero } from "../../redux/allHeroes-reducer";
import { useEffect } from 'react';
import Card from "../Card/Card";
import Img from '../Img/Img';
import styles from './allheroeslist.scss'

function AllHeroesList (props) {

    useEffect(()=> {
        props.getHeroes()
    }, [])

    const dispatch = useDispatch();

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
                    {hero.isFavorite === true ? <Card.FullLike onClick={() => dispatch(dislikeHero(hero.id))}></Card.FullLike> : <Card.EmptyLike onClick={() => dispatch(likeHero(hero.id))}></Card.EmptyLike>}
                    <Card.DeleteBtn onClick={() => dispatch(deleteHero(hero.id))}></Card.DeleteBtn>
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