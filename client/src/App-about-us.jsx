import "./App.css";
import "./App1.css";

export default function AppAboutUs() {
  return (
    <div className="about-us-page">
      {/* body open */}
      <div>
        {/* header open */}
        <img
          id="logo"
          src="./images/money-logo.png"
          alt="Logo"
          height="auto"
          width="100px"
          loading="lazy"
        />
        {/* <!-- <button id="myBtn"></button> --> */}
        <nav>
          <ul className="menu">
            <li>
              <a className="current-menu-item" href="./index.html">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="./job-search.html">
                Job Search
              </a>
            </li>
            <li>
              <a className="link" href="./job-help.html">
                Job Help
              </a>
            </li>
            <li>
              <a className="link" href="./about-us.html">
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* header close */}
      <div>
        {/* main close */}
        <div className="container">
          <h1>About Us</h1>
          <div className="divider"></div>
          <picture>
            <source
              media="(max-width: 800px)"
              srcset="./images/young-professionals-sm.webp"
            />
            <source
              media="(max-width: 1200px)"
              srcset="./images/young-professionals-md.webp"
            />
            <img
              src="./images/young-professionals.webp"
              alt="young-professionals"
              loading="lazy"
            />
          </picture>
          <p>
            Know Your Worth is a job search platform that connects job seekers
            with job providers. We are dedicated to helping individuals find
            their dream job.
          </p>
        </div>
        <div className="divider"></div>
        <div className="container">
          <h1>Our Mission</h1>
          <p>
            Welcome to Know Your Worth, your trusted companion in the journey to
            finding your dream job. At Know Your Worth, we understand the
            importance of landing not just any job, but the perfect fit for you
            – one that aligns with your skills, passions, and aspirations.
          </p>
          <p>
            Who are we? We are more than just a website; we are a team of
            passionate individuals driven by the mission to empower individuals
            like you in their career pursuits. Our dedicated team works
            tirelessly to curate a seamless platform that connects job seekers
            with job providers effortlessly.
          </p>
          <p>
            What sets us apart? We pride ourselves on offering a user-friendly
            interface designed to simplify the job search process. Whether
            you're a seasoned professional looking for a career change or a
            fresh graduate stepping into the workforce, Know Your Worth caters
            to your needs. Our intuitive platform streamlines the job hunt,
            allowing you to focus on what truly matters – finding the best job
            possible.
          </p>
          <p>
            How do we do it? Through innovative algorithms and personalized
            matching systems, we analyze your skills, preferences, and career
            objectives to present you with tailored job recommendations. Say
            goodbye to endless scrolling through irrelevant listings. With Know
            Your Worth, every job suggestion is a potential opportunity waiting
            to be seized.
          </p>
          <p>
            Why choose Know Your Worth? Because we believe that everyone
            deserves to find fulfillment in their career journey. Whether you're
            seeking a challenging role in tech, a creative position in design,
            or a rewarding opportunity in healthcare, we've got you covered.
            Your worth is invaluable, and we're here to help you realize it.
          </p>
          <p>
            Join the Know Your Worth community today and embark on a journey
            towards a brighter future. Let's unlock your potential together –
            because when you know your worth, the possibilities are endless.
          </p>
        </div>
        <div className="divider"></div>
        <h1>Our Team</h1>
        <div id="team-container">
          <div className="team-member">
            <img src="images/team-member-1.jpg" alt="Logan" loading="lazy" />
            <h2>Logan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              scelerisque vitae nunc ut dictum. Suspendisse potenti. Vestibulum.
            </p>
          </div>
          <div className="team-member">
            <img
              src="images/team-member-2.jpg"
              alt="Devun Durst"
              loading="lazy"
            />
            <h2>Devun Durst</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              scelerisque vitae nunc ut dictum. Suspendisse potenti. Vestibulum.
            </p>
          </div>
          <div className="team-member">
            <img
              src="images/team-member-3.jpg"
              alt="Sean Walker"
              loading="lazy"
            />
            <h2>Sean Walker</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              scelerisque vitae nunc ut dictum. Suspendisse potenti. Vestibulum.
            </p>
          </div>
        </div>
        <div id="team-container-1">
          <div className="team-member-1">
            <img src="images/team-member-4.jpg" alt="Hunter" loading="lazy" />
            <h2>Hunter</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              scelerisque vitae nunc ut dictum. Suspendisse potenti. Vestibulum.
            </p>
          </div>
          <div className="team-member-2">
            <img src="images/team-member-5.jpg" alt="Lincoln" loading="lazy" />
            <h2>Lincoln</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              scelerisque vitae nunc ut dictum. Suspendisse potenti. Vestibulum.
            </p>
          </div>
        </div>
      </div>
      {/* main close */}
      <div>
        {/* footer open*/}
        <div className="logo-section">
          <div className="sm-logos">
            <a
              href="https://www.facebook.com/profile.php?id=61556146266910"
              target="_blank"
            >
              <img
                src="images/facebook-logo.webp"
                alt="fb icon"
                loading="lazy"
              />
            </a>
          </div>
          <div className="sm-logos">
            <a href="https://twitter.com" target="_blank">
              <img src="images/x-logo.webp" alt="X icon" loading="lazy" />
            </a>
          </div>
          <div className="sm-logos">
            <a href="https://instagram.com" target="_blank">
              <img
                src="images/instagram-logo.webp"
                alt="instagram icon"
                loading="lazy"
              />
            </a>
          </div>
          {/* <!-- div for the menu --> */}
          <div className="footer-menu">
            <ul>
              <li>
                <a className="current-menu-item" href="./index.html">
                  Home
                </a>
              </li>
              <li>
                <a className="menu-item" href="./job-search.html">
                  Job Search
                </a>
              </li>
              <li>
                <a className="link" href="./job-help.html">
                  Job Help
                </a>
              </li>
              <li>
                <a className="link" href="./about-us.html">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer close*/}
      <div className="copywrite">
        <p>&copy; 2022 Know Your Worth. All rights reserved.</p>
      </div>
      {/* close body */}
    </div>
  );
}
