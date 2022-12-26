import './index.css';

const Select = (props) => {
    return (
        <div className="select__content">
            <label className="select__label">{props.label}</label>
            <select className="select__select" required={props.required}>
                {props.itens.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select;