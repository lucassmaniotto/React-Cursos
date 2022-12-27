import './index.css';

const Crew = (props) => {

    const cssPrimaryColor = { backgroundColor: props.secondaryColor };
    const cssSecondaryColor = { borderBottomColor: props.primaryColor };

    return (
        <section className="crew__section" style={cssPrimaryColor}>
            <h3 className="crew__title" style={cssSecondaryColor}>{props.name}</h3>
        </section>
    );

}

export default Crew;