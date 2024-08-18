import './card.css'

const Card = ({ image, onClick, name }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default Card
