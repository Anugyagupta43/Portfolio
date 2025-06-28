
import React, { useEffect, useState } from 'react';
import './App.css';

const roles = ["Developer", "Data Analyst", "UI/UX designer", "Content Writer"];

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

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



  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkTheme);
  }, [darkTheme]);


  const analyticProjects = [
    { title: "Banking EDA", desc: "Exploratory Data Analysis (EDA) on a banking dataset using Python in Google Colab. The goal of this project is to uncover trends, patterns, and insights to better understand customer behavior and banking operations.", img: "eda.png", link: "https://colab.research.google.com/drive/1hM-9bY4d9hLU7XIV-ORNIq5gorntUwU9?usp=sharing", code: "https://github.com/Anugyagupta43/BankingSystem" },

    {title: "Spotify Analysis", desc: "A data analysis project exploring user listening behavior on Spotify. Used Python, Pandas, and Matplotlib/Seaborn to analyze trends in track popularity, genre etc. This project dives into a dataset of 20,590 Spotify tracks to uncover powerful insights using SQL on pgAdmin.",img:"Spotify.png", link:"https://github.com/Anugyagupta43/Spotify-DA"},

    {
      title: "Olympics 2024", desc: "This Power BI dashboard presents a comprehensive analysis of the Olympics 2024, focusing on 11,113 athlete participation, medal distribution, and performance by 206 country and gender. It provides interactive visuals and insights for a better understanding of the overall event statistics.", img:"olympics.png",link:"https://github.com/Anugyagupta43/Olympics-DA"
    },

   
      {title: "GenCloset", desc: "GenCloset is your stylish sidekick powered by Generative AI that transforms plain customer reviews into runway-ready. Built a GenAI-powered app in Python using flan-t5-base to convert 23k+ fashion reviews into 5 content format", img:"gencloset.png", code:"https://github.com/Anugyagupta43/GenCloset", Link: "https://colab.research.google.com/drive/1OdJM5vHHu06kAvt06YIKhT8j_-omiuUz?usp=drive_link"
    },
    

    { title: "HR Analytics Dashboard", desc: "This HR Analytics Dashboard is created using Power BI and CSV data records to visualize key workforce metrics. The dashboard provides insights into employee attrition, salary distribution, average tenure, job roles, and other HR-related analytics.", img: "hr.png", link: "https://github.com/Anugyagupta43/HR_Analytics", code: "https://github.com/Anugyagupta43/HR_Analytics" }
  
  ];

  const webProjects = [
    { title: "Virtual Fashion Advisor", desc: "A smart, full stack application integrating machine learning that provides personalized fashion suggestions by analyzing user preferences, behavior, and trending fashion data.", img: "image.png", link: "https://virtual-fashion-advisor.netlify.app", code: "https://github.com/Anugyagupta43/fashion-adviser" },
    { title: "AgroLink", desc: "Agrolink is a MERN stack platform designed to bridge the gap between farmers and buyers, offering a seamless experience to sell and purchase fresh produce. The platform also provides tools to assist farmers in making informed decisions about crop cultivation.", img: "agrolink.png", link: "https://agro-link-alpha.vercel.app", code: "https://github.com/Anugyagupta43/agro-link" },
  ];



  const techStack = [ "Node.js", "Express", "MongoDB","React", "Python","C++", "Power BI", "Figma","MySQL","Tableau","Excel","Jupyter Notebook"];

  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1>ANUGYA GUPTA</h1>
          <div className="self-intro">
            Hi! I'm Anugya, a passionate developer and creative problem solver. I love building beautiful, functional web apps and exploring data to uncover insights. Welcome to my portfolio!
          </div>
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
      </div>
      <div className="App">
        <button className="theme-toggle" onClick={() => setDarkTheme((v) => !v)} aria-label="Toggle theme">
          <span className="toggle-knob">
            {darkTheme ? <span role="img" aria-label="Sun">☀️</span> : <span role="img" aria-label="Moon">🌙</span>}
          </span>
        </button>
        <div className="social-cards">
          <div className="social-card">
            <a href="https://github.com/Anugyagupta43" target="_blank" rel="noreferrer">
              <img src="git.png" alt="GitHub" />
              <p>GitHub</p>
            </a>
          </div>
          <div className="social-card">
            <a href="https://www.linkedin.com/in/anugya-gupta-a448b824b/" target="_blank" rel="noreferrer">
              <img src="ld.png" alt="Linkedin" />
              <p>Linkedin</p>
            </a>
          </div>
          <div className="social-card">
            <a href="https://www.linkedin.com/in/anugya-gupta-a448b824b/" target="_blank" rel="noreferrer">
              <img src="x.png" alt="X (Twitter)" />
              <p>X</p>
            </a>
          </div>
          <div className="social-card">
            <a href="https://leetcode.com/u/Anugya43/" target="_blank" rel="noreferrer">
              <img src="lc2.png" alt="LeetCode" />
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
        <h2>Analytical Projects</h2>
        <div className="projects">
          {analyticProjects.map((p) => (
            <div className="card" key={p.title}>
              <img src={p.img} alt={p.title} />
              <div className="content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="card-links">
                  <a href={p.link} target="_blank" rel="noreferrer">View</a>
                  <a href={p.code} target="_blank" rel="noreferrer">GitHub Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2>Web Development Projects</h2>
        <div className="projects">
          {webProjects.map((p) => (
            <div className="card" key={p.title}>
              <img src={p.img} alt={p.title} />
              <div className="content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="card-links">
                  <a href={p.link} target="_blank" rel="noreferrer">View</a>
                  <a href={p.code} target="_blank" rel="noreferrer">GitHub Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default App;
