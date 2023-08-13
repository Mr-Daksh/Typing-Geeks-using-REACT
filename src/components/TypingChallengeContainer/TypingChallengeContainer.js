import { TypingChallenge } from '../TypingChallenge/TypingChallenge';
import { ChallengeDetailsCard } from './../ChallengeDetailsCard/ChallengeDetailsCard'
import './TypingChallengeContainer.css';
import React from 'react'

export const TypingChallengeContainer = ({
    timeStarted, 
    userInput,
    handleKeyPress,
    timeRemaining,
    words,
    characters,
    mistakes,
    timerStarted,
    selectedParagraph
}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                {/* Words Typed */}
                { !timeStarted &&
                <div className="nodisplay">{timeStarted = 1}
                </div>
                }
                <ChallengeDetailsCard
                    cardName="Words"
                    cardValue={Math.ceil(((((characters - mistakes)/5)*60)/timeStarted))}
                />

                {/* Characters Typed */}
                <ChallengeDetailsCard
                    cardName="Characters"
                    cardValue={characters - mistakes}
                />

                {/* Mistakes */}
                <ChallengeDetailsCard
                    cardName="Mistakes"
                    cardValue={mistakes}
                />
            </div>

            {/* Typing Challenge */}
            <div className="type-challenge-cont">
                <TypingChallenge
                userInput={userInput}
                    timerStarted={timerStarted}
                    timeRemaining={timeRemaining}
                    handleKeyPress={handleKeyPress}
                    selectedParagraph={selectedParagraph}
                />
            </div>
        </div>
    )
}