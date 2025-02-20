import { useState, useEffect } from "react";

const MainBody = ()  => {
  /**
   * Challenge: move the hardcoded meme info into React
   * state. Use an object with `topText`, `bottomText`,
   * and `image` properties, and set the initial values to
   * the ones hardcoded below.
   */

  const [meme, setMeme] = useState({
      topText: "One does not simply",
      bottomText: "Walk into Mordor",
      image: "http://i.imgflip.com/1bij.jpg"
  });
  const [memesImgs, setMemesImgs] = useState([]);

  useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
          .then(response => response.json())
          .then(response => {
              const { memes } = response.data;
              // console.log(memes[0]);
              setMemesImgs(memes);
          });
  }, []);

  function handleChange(event) {
      const { name, value } = event.target;
      setMeme(prevMeme => {
          return {
              ...prevMeme,
              [name]: value
          };
      });
  }

  function getMemeImg() {
      const randNum = Math.floor(Math.random() * memesImgs.length);
      const randMemeImg = memesImgs[randNum].url;
      setMeme(prevMeme => {
          return {
              ...prevMeme,
              image: randMemeImg
          };
      });
  }
  
  return (
      <main>
          <div className="form">
              <label>Top Text
                  <input
                      type="text"
                      placeholder="One does not simply"
                      name="topText"
                      onChange={handleChange}
                      value={meme.topText}
                  />
              </label>

              <label>Bottom Text
                  <input
                      type="text"
                      placeholder="Walk into Mordor"
                      name="bottomText"
                      onChange={handleChange}
                      value={meme.bottomText}
                  />
              </label>
              <button onClick={getMemeImg}>Get a new meme image 🖼</button>
          </div>
          <div className="meme">
              <img src={meme.image} />
              <span className="top">{meme.topText}</span>
              <span className="bottom">{meme.bottomText}</span>
          </div>
      </main>
  );
}

export default MainBody;