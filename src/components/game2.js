import React from 'react';
import './game2.css';
import SideNav from './sidenav';
import Navbar from './navbar';
import Footer from './footer';
import Game2word from './Game2word'

class Game1 extends React.Component {

    constructor() {
        super();

        this.state = {
            seconds: 4,
            currentWord: '',
            message: '',
            wordInput: '',
            high: 0,
            highscore: localStorage.getItem('high'),
            currentscore: 0,
            isPlaying: true,
            time: 4,
            wordinput: '',
            words: [
                "hat",
                "river",
                "lucky",
                "statue",
                "generate",
                "stubborn",
                "cocktail",
                "runaway",
                "joke",
                "developer",
                "establishment",
                "hero",
                "javascript",
                "nutrition",
                "revolver",
                "echo",
                "siblings",
                "investigate",
                "horrendous",
                "symptom",
                "laughter",
                "magic",
                "master",
                "space",
                "definition"
            ]
        }
    }

    init() {
        const wordinput = document.querySelector('#word-input');
        this.setState({ wordinput: wordinput })
        this.showWord(this.state.words)
        setInterval(this.countdown, 1000);
        setInterval(this.checkstatus, 50)
    }

    removeScore() {
        window.localStorage.clear()
        this.setState({ highscore: 0 })
    }

    startMatch(wordInput) {
        if (wordInput === this.state.currentWord) {
            const randIndex = Math.floor(Math.random() * this.state.words.length);
            this.setState({
                message: "correct!!",
                wordInput: wordInput,
                currentWord: this.state.words[randIndex],
                isPlaying: true,
                time: 4,
                currentscore: this.state.currentscore + 1,
            });

            this.state.wordinput.value = '';

        }
        else {
            this.setState({
                message: '',
                wordInput: wordInput
            });
        }

        if (this.state.currentscore > localStorage.getItem('high', this.state.high)) {
            localStorage.setItem('high', this.state.currentscore)
            this.setState({
                highscore: localStorage.getItem('high')
            })
        }

    }


    showWord(words) {
        const randIndex = Math.floor(Math.random() * words.length);
        this.setState({ currentWord: words[randIndex] });
        <div></div>
    }

    countdown = () => {
        if (this.state.time > 0) {
            this.setState({
                time: this.state.time - 1
            })
        }
        else if (this.state.time === 0) {
            this.setState({
                isPlaying: false
            })
        }
    }

    checkstatus = () => {
        if (!this.state.isPlaying && this.state.time === 0) {
            if (this.state.currentscore > localStorage.getItem('high', this.state.high)) {
                localStorage.setItem('high', this.state.currentscore)
                this.setState({
                    highscore: localStorage.getItem('high')
                })
            }
            this.setState({
                message: "Game Over!!",
                currentscore: 0,
            });
        }
    }


    render() {
        return (
            <>
            <SideNav />
            <Navbar />
            <div className="app-container">
                {/* <h1>Choose a Customizable game from different modes available</h1> */}
                <div>
                    <div className="g-ess">
                    <h1>Word Beater</h1>
                        <h2>Type the given word within
                            <span>{this.state.seconds}</span>
                            seconds:
                        </h2>

                        <button type="button" on onClick={() => this.init()}>Start Game</button>
                    </div>
                    <div className="g1-cont">
                        <div className="display-area">
                            <Game2word name={this.state.currentWord} />
                            <input type="text" id="word-input" onChange={e => this.startMatch(e.target.value)} placeholder="Start Typing..." autoFocus></input>
                        </div>
                        <div className="scorecard">
                            <h2>High Score:<span>{this.state.highscore}</span></h2>
                            <h3>Your Score:<span>{this.state.currentscore}</span></h3>
                            <h3>Time Left:<span>{this.state.time}</span></h3>
                            <h4>{this.state.message}</h4>
                        </div>
                    </div>
                </div>

                <div className="inst">
                    <h5>Instructions</h5>
                    <p>Type each word in the given amount of seconds to score. To play again, just type the current word. Your score
                        will reset</p>
                </div>

            </div>
            <Footer />
            </>
        )
    }
}

export default Game1;

