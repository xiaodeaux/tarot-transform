import './TarotCard.css'

let isReversed = false

// create a function that will turn the image upside with a 50% chance to represent that the tarot card is reversed
const randomRotation = () => {
  const random = Math.random()
  if (random < 0.5) {
    isReversed = true
    return 'rotate(180deg)'
  } else {
    isReversed = false
    return 'rotate(0deg)'
  }
}

// How do I use randomRotation
// <img src={props.url} className="tarot-card" style={{ transform: randomRotation() }} />

const TarotCard = (props) => {
  return (
    <>
      <div>
        {/* show the name of the card's function in the tarot spread */}
        <p className="tarot-function">{props.function}</p>
        <img
          src={props.url}
          className="tarot-card"
          style={{ transform: randomRotation() }}
        />
        {/* show the name of the card under the image */}
        <p className="tarot-name">
          {props.name}
          {isReversed ? ' (Reversed)' : ''}
        </p>
      </div>
    </>
  )
}

export default TarotCard
