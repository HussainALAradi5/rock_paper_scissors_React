import './card.css'

const Card = ({ image, onClick, name, selected }) => {
  return (
    <div className={`card ${selected ? 'selected' : ''}`} onClick={onClick}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default Card
