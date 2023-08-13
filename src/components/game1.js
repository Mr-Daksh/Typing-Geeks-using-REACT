import React from 'react'
import Navbar from "./navbar";
import SideNav from "./sidenav";
import Footer from "./footer";
import MainFeature from "./MainFeature";
import Coming from "./coming";
import Documentary from "./documentary";
import Keyboardlayout from "./key-layout";
import Fact from "./fact";
import Contact from './contact';

class Game1 extends React.Component {

    constructor() {
        super();

        this.state = {
            seconds: 10,
            currentWord: '',
            message: '',
            wordInput: '',
            high: 0,
            highscore: localStorage.getItem('high'),
            currentscore: 0,
            isPlaying: true,
            time: 10,
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
                time: 10,
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
            <Navbar />
            <SideNav />
            <div className="app-container">
                <h1>Word Beater</h1>
                <div>
                    <h2>Type the given word within
                        <span>{this.state.seconds}</span>
                        seconds:
                    </h2>

                    <button type="button" onClick={() => this.init()}>Start Game</button>
                    <h2>High Score:<span>{this.state.highscore}</span></h2>
                    <h2>{this.state.currentWord}</h2>
                    <input type="text" id="word-input" onChange={e => this.startMatch(e.target.value)} placeholder="Start Typing..." autoFocus></input>
                    <br></br>
                    <br></br>
                    <h4>{this.state.message}</h4>
                </div>

                <div>
                    <h3>Time Left:<span>{this.state.time}</span> &nbsp;
                        &nbsp; &nbsp; &nbsp; Score:<span>{this.state.currentscore}</span></h3>
                    <button type="button" onClick={() => this.removeScore()}>Remove High score</button>
                </div>

                <div>
                    <h5>Instructions</h5>
                    <p>Type each word in the given amount of seconds to score. To play again, just type the current word. Your score
                        will reset</p>
                </div>

            </div>
            <MainFeature />
            <Coming />
            <Fact />
            <Contact />
            <Footer />
            </>
        )
    }
}

export default Game1;
