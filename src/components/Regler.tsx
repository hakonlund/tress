import React, { FC, useState } from 'react'
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
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {valgtRunde !== 0 &&
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button className='toggleKnapp' onClick={gåTilForrigeRunde}>
            ←
          </button>
        </div>
      }
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
      {valgtRunde !== 6 &&
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button className='toggleKnapp' onClick={gåTilNesteRunde}>
            →
          </button>
        </div>
      }
    </div>
  )
}

export default Regler