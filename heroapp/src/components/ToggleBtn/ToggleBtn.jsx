import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { setShowLikedGeroes, setShowAllGeroes } from '../../redux/UI-reducer';

const ToggleBtn = (props) => {

    const dispatch = useDispatch();

    const isOnlyLikedShowen = useSelector((state) => {
        const isOnlyLikedShowen = state.UI.isOnlyLikedShowen;
        console.log(isOnlyLikedShowen);
        return isOnlyLikedShowen;
    });

    return <button className='App__btn'>
        {isOnlyLikedShowen ? <Link className='App__link' to="/heroCards" onClick={() => {dispatch(setShowAllGeroes(false))}}>Look all heroes</Link> : <Link className='App__link' to="/likedheroes" onClick={() => {dispatch(setShowLikedGeroes(true))}}>Look my favorite heroes</Link>}
        </button>
}

export default ToggleBtn;