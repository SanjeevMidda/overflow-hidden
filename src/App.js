import "./index.css";
import image from "./assets/one.jpg";
import imageTwo from "./assets/two.jpg";
import imageThree from "./assets/three.jpg";
import imageFour from "./assets/four.jpg";
import imageFive from "./assets/five.jpg";
import imageSix from "./assets/six.jpg";
import imageSeven from "./assets/seven.jpg";
import imageEight from "./assets/eight.jpg";
import imageNine from "./assets/nine.jpg";
import imageTen from "./assets/ten.jpg";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="topContent">
          <header>
            <div className="links">
              <h5>DAY</h5>
              <h5>NIGHT</h5>
              <h5>EN</h5>
            </div>
          </header>

          <div className="imageContainer">
            <img src={image} alt="" />
            <img src={imageTwo} alt="" />
            <img src={imageThree} alt="" />
            <img src={imageFour} alt="" />
            <img src={imageFive} alt="" />
            <img src={imageSix} alt="" />
            <img src={imageSeven} alt="" />
            <img src={imageEight} alt="" />
            <img src={imageNine} alt="" />
            <img src={imageTen} alt="" />
          </div>
        </div>

        <footer>
          <div className="links">
            <h4>one</h4>
            <h4>two</h4>
            <h4>three</h4>
          </div>
          <div className="mainTitle">
            <div className="title">
              <h1>motion.</h1>
              <h1>lotion.</h1>
              <h1>potion.</h1>
              <h1>notion.</h1>
            </div>

            <div className="numbers">
              <h2>1</h2>
              <h2>2</h2>
              <h2>3</h2>
              <h2>4</h2>
              <h2>5</h2>
              <h2>6</h2>
              <h2>7</h2>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
