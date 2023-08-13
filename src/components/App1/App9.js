import React from 'react'

import { TestContainer } from "./../TestContainer/TestContainer";

import { typingTestData } from './../../data/sourceLorem'
import { randomElementSelector } from '../../helper/randomSelector';
import './App1.css';
import { testDetailsCalculator } from '../../helper/testDetailsCalculator';
import Navbar from "../navbar";
import Footer from "../footer";
import MainFeature from "../MainFeature";
import Coming from "../coming";
import Documentary from "../documentary";
import Keyboardlayout from "../key-layout";
import Fact from "../fact";
import SideNav from '../sidenav';

const defaultState = {
	timerStarted: false,
	timeRemaining: 300,
	userInput: '',
	timeStarted: 0,
	detailsData: {
		words: 0,
		characters: 0,
		mistakes: 0,
		expla: ''
	},
	selectedParagraph: 'Hello GEEKS, welcome to TypingGEEKS. Your page is loading:'
}

class App1 extends React.Component {
	constructor() {
		super();

		this.state = defaultState
	}

//function to assign value to paragraph, the text displayed
	componentDidMount = () => {
        const para1 = randomElementSelector(typingTestData)
        const para2 = randomElementSelector(typingTestData)
        const para3 = randomElementSelector(typingTestData)
        const para = para1 + para2 + para3
        this.setState({
			...this.state,
			selectedParagraph: para
		})
	}

//called from another component whenever, a character is typed
	handleKeyPress = (inputValue) => {
		if (!this.state.timerStarted) this.startTimer()
		const updatedDetails = testDetailsCalculator(this.state.selectedParagraph, inputValue)
		this.setState({ userInput: inputValue,
		detailsData: updatedDetails })
	}

	//to start the test again
	startAgain = () => {
		this.setState({ ...defaultState })
		this.setState({ selectedParagraph: '' })
		this.componentDidMount()
	}

	//for timer
	startTimer = () => {
		this.setState({ timerStarted: true });
		const timer = setInterval(() => {
			if (this.state.timeRemaining > 0) {
				this.setState({ timeRemaining: (this.state.timeRemaining - 1), 
				timeStarted: (this.state.timeStarted + 1)})
			} else {
				clearInterval(timer)
			}
		}, 1000)
	}

	render() {
		return (
			<>
			<Navbar />
			<SideNav />
			<div className="app-container">
				{/* <h1 className="main-heading">Speedy Type</h1> */}
				<div className="test-container-main">
					<TestContainer
					timeStarted={this.state.timeStarted}
						userInput={this.state.userInput}
						handleKeyPress={this.handleKeyPress}
						timeRemaining={this.state.timeRemaining}
						timerStarted={this.state.timerStarted}
						startAgain={this.startAgain}
						words={this.state.detailsData.words}
						characters={this.state.detailsData.characters}
						mistakes={this.state.detailsData.mistakes}
						selectedParagraph={this.state.selectedParagraph}
					/>
				</div>
			</div>
			<Keyboardlayout />
			<MainFeature />
			<Coming />
			<Fact />
			<Documentary />
			<Footer />
			</>
		)
	}
}

export default App1;
