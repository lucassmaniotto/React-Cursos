import './index.css';
import Card from "../Card";

const Crew = (props) => {

    const cssPrimaryColor = { backgroundColor: props.secondaryColor };
    const cssSecondaryColor = { borderBottomColor: props.primaryColor };

    return (
        <section className="crew__section" style={cssPrimaryColor}>
            <h3 className="crew__title" style={cssSecondaryColor}>{props.name}</h3>
            <div className="crew__cards">
                {props.users.map(user => <Card name={user.name} charge={user.charge} image={user.image}/>)}
            </div>
        </section>
    );

}

export default Crew;