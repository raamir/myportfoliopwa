import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://image.flaticon.com/icons/png/512/219/219969.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Rija Aamir</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>As I continue my professional journey, I like to think of my career as one big learning experience that continuously grows with each project and collaboration. With a dedication to functionality and a curiosity for what’s ahead of the curve, I keep my work practical, relevant and creative. Have a look at my past projects and resume, and feel free to reach out with any questions.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>(630) 965-9736</p>
            <h5>Email</h5>
            <p>aamir.rija@example.com</p>
            <h5>GitHub</h5>
            <p>github.com/raamir/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2016}
              endYear={2006}
              schoolName="DePaul University"
              schoolDescription="Combined BS/MS in Information Technology June 2020 Cumulative GPA 4.0/4.0, Academic Honors: Dean’s List, all quarters in attendance."  />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2018}              
              
              jobName="RR Donnelley"
              jobTitle ="Web Developer Intern"
              jobDescription=" Enhance organization's website by coding in JAVA, HTML, AngularJS, Complete testing, debugging, and installing routine programs. Apply structured programming techniques to improve clarity and quality of the content. Coordinate and conduct system stress tests. Help to create and execute unit test plans."
              />
              <Experience
                startYear={2016}
                endYear={2018}
                jobName="Meijer Inc"
                jobTitle ="Cashier"
                jobDescription="Communicate with customers to make their shopping experience pleasant. Evaluate customer’s complaint by meeting their needs through effectively assessing their problem. Train new cashiers on how to checkout customers in a fast and efficient way." />
              
              <Experience
                startYear={2017}
                endYear={2017}
                jobName="Codemoji"
                jobTitle ="Summer Web Intern"
                jobDescription="Develop and design programs in HTML, CSS and JavaScript for elementary students to help them learn the basic concepts of math. Planned and organized the files for the website. Utilized effective problem-solving skills to incorporate logic and add appealing design to the content."    
                />  
            <hr style={{borderTop: '3px solid #e22947'}} />
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
                  skill="GitHub"
                  progress={100}
                  />
                    <Skills
                  skill="JIRA"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;