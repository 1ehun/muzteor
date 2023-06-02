import React, { useState } from "react";

import './index.css'
import { default as parseJsx, domToReact } from 'html-react-parser'
import { useDispatch } from "react-redux";
import { ADD_TABS } from "../../redux/actionTypes/addTabs";
import { addTabsAction } from "../../redux/actionCreator/addTabs";
// htmlreact parcer

const Tab = (props) => (
  <strong onClick={() => alert('Tab ' + props.children)}>{props.children}</strong>
);

const AddTabs = () => {
  const [artistName, setArtistName] = useState('');
  const [songName, setSongName] = useState('')
  const [tabs, setTabs] = useState('');
  const [song, setSong] = useState('');

  const dispatch = useDispatch()

  const addSong = (item) => {
    const addTabsItem = {
      artistName,
      songName,
      body: tabs,
      id: Date.now()
    }
    setSong(item)
    dispatch(addTabsAction(addTabsItem))
  };

  const songHtml = song.replace(
    /(\b(?:(?:A(?:b(?:[679+]|sus)?|m[67]?|[689]|maj7|dim|\+|sus)?)|(?:B(?:b(?:[679+]|sus|m[67]?|maj7|dim)?|m[67]?|[679+]|maj7|dim|sus)?)|(?:C(?:[679+]|m[67]?|maj7|dim|sus|#(?:m[67]?|dim)?)?)|(?:D(?:b(?:[679+]|maj7|sus)?|[679]|m[67]?|maj7|dim|\+|sus)?)|(?:E(?:b(?:[679+]|sus|m[67]?|maj7|dim)?|m[67]?|[679+]|maj7|dim|sus)?)|(?:F(?:[679+]|m[67]?|maj7|dim|sus|#(?:[79]|m[67]|dim)?)?)|(?:G(?:b(?:maj7|sus|[6+])?|[679+]|m[67]?|maj7|dim|sus|#(?:m[67]?|dim))?))(?=\s|$))/gm,
    (subStr) => `<tab-component>${subStr}</tab-component>`
  );
  

  const jsxParseOptions = {
    replace(domNode) {
      switch (domNode.name) {
        case "tab-component":
          return (
            <Tab>
              {domToReact(domNode.children, jsxParseOptions)}
            </Tab>
          );
        default: return domNode
      }
    }
  };

  const songJsx = parseJsx(songHtml, jsxParseOptions);

  return (
    <div>
      <div className='main'>
        <div className="main-content">
          <div className="main-content-block">
            <h1 className="main-content-header">Добавить подбор</h1>

            <div className='article-input-container'>
                    <input 
                    type="text"
                    className='article-input' 
                    placeholder='Название группы'
                    value={artistName}
                    onChange={(e) => setArtistName(e.target.value)}
                    ></input>
                     
                </div>

                <div className='article-input-container'>
                <input 
                    type="text"
                    className='article-input' 
                    placeholder='Песня'
                    value={songName}
                    onChange={(e) => setSongName(e.target.value)}
                    ></input>
                </div>



            <button
              className='content-button-add'
              onClick={() => addSong(tabs)}
            >
              Добавить подбор
            </button>
            <pre>{tabs}</pre>
            <textarea
              className='text-area'
              value={tabs}
              onChange={(event) => setTabs(event.target.value)}
            />
            <div className="main-content-tabDemonstrator">
              <pre>
                {songJsx}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTabs