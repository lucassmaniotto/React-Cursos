import './index.css';

const Input = (props) => {
    return(
        <div className="input__content">
            <label htmlFor="input" className="input__label">{props.label}</label>
            <input className="input__data" placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;