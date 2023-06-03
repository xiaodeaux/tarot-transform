import './TarotCard.css'

const TarotCard = (props) => {
  return (
    <>
      <div>
        {/* show the name of the card's function in the tarot spread */}
        <p className="tarot-function">{props.function}</p>
        <img src={props.url} className="tarot-card" />
        {/* show the name of the card under the image */}
        <p className="tarot-name">{props.name}</p>
      </div>
    </>
  )
}

export default TarotCard
