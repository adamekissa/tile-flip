import { useState } from 'react';
import './App.css';
import { Tile } from './components/Tile.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Welcome to the tile flip Game</h3>
      <div className='card-container'>
        <table>
          <tr>
            <td><Tile text="Key" imoji="🔑" /> </td>
            <td><Tile text="Monkey" imoji="🐒" /></td>
            <td><Tile text="Horse" imoji="🐎" /> </td>
            <td><Tile text="Train" imoji="🚆" /></td>
            <td><Tile text="House" imoji="🏠" /></td>
            <td><Tile text="Ring" imoji="💍" /></td>
            <td><Tile text="Violin" imoji="🎻" /></td>
          </tr>
          <tr>
            <td><Tile text="Beetle" imoji="🪲" /></td>
            <td><Tile text="Sun" imoji="☀️" /> </td>
            <td><Tile text="Bicycle" imoji="🚲" /> </td>
            <td><Tile text="Cow" imoji="🐄" /></td>
            <td><Tile text="Glasses" imoji="👓" /></td>
            <td><Tile text="Pencil" imoji="✏️" /></td>
            <td><Tile text="Pencil" imoji="✏️" /></td>
          </tr>
        </table>



      </div>
    </>
  )
}

export default App
