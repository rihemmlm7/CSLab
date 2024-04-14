import React from 'react';
import './style/Home.css'; // Import CSS file for styling

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to CSLab</h1>
        <p className="home-description">
          CSLab, the Computer Science Laboratory at Ain Temouchent, is dedicated
          to advancing cutting-edge research and innovation in the field of
          computer science.
        </p>
        <div className="home-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to foster a collaborative environment where
            researchers, faculty, and students can explore emerging
            technologies, tackle complex challenges, and make impactful
            contributions to the global computer science community.
          </p>
        </div>
        <div className="home-section">
          <h2>Recent News</h2>
          <p>
            Stay up-to-date with the latest news and events happening at CSLab.
            From groundbreaking research findings to exciting collaborations,
            there's always something happening in our vibrant community.
          </p>
        </div>
        <div className="home-section">
          <h2>Featured Projects</h2>
          <p>
            Explore our featured projects to see how CSLab is pushing the
            boundaries of computer science. From artificial intelligence to
            cybersecurity, our researchers are at the forefront of innovation.
          </p>
        </div>
        <div className="home-section">
          <h2>Upcoming Events</h2>
          <p>
            Don't miss out on upcoming events hosted by CSLab. Join us for
            thought-provoking seminars, hands-on workshops, and engaging
            conferences where you can connect with experts and fellow
            enthusiasts.
          </p>
        </div>
        <div className="home-section">
          <h2>Get Involved</h2>
          <p>
            Interested in collaborating with CSLab or joining our community?
            Discover how you can get involved and contribute to groundbreaking
            research in computer science.
          </p>
        </div>
        <button className="explore-button">Explore More</button>
      </div>
    </div>
  );
}
