import React, { FC, useState } from 'react'
import { Swipeable } from 'react-swipeable'
import { RegelSett } from './RegelSett'
import '../regler.css'

const Regler: FC = () => {
  const [valgtRunde, setValgtRunde] = useState(0)
  const regel = RegelSett[valgtRunde]

  const gåTilNesteRunde = () => {
    if (valgtRunde !== 6) setValgtRunde(valgtRunde + 1)
  }

  const gåTilForrigeRunde = () => {
    if (valgtRunde !== 0) setValgtRunde(valgtRunde - 1)
  }

  return (
    <Swipeable
      onSwipedRight={() => gåTilForrigeRunde()}
      onSwipedLeft={() => gåTilNesteRunde()}
      style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <i
          className='material-icons'
          onClick={gåTilForrigeRunde}
          style={{ fontSize: '48px', color: valgtRunde === 0 ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 1)' }}>
          navigate_before
        </i>
      </div>
      <div style={{ width: '80%' }}>
        <h2 style={{ textAlign: 'center' }}>Runde {regel.rundeNummer}</h2>
        <ul className='regelSettListe'>
          <li>
            <h3>Antall tress: </h3> <p>{regel.antallTress}</p>
          </li>
          <li>
            <h3>Antall rams: </h3> <p>{regel.antallRams}</p>
          </li>
          <li>
            <h3>Antall kort: </h3> <p>{regel.antallKort}</p>
          </li>
        </ul>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <i
          className='material-icons'
          onClick={gåTilNesteRunde}
          style={{ fontSize: '48px', color: valgtRunde === 6 ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 1)' }}>
          navigate_next
        </i>
      </div>
    </Swipeable>
  )
}

export default Regler