import { TypingChallengeContainer } from '../TypingChallengeContainer/TypingChallengeContainer'
import { TryAgain } from './../TryAgain/TryAgain'
import './TestContainer.css'

export const TestContainer = ({
    timeStarted,
    userInput,
    handleKeyPress,
    timeRemaining,
    startAgain,
    words,
    characters,
    mistakes,
    timerStarted,
    selectedParagraph
}) => {
    return (
        <div className="test-container">
            {/* Show the try again or start screen */}
            {
                timeRemaining > 0
                    ? <div className="typing-challenge-cont">
                        <TypingChallengeContainer
                        timeStarted={timeStarted}
                            userInput={userInput}
                            handleKeyPress={handleKeyPress}
                            timeRemaining={timeRemaining}
                            words={words}
                            characters={characters}
                            mistakes={mistakes}
                            timerStarted={timerStarted}
                            selectedParagraph={selectedParagraph}
                        />
                    </div>
                    : <div className="try-again-cont">
                        <TryAgain
                            startAgain={startAgain}
                            words={Math.ceil(((((characters - mistakes)/5)*60)/timeStarted))}
                            characters={characters - mistakes}
                            mistakes={mistakes}
                        />
                    </div>
            }
        </div>
    )
}