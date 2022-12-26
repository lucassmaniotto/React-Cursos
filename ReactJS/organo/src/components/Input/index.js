import './index.css';

const Input = (props) => {
    return(
        <div className="input__content">
            <label className="input__label">{props.label}</label>
            <input className="input__data" placeholder={props.placeholder} required={props.required}/>
        </div>
    )
}

export default Input;