import {useState, useEffect, useRef} from 'react'
import './MainArea.css'

export default function MainArea() {
  return (
    <div className='container-content'>
        <h2>Votre plume</h2>

        <form action="">
            <label htmlFor="title">Le titre</label>
            <input type="text" name="" id="title" />

            <label htmlFor="subtitle">Sous-titre</label>
            <input type="text" name="" id="title" />

            <label htmlFor="txtbody">Sous-titre</label>
            <textarea id="txtbody" placeholder='Votre texte ...'></textarea>

            <button>Enregistrer</button>
        </form>
    </div>
  )
}
