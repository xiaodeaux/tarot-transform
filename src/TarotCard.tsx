import './TarotCard.css'

const TarotCard = (props) => {
  return (
    <>
      <div>
        <img src={props.url} className="tarot-card" />
        {/* show the name of the card under the image */}
        <p className="tarot-name">{props.name}</p>
      </div>
    </>
  )
}

export default TarotCard
