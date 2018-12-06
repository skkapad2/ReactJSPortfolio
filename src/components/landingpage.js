import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Landing extends Component {
	render() {
		return(

			<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>

					<img
					src="https://img.icons8.com/color/1600/user-male-circle.png"
					alt="avatar"
					className="avatar-img"
					/>
					<div className= "banner-text">
					<h1> Full Stack Web Developer</h1>
					
					<hr/>

					<p>HTML/CSS | Bootstrap | Semantic UI | React | React Native | NodeJS | AngularJS | SQL</p>
					
				<div className="social-links">
			{/* LinkedIn*/}
				<a href="https://www.linkedin.com/in/sagar-kapadia/" target="_blank" rel="noopener noreferrer">
				<i className="fa fa-linkedin-square"  aria-hidden="true" />
				</a>
			{/* Github*/}
			<a href="https://github.com/skkapad2" target="_blank" rel="noopener noreferrer">
				<i className="fa fa-github-square"  aria-hidden="true" />
				</a>
			{/*Envelope*/}
				<a href="mailto:sagar.kapadia@ibm.com" target="_blank" rel="noopener noreferrer">
				<i className="fa fa-envelope-square"  aria-hidden="true" />
				</a>

				</div>
					</div>
					</Cell>
				</Grid>
			</div>

			)
	}
}

export default Landing;