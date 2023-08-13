import './TypingChallenge.css';
import React from 'react';
import Preview from './viewColor';


export const TypingChallenge = ({
    handleKeyPress,
    timeRemaining,
    timerStarted,
    selectedParagraph,
    userInput
}) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">Time Left: {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`} Sec</p>
                <p className="timer-info">{!timerStarted && 'Your test will begin as you type the forst letter.'}</p>
            </div>

            <div className="textarea-container">

                <div className="textarea-left">
                    <Preview text={selectedParagraph} userInput={userInput} />
                </div>
                <div className="textarea-right">
                    <textarea
                        autoFocus
                        onChange={e => handleKeyPress(e.target.value)}
                        className="textarea" id="quoteInput"
                        placeholder="Start typing here"
                    ></textarea>
                </div>
            </div>
        </div>
    )
}