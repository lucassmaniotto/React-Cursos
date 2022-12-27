import './index.css';

const Card = ({name, image, charge}) => {
  return (<div className="card__wrapper">
    <div className="card__header" style={{ backgroundColor: "black"}}>
        <img src={image} alt={name} className='card__img'/>
    </div>
    <div className='card__footer'>
        <h4 className='card__name'>{name}</h4>
        <h5 className='card_charge'>{charge}</h5>
    </div>
  </div>
  )
}

export default Card;