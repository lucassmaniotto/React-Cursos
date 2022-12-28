import "./index.css";

const HideFormButton = (props, { onClick }) => {
    return (
        (props.users.length > 0) ? <button className="hide-form-button" onClick={onClick}></button> : ''
    );
};

export default HideFormButton;