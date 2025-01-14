import React, { Component } from "react";
import "./App.css";

class App extends Component {
	// Initialize state with Person object and show status
	state = {
		Person: {
			fullName: "John Mugendi",
			bio: "Software engineer with a passion for solving real-world problems.",
			imgSrc: "dp.jpg",
			profession: "Full Stack Developer",
		},
		shows: false, // Boolean to toggle the profile display
		mountedTime: 0, // Trackhow long component has been mounted
	};

	// Lifecycle method - runs after the component is mounted
	componentDidMount() {
		// Setting an interval to update the 'mountedTime' state every second
		this.timer = setInterval(() => {
			// Use setState to update 'mountedTime'
			// prevState refers to the previous state before the update
			this.setState((prevState) => ({
				// Increment 'mountedTime' by 1 each second
				mountedTime: prevState.mountedTime + 1,
			}));
		}, 1000); // Interval set to 1000 milliseconds (1 second)
	}

	// Lifecycle method - clean up when the component unmounts
	componentWillUnmount() {
		clearInterval(this.timer); // Clear the timer
	}

	// Function to toggle the 'shows' state between true and false
	toggleShow = () => {
		// Update the state using setState()
		// (!) this.state.shows inverts the current value of 'shows' (true becomes false, false becomes true)
		this.setState({ shows: !this.state.shows });
	};

	render() {
		const { Person, shows, mountedTime } = this.state;
		return (
			<div className="App">
				<h1>Profile App</h1>
				<button onClick={this.toggleShow}>
					{shows ? "Hide Profile" : "Show Profile"}
				</button>

				{/* Show the profile if 'shows' is true */}
				{shows && (
					<div className="profile">
						<img src={Person.imgSrc} alt="Profile" />
						<h2>{Person.fullName}</h2>
						<p>{Person.bio}</p>
						<h4>{Person.profession}</h4>
					</div>
				)}

				{/* Display time since the component was mounted */}
				<p>
					{`Component has been mounted for: ${mountedTime} seconds`}
				</p>
			</div>
		);
	}
}

export default App;
