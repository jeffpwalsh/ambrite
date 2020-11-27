import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import data from './data/data.json';
import geo from './data/geo.json';
import Menu from './components/Menu';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

import './palettelist.css';
import './App.css';

// ========== GLOBAL STATE FROM CONTEXT API
export const DATA_SET = React.createContext();

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    //MAPPED THROUGH THE GLOBAL STATE DATASETS AND CREATED AN OBJECT ENTRY FOR BOTH.

    const Meta = data.map((map) => map);
    const Meta2 = Object.entries(Meta);
    const metaData = data.map((map) => map.meta);
    const metaData2 = Object.entries(metaData);
    const ipv4Data = geo.map((ipv4) => ipv4.ipv4);
    const ipv4Data2 = Object.entries(ipv4Data);

    //DEV LOGS
    // console.log(ipv4Data2);
    // console.log(Meta);
    // console.log(metaData2);
    // console.log(Meta2);
    // console.log(metaData);
    // console.log(ipv4Data);

    let newArray = [];

    //I TOOK THE IPV4 PROPERTY VALUE AND MATCHED THE META DATA PROPERTY STRING FIELD.
    //I PUSHED THE "MATCH" TO A NEW ARRAY WITH THE CORRECT INDEX/SEQUENCE FOR THE DATA.JSON DATA-SET.
    //I UTILISED THIS NEW MERGED DATA SET FOR ALL CHALLENGES
    //I'VE COMMENTED OUT LOGS PURELY FOR PERFORMANCE. CODE WILL RUN IF YOU CHOOSE TO UNCOMMENT TO VIEW LOGS

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < metaData.length; j++)
        if (metaData2[j][1].includes(ipv4Data2[i][1])) {
          newArray.push(Meta[j]);

          //THESE LOGS WILL SHOW LINE FOR LINE THE SORTING ALGO FIND ITS CORRESPONDING MATCH
          // console.log(
          //   `True @ metData index ${metaData2[j]} : ipv4 index ${ipv4Data2[i]} `
          // );
        } else {
          // console.log(
          //   `Negative @ metData index ${metaData2[j]} ||000000|| ipv4 index ${ipv4Data2[i]} `
          // );
        }
      // console.log(`End of ${i} loop`);
    }
    const arr1 = newArray;
    const arr2 = geo;

    //========= THIS MERGES THE TWO ARRAYS IN ORDER OF CORRESPONDING CORRECT PROPERTIES
    const arr3 = arr1.map((item, i) => Object.assign({}, item, arr2[i]));
    setPosts(arr3.map((item) => item));
    console.log(arr3.length);
  }, []);

  return (
    <DATA_SET.Provider value={posts}>
      <Router>
        <div className='App'>
          <Menu
            btn1='Challenge 1'
            btn2='Challenge 2 '
            btn3='Challenge 3'
            title='Ambrite Test'
            icon='fas fa-3x fa-laptop-code'
          />
          <Route exact path='/page1' component={Page1} />
          <Route exact path='/page2' component={Page2} />
          <Route exact path='/page3' component={Page3} />
        </div>
      </Router>
    </DATA_SET.Provider>
  );
}

export default App;
