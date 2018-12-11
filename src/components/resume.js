import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component {
	render() {
		return(

			<div>
				<Grid>
					<Cell col={4}> 
					<div style={{textAlign:'center'}}>
					<img src= "https://img.icons8.com/color/1600/user-male-circle.png"
					alt="avatar"
					style={{height: '200px'}}
					/>
					</div>

					<h2 style={{paddingTop:'2em'}}>Sagar Kapadia</h2>
					<h4 style={{color:'grey'}}>Programmer</h4>
					<hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
					<p>Passionate about using code to provide the best user experience.</p>
					<hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
					<h5>Address</h5>
					<p>71 S Wacker Dr, Chicago, IL 60606</p>
					<h5>Phone</h5>
					<p>(224) 600-4545</p>
					<h5>Email</h5>
					<p>skapadia45@gmail.com</p>
					<hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
					</Cell>
					<Cell className="resume-right-col" col ={8}> 
					<h2>Education</h2>

					<Education startYear={2014}
					endYear={2018}
					schoolName="University of Illinois at Urbana-Champaign"
					schoolDescription="The University of Illinois at Urbana–Champaign is a public research university in Illinois and the flagship institution of the University of Illinois System. Founded in 1867 as a land-grant institution, its campus is located in the twin cities of Champaign and Urbana."

					/>
					<hr style={{borderTop: '3px solid #e22947'}}/>
					<h2>Experience</h2>

					<Experience 
					startYear={2016}
					endYear={2018}
					jobName="IBM: Technical Consultant"
					jobDescription="Focusing on Full-Stack development with a concentration on React.js, Angular, and Node.js."
					/>
					<Experience 
					startYear={2016}
					endYear={2018}
					jobName="AbbVie: Rapid Application Developer"
					jobDescription="• Part of the Quick Hits team that rapidly deploy websites and applications to internal and external AbbVie teams.
• Utilize Pipeline Pilot software and apply programming techniques to incorporate solutions in a user-friendly environment.
• Responsible for implementing new concepts and ideas into the company's user-friendly websites utilizing HTML, CSS, SQL, JavaScript, and PilotScript.
• Developed department-specific websites that incorporated innovative frameworks such as AngularJS, Bootstrap, and Semantic UI."
					/>
					<Experience 
					startYear={2017}
					endYear={2017}
					jobName="Protiviti: Technology Consultant"
					jobDescription="Client 1 (Insurance Client)
•	Created Power BI dashboards utilizing custom visuals and measures for the CISO that led to immediate discoveries for the client.
•	Created over dozen custom DAX measures to incorporate cumulative totals for the business on Power BI.
•	Implemented SSAS to update DAX measures in database.

Client 2 (Financial Services Client)
•	Developed VBA macros in order to replace hyperlinks and display broken links for over 5000 excel files .
•	Created custom DAX measures to incorporate cumulative totals for the business on Power BI.
• Verified client's vendors to be SOC 2 compliant.
•	Created security blog posts for the company regarding phishing and webcam security.
"
					/>
<hr style={{borderTop: '3px solid #e22947'}}/>

<h2>Skills</h2>
<Skills
	skill="JavaScript"
	progress={100}
/>
<Skills
	skill="HTML/CSS"
	progress={100}
/>
<Skills
	skill="React.js"
	progress={100}
/>
<Skills
	skill="Angular"
	progress={100}
/>
<Skills
	skill="Node.js"
	progress={100}
/>
					</Cell>
				</Grid>
			</div>
			)
	}
}

export default Resume;