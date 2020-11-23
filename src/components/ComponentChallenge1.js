import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ComponentChallenge1() {
  const [posts, setPosts] = useState([]);
  const [items, setItems] = useState([]);
  const contentType = 'application/json; charset=UTF-8';
  const asnType = true;
  const randomChecker = Math.floor(Math.random() * posts.length + 1);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: 5,
      },
    ]);
  };

  const handleFetch = () => {
    function getDataFile1() {
      return axios.get('data.json');
    }

    function getDataFile2() {
      return axios.get('geo.json');
    }

    axios
      .all([getDataFile1(), getDataFile2()])
      .then(
        axios.spread(function (data1, data2) {
          console.log(data1.data);
          console.log(data2);
          setPosts(data1.data.[0])
          console.log([{ posts }]);
        })
      )
      .catch((err) => {
        console.log(err);
      }, []);
  };

  // const handleFetch = async () => {
  //   await axios
  //     .get('data.json')
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.statusText);
  //       console.log(res.headers['content-type']);
  //       setPosts(res.data);
  //       console.log(randomChecker)
  //     // console.log(typeof(res.data.[randomChecker].asn))
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   console.log('This is working');
  // };

  // useEffect(() => {

  //   axios.get('data.json')
  //   .then(res => {
  //     console.log(res)
  //     console.log(res.statusText)
  //     console.log(res.headers.['content-type'])
  //     setPosts(res.data)
  //     console.log(randomChecker)
  //     console.log(typeof(res.data.[randomChecker].asn))

  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }, [posts.length])

  return (
    <div>
      <button onClick={handleFetch}>Continue</button>
      <br />
      <button onClick={addItem}>Continue</button>
      <br />
      test
      {/* <ul>
        {posts.map((post) => {
          <li>{post.countrycode}</li>;
        })}
      </ul> */}
      {items.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
    </div>
  );
}

export default ComponentChallenge1;
