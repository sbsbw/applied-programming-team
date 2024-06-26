import "../styles/App.css";
import "../styles/App1.css";
import hiredSm from "../images/hired-sm.webp";
import hired from "../images/hired.webp";

export default function AppJobHelp() {
  return (
    <div className="job-help-page">
    {/* page open */}
      <div id="main-job-help">
      {/* main open */}
        <div className="container">
          <h1>Job Interview Resources</h1>
          <picture>
            <source media="(max-width: 800px)" srcset={hiredSm}/>
            <img src={hired} alt="young-professionals" loading="lazy" />
          </picture>
        </div>
        <div className="divider"></div> 
        <div className="job-container">
          <h1>Job Help</h1>
          <p>
            If you're looking for help with your job, you've come to the right
            place. Our team of job seekers and job providers are here to help you
            find the perfect job. We offer a wide range of job help services,
            including:
          </p>
          <ul>
            <li>Resume preparation</li>
            <li>Resume writing</li>
            <li>Interview preparation</li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="job-container">
          <h1>Resume Preparation and writing strategies</h1>
          <p><span>Step 1: </span>Start with a professional resume, explore different ways of formatting your skills similar to others around you. 
            Look over the deisgn and the simpicity of the resume ad mimic the things you liked.</p>

            <p><span>Step 2: </span> Next look at the experience required and seek out the right job for you. Wheter that would be geographical or not, pick the right area and apply there. </p>
            <p><span>Step 3: </span> Then look at the skills you need for those positions and apply to ones where you have all the skills or at least some of them.</p>
            <p><span>Step 4: </span> Next participate in informatinal sessions and ask questions about the job. </p>
            <p><span>Step 5: </span> Next, write a compelling cover letter that highlights your skills and experience and explains why you're a good fit for the job.</p>
            <p><span>Step 6: </span> Finally, apply for the job.</p>
          </div>
          <div className="divider"></div>
          <div className="job-container">
            <h1>Interview Preparation</h1>
            <p>Interview preparation is essential for job seekers. Here are some tips for preparing for an interview:</p>
            <p><span>Step 1: </span>Start with the job description for clues about the questions you might be asked.</p>
            <p><span>Step 2: </span>Be prepared to demonstrate examples of your strengths, weaknesses, skills, and personal qualities as they relate to the position. Write out 10 examples of times that you demonstrated skills, strengths, or successes related to the job you are applying for </p>
            <p><span>Step 3: </span>Research the employer to better understand the culture and how you might fit in. Be prepared to describe what the organization and position do in your own words. Consider researching the hiring manager or employees at the organization on LinkedIn</p>
            <p><span>Step 4: </span>Prepare at least 3 questions to ask at the end of your interview. </p>
            <p><span>Step 5: </span>Prepare your professional interview attire, copies of your resume, and references. </p>
            <p><span>Step 6: </span>Obtain details about the interview, including location, directions, parking, and the names and job titles of interviewers.. </p>
            <p><span>Step 7: </span>Practice interview questions with a mentor, supervisor, or staff member at your college career center that you trust. Be sure to ask for feedback. </p>
            <a href="https://collegepossible.org/news/how-to-prepare-for-an-interview/?gad_source=1">source cited</a>
          </div>
        <div className="divider"></div>
        <div className="job-container-form">
          <form>
            <h1>Contact Us for a quote or more information</h1>
            <label for="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname"/><br/>
            <label for="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname"/>
            <br/><br/>
            <label for="phone">Phone:</label><br/>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/><br/>
            <label for="email">Email:</label><br/>
            <input type="email" id="email" name="email"/><br/><br/>
            <label for="message">Message:</label><br/>
            <textarea id="message" name="message" rows="4" cols="50"></textarea><br/><br/>

            <input type="submit" value="Submit"/>
          </form>
          {/* const Form = () => {
            const [name, setName] = useState("");

            const handleSubmit = (event) => {
              event.preventDefault();

              // Submit the form data to the server
            };

            return (
          <form onSubmit={handleSubmit}>
          <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
          <button type="submit">Submit</button>
          </form>
            );
          };

          export default Form; */}
        </div>
      {/* main close */}
      </div>
              
      <div>
      </div>
    {/* page close */}
    </div>
  );
}
