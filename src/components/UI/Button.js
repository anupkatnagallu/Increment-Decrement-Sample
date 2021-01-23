import classes from './Button.module.css';

const Button = props => {

    return (
        <button className={classes[props.class]} onClick={props.click} disabled={props.disable}>{props.children}</button>
    )
}

export default Button;