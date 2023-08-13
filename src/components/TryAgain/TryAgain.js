import './TryAgain.css';
// import image_right from "../images/rocket1.jpg";
import tst_over from "../images/tst-over.jpg"

export const TryAgain = ({
    startAgain,
    words,
    characters,
    mistakes
}) => {
    return (
        <div>
            <div className="try-again-container">
                <img src={tst_over} alt="a colourfull image" className="tryagain-img"></img>
                <div className="result-container">
                    <p><b>Characters:</b> {characters}</p>
                    <p><b>Mistakes:</b> {mistakes}</p>
                    <p><b>Speed</b> {words} wpm</p>
                </div>
                <button onClick={startAgain} className="start-again-btn">
                    Start Again
                </button>
            </div>
        </div>

    )
}


{/* <h1>Test Results</h1>

<div className="result-container">
    <p><b>Characters:</b> {characters}</p>
    <p><b>Mistakes:</b> {mistakes}</p>
    <p><b>Speed</b> {words} wpm</p>
</div>

<button onClick={startAgain} className="start-again-btn">
    Start Again
</button> */}