import React, { useState } from "react";

import './index.css'
import {default as parseJsx, domToReact} from 'html-react-parser'
// htmlreact parcer

const Tab = (props) => (
  <strong onClick={() => alert('Tab ' + props.children)}>{props.children}</strong>
)

const AddTabs = () => {

  const [tabs,setTabs] = useState('')
  const [song,setSong] = useState('')

  const addSong = (item) => {
    setSong(item)
  }

  const songHtml = song.replace(/([ABCDEFGH][b#]?[m]?[\(]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7 \#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim 7|m\|maj7|m6|m7|m7b5|m9|m11|m13|maj|maj7|maj9|maj11|maj13|mb5|m|s us|sus2|sus4)?(\))?)(?=\s|\.|\)|-|\/)/gm ,(subStr) => (
    `<tab-component>${subStr}</tab-component>`
  ))

  const jsxParseOptions = {
    replace(domNode) {
      switch(domNode.name) {
        case "tab-component": 
        return (<Tab>
      {domToReact(domNode.children,jsxParseOptions)}
          </Tab>)
        ;
        default: return domNode
      }
    }
  }

  const songJsx = parseJsx(songHtml,jsxParseOptions)

    return (
        <div>
              <div className='main'> 
          <div className="main-content">
            <div className="main-content-block">
              <h1 className="main-content-header">Добавить подбор</h1>
              <button
              className='content-button-add'
              onClick={() => addSong(tabs)}
              >Добавить подбор</button>
              <h2>{tabs}</h2>
              <textarea 
              className='text-area'
              value={tabs}
              onChange={(event) => setTabs(event.target.value)}
              >

              </textarea>
              <div className="main-content-tabDemonstrator"
  
          ><pre>
            {songJsx}
              </pre>
              </div>
              </div>
            </div>
          </div>
      
        </div>
    )
}

export default AddTabs