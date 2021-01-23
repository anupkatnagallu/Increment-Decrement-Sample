import Button from '../../components/UI/Button';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/actions/actions';

const Calculator = props => {

    const dispatch = useDispatch();

    const count = useSelector(state => {
        return state.count;
    });

    const incrementHandler = () => dispatch({type: actions.INCREMENT});
    const decrementHandler = () => dispatch({type: actions.DECREMENT});

    const disable = count === 0;
    
    return (
        <div>
            <p>{count}</p>
            <div>
                <Button disable={false} class='ButtonBlue' click={incrementHandler}>Increment</Button>
                <Button disable={disable} class='ButtonRed' click={decrementHandler}>Decrement</Button>
            </div>
        </div>
    )
}

export default Calculator;