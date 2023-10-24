import { connect } from 'react-redux';
import { getHeroes, getBoolFetching, getAllHeroes, likeHero } from "../../redux/allHeroes-reducer";
import { useEffect } from 'react';
import Card from "../Card/Card";
import Img from '../Img/Img';

//props.heroes[0]?.name

function AllHeroesList (props) {

    useEffect(()=> {
        props.getHeroes()
    }, [])



    return (<div className="allHeroesList">
        {console.log(likeHero(1))}
        {props.isFetching ? <>Loader</>:<ul className="allHeroesList__cardsWrap">{props.heroes.map((hero)=> {
            return (<Card key={hero.id}>
                <Card.Body>
                    <Card.Name>Name: {hero.name}</Card.Name>
                    {hero.biography.fullName === ""? null : <Card.FullName>Full name: {hero.biography.fullName}</Card.FullName>}
                    {hero.work.occupation === "-"? null : <Card.Occupation>Occupation: {hero.work.occupation}</Card.Occupation>}
                    <Card.Img>
                        <Img src={hero.images.md} alt={hero.name}></Img>
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