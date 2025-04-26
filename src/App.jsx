import React, { useEffect, useState } from 'react';
import './App.css';

const roles = ["Developer", "Data Analyst", "UI/UX designer", "Content Writer"];

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentRole.length) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const webProjects = [
    { title: "Virtual Fashion Advisor", desc: "A smart, web-based application that provides personalized fashion suggestions by analyzing user preferences, behavior, and trending fashion data. It enhances the online shopping experience with intelligent recommendations and seamless integration with e-commerce and social media platforms.", img: "image.png", link: "https://github.com/Anugyagupta43/fashion-adviser" },
    { title: "AgroLink", desc: "Agrolink is a dynamic web platform designed to bridge the gap between farmers and buyers, offering a seamless experience to sell and purchase fresh produce. Built with an intuitive interface and rich features, Agrolink empowers farmers to reach a larger audience while giving buyers access to quality crops. The platform also provides tools to assist farmers in making informed decisions about crop cultivation.", img: "agrolink.png", link: "https://github.com/Anugyagupta43/agro-link" },
  ];

  const analyticProjects = [
    { title: "Banking EDA", desc: "Exploratory Data Analysis (EDA) on a banking dataset using Python in Google Colab. The goal of this project is to uncover trends, patterns, and insights to better understand customer behavior and banking operations.", img: "eda.png", link: "https://github.com/Anugyagupta43/BankingSystem" },
    { title: "HR Analytics Dashboard", desc: "This HR Analytics Dashboard is created using Power BI and CSV data records to visualize key workforce metrics. The dashboard provides insights into employee attrition, salary distribution, average tenure, job roles, and other HR-related analytics.", img: "hr.png", link: "https://github.com/Anugyagupta43/HR_Analytics" },
  ];

  const techStack = [ "Node.js", "Express", "MongoDB","React", "Python","C++", "Power BI", "Figma","MySQL","Tableau","Excel","Jupyter Notebook"];

  return (
    <div className="App">
        <div className="hero-section">
      <h1>ANUGYA GUPTA</h1>
      <p className="role">
        <span>{displayedText}</span><span className="cursor">|</span>
      </p>
    
      <h2>Tools & Tech Stack</h2>
      <div className="stack">
        {techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      </div>
      
      <div className="social-cards">
  <div className="social-card">
    <a href="https://github.com/Anugyagupta43" target="_blank" rel="noreferrer">
      <img src="gb.png" alt="GitHub" />
      <p>GitHub</p>
    </a>
  </div>
  <div className="social-card">
    <a href="https://www.linkedin.com/in/anugya-gupta-a448b824b/" target="_blank" rel="noreferrer">
      <img src="ld.png" alt="GFG" />
      <p>Linkedin</p>
    </a>
  </div>
  <div className="social-card">
    <a href="https://www.linkedin.com/in/anugya-gupta-a448b824b/" target="_blank" rel="noreferrer">
      <img src="x.png" alt="GFG" />
      <p>X (Twitter)</p>
    </a>
  </div>
  <div className="social-card">
    <a href="https://leetcode.com/u/Anugya43/" target="_blank" rel="noreferrer">
      <img src="lc.png" alt="LeetCode" />
      <p>LeetCode</p>
    </a>
  </div>
  <div className="social-card">
    <a href="https://www.geeksforgeeks.org/user/anugya92/" target="_blank" rel="noreferrer">
      <img src="gfg.png" alt="GFG" />
      <p>GFG</p>
    </a>
  </div>
</div>

      <h2>Web Development Projects</h2>
      <div className="projects">
        {webProjects.map((p) => (
          <div className="card" key={p.title}>
            <img src={p.img} alt={p.title} />
            <div className="content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer">View</a>
            </div>
          </div>
        ))}
      </div>

      <h2>Analytical Projects</h2>
      <div className="projects">
        {analyticProjects.map((p) => (
          <div className="card" key={p.title}>
            <img src={p.img} alt={p.title} />
            <div className="content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer">View</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


