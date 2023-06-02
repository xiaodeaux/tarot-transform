import { useState } from 'preact/hooks'
import './app.css'

import TarotCard from './TarotCard'

// get a list of all the paths to the images in the tarot-images folder in the assets folder
// const cardImagesImport = import.meta.glob('./tarot-images/*.jpg')
const cardImagesImport = import.meta.glob('./tarot-images/*.jpg', {
  import: 'default',
  eager: true,
})
const cardImages = Object.values(cardImagesImport)

// const cardImages = Object.keys(cardImagesImport).map(
//   (path) => new URL(path, import.meta.url).href
// )
// console.log(cardImagesImport)

// create an object with the card names and the value corresponding to the element in the cardImages array
// the first 14 elements in the cardImages array are the cups, the next 14 are pentacles, the next 21 are the major arcana, the next 14 are the swords, and the last 14 are the wands
const cardName = {
  'Ace of Cups': cardImages[0],
  'Two of Cups': cardImages[1],
  'Three of Cups': cardImages[2],
  'Four of Cups': cardImages[3],
  'Five of Cups': cardImages[4],
  'Six of Cups': cardImages[5],
  'Seven of Cups': cardImages[6],
  'Eight of Cups': cardImages[7],
  'Nine of Cups': cardImages[8],
  'Ten of Cups': cardImages[9],
  'Page of Cups': cardImages[10],
  'Knight of Cups': cardImages[11],
  'Queen of Cups': cardImages[12],
  'King of Cups': cardImages[13],
  'Ace of Pentacles': cardImages[14],
  'Two of Pentacles': cardImages[15],
  'Three of Pentacles': cardImages[16],
  'Four of Pentacles': cardImages[17],
  'Five of Pentacles': cardImages[18],
  'Six of Pentacles': cardImages[19],
  'Seven of Pentacles': cardImages[20],
  'Eight of Pentacles': cardImages[21],
  'Nine of Pentacles': cardImages[22],
  'Ten of Pentacles': cardImages[23],
  'Page of Pentacles': cardImages[24],
  'Knight of Pentacles': cardImages[25],
  'Queen of Pentacles': cardImages[26],
  'King of Pentacles': cardImages[27],
  'The Fool': cardImages[28],
  'The Magician': cardImages[29],
  'The High Priestess': cardImages[30],
  'The Empress': cardImages[31],
  'The Emperor': cardImages[32],
  'The Hierophant': cardImages[33],
  'The Lovers': cardImages[34],
  'The Chariot': cardImages[35],
  'Strength': cardImages[36],
  'The Hermit': cardImages[37],
  'Wheel of Fortune': cardImages[38],
  'Justice': cardImages[39],
  'The Hanged Man': cardImages[40],
  'Death': cardImages[41],
  'Temperance': cardImages[42],
  'The Devil': cardImages[43],
  'The Tower': cardImages[44],
  'The Star': cardImages[45],
  'The Moon': cardImages[46],
  'The Sun': cardImages[47],
  'Judgement': cardImages[48],
  'The World': cardImages[49],
  'Ace of Swords': cardImages[50],
  'Two of Swords': cardImages[51],
  'Three of Swords': cardImages[52],
  'Four of Swords': cardImages[53],
  'Five of Swords': cardImages[54],
  'Six of Swords': cardImages[55],
  'Seven of Swords': cardImages[56],
  'Eight of Swords': cardImages[57],
  'Nine of Swords': cardImages[58],
  'Ten of Swords': cardImages[59],
  'Page of Swords': cardImages[60],
  'Knight of Swords': cardImages[61],
  'Queen of Swords': cardImages[62],
  'King of Swords': cardImages[63],
  'Ace of wands': cardImages[64],
  'Two of Wands': cardImages[65],
  'Three of Wands': cardImages[66],
  'Four of Wands': cardImages[67],
  'Five of Wands': cardImages[68],
  'Six of Wands': cardImages[69],
  'Seven of Wands': cardImages[70],
  'Eight of Wands': cardImages[71],
  'Nine of Wands': cardImages[72],
  'Ten of Wands': cardImages[73],
  'Page of Wands': cardImages[74],
  'Knight of Wands': cardImages[75],
  'Queen of Wands': cardImages[76],
  'King of Wands': cardImages[77],
}

const cardNameKeys = Object.keys(cardName)

export function App() {
  const [cardIndex, setCardIndex] = useState(0)

  return (
    <>
      <h1>Tarot Transform</h1>
      <div className="grid-container">
        <TarotCard url={cardName[cardNameKeys[0]]} name={cardNameKeys[0]} />
        <TarotCard url={cardName[cardNameKeys[1]]} name={cardNameKeys[1]} />
        <TarotCard url={cardName[cardNameKeys[2]]} name={cardNameKeys[2]} />
      </div>
      {/* show a TarotCard component that also has an element that displays the name of the cardNames key for the image. */}
      <br />
      <br />
      <TarotCard url={cardName[cardNameKeys[cardIndex]]} />
      {/* display the name of the cardNames key for the image above */}
      <p>{cardNameKeys[cardIndex]}</p>
      {/* show 2 buttons that can iterate forward and backward through the cardNames values  */}
      <button onClick={() => setCardIndex(cardIndex - 1)}>Previous</button>
      <button onClick={() => setCardIndex(cardIndex + 1)}>Next</button>
    </>
  )
}
