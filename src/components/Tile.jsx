import { useState } from 'react'

function Tile(props) {
    const [flip, setFlip] = useState(false);

    function changeTile() {
        setFlip(!flip);
    }
    return (<div>
        <button onClick={changeTile} className='tile' >{flip ? props.text : props.imoji}</button>
    </div>)
}

export { Tile }