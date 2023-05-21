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
  'cups-ace': cardImages[0],
  'cups-two': cardImages[1],
  'cups-three': cardImages[2],
  'cups-four': cardImages[3],
  'cups-five': cardImages[4],
  'cups-six': cardImages[5],
  'cups-seven': cardImages[6],
  'cups-eight': cardImages[7],
  'cups-nine': cardImages[8],
  'cups-ten': cardImages[9],
  'cups-page': cardImages[10],
  'cups-knight': cardImages[11],
  'cups-queen': cardImages[12],
  'cups-king': cardImages[13],
  'pentacles-ace': cardImages[14],
  'pentacles-two': cardImages[15],
  'pentacles-three': cardImages[16],
  'pentacles-four': cardImages[17],
  'pentacles-five': cardImages[18],
  'pentacles-six': cardImages[19],
  'pentacles-seven': cardImages[20],
  'pentacles-eight': cardImages[21],
  'pentacles-nine': cardImages[22],
  'pentacles-ten': cardImages[23],
  'pentacles-page': cardImages[24],
  'pentacles-knight': cardImages[25],
  'pentacles-queen': cardImages[26],
  'pentacles-king': cardImages[27],
  'fool': cardImages[28],
  'magician': cardImages[29],
  'high-priestess': cardImages[30],
  'empress': cardImages[31],
  'emperor': cardImages[32],
  'hierophant': cardImages[33],
  'lovers': cardImages[34],
  'chariot': cardImages[35],
  'strength': cardImages[36],
  'hermit': cardImages[37],
  'wheel-of-fortune': cardImages[38],
  'justice': cardImages[39],
  'hanged-man': cardImages[40],
  'death': cardImages[41],
  'temperance': cardImages[42],
  'devil': cardImages[43],
  'tower': cardImages[44],
  'star': cardImages[45],
  'moon': cardImages[46],
  'sun': cardImages[47],
  'judgement': cardImages[48],
  'world': cardImages[49],
  'swords-ace': cardImages[50],
  'swords-two': cardImages[51],
  'swords-three': cardImages[52],
  'swords-four': cardImages[53],
  'swords-five': cardImages[54],
  'swords-six': cardImages[55],
  'swords-seven': cardImages[56],
  'swords-eight': cardImages[57],
  'swords-nine': cardImages[58],
  'swords-ten': cardImages[59],
  'swords-page': cardImages[60],
  'swords-knight': cardImages[61],
  'swords-queen': cardImages[62],
  'swords-king': cardImages[63],
  'wands-ace': cardImages[64],
  'wands-two': cardImages[65],
  'wands-three': cardImages[66],
  'wands-four': cardImages[67],
  'wands-five': cardImages[68],
  'wands-six': cardImages[69],
  'wands-seven': cardImages[70],
  'wands-eight': cardImages[71],
  'wands-nine': cardImages[72],
  'wands-ten': cardImages[73],
  'wands-page': cardImages[74],
  'wands-knight': cardImages[75],
  'wands-queen': cardImages[76],
  'wands-king': cardImages[77],
}

const cardNameKeys = Object.keys(cardName)

export function App() {
  const [cardIndex, setCardIndex] = useState(0)

  return (
    <>
      <h1>Tarot Transform</h1>
      <p>{cardImages[0]}</p>
      <TarotCard url={cardName['fool']} />
      <TarotCard url={cardImages[1]} />
      <TarotCard url={cardImages[2]} />
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
