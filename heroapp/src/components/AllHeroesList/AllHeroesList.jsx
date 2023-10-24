import { connect } from 'react-redux';
import { getHeroes, getBoolFetching, getAllHeroes } from "../../redux/allHeroes-reducer";
import { useEffect } from 'react';
import Card from "../Card/Card"

{/* <Card>
    <Card.Body>
      <Card.Title>Title</Card.Title>
      <Card.Text>Text</Card.Text>
    </Card.Body>
  </Card> */}

// 
//props.heroes[0]?.name

function AllHeroesList (props) {

    useEffect(()=> {
        props.getHeroes()
    }, [])

    return (<div className="allHeroesList">
        {console.log(props.heroes.map((hero)=> {
            return (<Card>
                <Card.Body>
                    <Card.Name>{hero.name}</Card.Name>
                    <Card.Universe>{hero.universe}</Card.Universe>
                </Card.Body>
            </Card>)
        }))}
        {props.isFetching ? <>Loader</>:<ul>{props.heroes.map((hero)=> {
            return (<Card>
                <Card.Body>
                    <Card.Name>{hero.name}</Card.Name>
                    <Card.Universe>{hero.universe}</Card.Universe>
                </Card.Body>
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