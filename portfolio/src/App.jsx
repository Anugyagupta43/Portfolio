import React, { useEffect, useState } from 'react';
import './App.css';
import { FaHome } from 'react-icons/fa';

const roles = ["Developer", "Data Analyst", "UI/UX designer", "Content Writer"];

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  // Poem carousel state
  const poemGallery = [
    { img: 'forever.jpg', title: 'Our Forever' },
    { img: 'love.jpg', title: 'Love?' },
    { img: 'toast.jpg', title: 'A Toast To You' },
    {img:'unsung.jpg', title:'Unsung'}
  ];
  const [poemIndex, setPoemIndex] = useState(0);
  const [modalImg, setModalImg] = useState(null);
  const nextPoem = () => setPoemIndex((poemIndex + 1) % poemGallery.length);
  const prevPoem = () => setPoemIndex((poemIndex - 1 + poemGallery.length) % poemGallery.length);

  // Books
  const books = [
    "The Immortals of Meluha trilogy",
    "Seven Husbands of Evelyn Hugo",
    "A Thousand Splendid Suns",
    "The Housemaid",
    "Good Girl's Guide to Murder",
    "Looking for Alaska"
  ];

  // Experience data
  const experiences = [
    {
      company: "Makers' Muse",
      role: "Content Writing Intern",
      time: "Oct 2024-Feb 2025",
      desc: "Wrote 5+ technicals books about different topics like MIT Basics, Blockly, Aurdino for school children."
    },
    {
      company: "Geeks for Geeks",
      role: "Technical Content Writing Freelancer",
      time: "May 2024 - May 2025",
      desc: "Wrote articles about various topics like CPU Scheduling, MongoDB, Apache"
    }
  ];

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

    {title: "Spotify Analysis", desc: "A data analysis project exploring user listening behavior on Spotify. Used Python, Pandas, and Matplotlib/Seaborn to analyze trends in track popularity, genre etc. This project dives into a dataset of 20,590 Spotify tracks to uncover powerful insights using SQL on pgAdmin.",img:"Spotify.png", link:"https://github.com/Anugyagupta43/Spotify-DA", code: "https://github.com/Anugyagupta43/Spotify-DA"},

    {
      title: "Olympics 2024", desc: "This Power BI dashboard presents a comprehensive analysis of the Olympics 2024, focusing on 11,113 athlete participation, medal distribution, and performance by 206 country and gender. It provides interactive visuals and insights for a better understanding of the overall event statistics.", img:"olympics.png",link:"https://github.com/Anugyagupta43/Olympics-DA", code: "https://github.com/Anugyagupta43/Olympics-DA"
    },

   
      {title: "GenCloset", desc: "GenCloset is your stylish sidekick powered by Generative AI that transforms plain customer reviews into runway-ready. Built a GenAI-powered app in Python using flan-t5-base to convert 23k+ fashion reviews into 5 content format", img:"gencloset.png", code:"https://github.com/Anugyagupta43/GenCloset", Link: "https://colab.research.google.com/drive/1OdJM5vHHu06kAvt06YIKhT8j_-omiuUz?usp=sharing"
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
      {/* Navbar */}
      <nav className={`navbar${darkTheme ? ' dark' : ''}`}>
        <div className="navbar-content">
          <a href="#home" className="nav-logo" aria-label="Home"><FaHome size={28} /></a>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#hobbies">Hobbies</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="hero-section" id="home">
        <div className="hero-content">
          <h1 style={{ marginTop: '5.5rem' }}>ANUGYA GUPTA</h1>
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
        <h2 id="projects">Analytical Projects</h2>
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
        {/* Experience Section */}
        <h2 id="experience">Experience</h2>
        <div className="projects experience-projects">
          {experiences.map((exp, idx) => (
            <div className="card experience-card" key={idx}>
              <div className="content">
                <h3>{exp.company}</h3>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-time">{exp.time}</div>
                <p>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Hobbies Section */}
        <h2 id="hobbies">Hobbies</h2>
        <div className="hobbies-row">
          {/* Poem Carousel Box */}
          <div className="hobby-box poem-box">
            <h3>My Poems</h3>
            <div className="poem-carousel">
              <div className="poem-carousel-img-wrap" onClick={() => setModalImg(poemGallery[poemIndex].img)}>
                <img
                  src={poemGallery[poemIndex].img}
                  alt={poemGallery[poemIndex].title}
                  className="poem-img-thumb poem-carousel-img"
                />
                <div className="poem-title">{poemGallery[poemIndex].title}</div>
              </div>
            </div>
            <div className="carousel-dots">
              {poemGallery.map((_, idx) => (
                <span
                  key={idx}
                  className={`carousel-dot${idx === poemIndex ? ' active' : ''}`}
                  onClick={() => setPoemIndex(idx)}
                />
              ))}
            </div>
            {/* Modal for expanded poem image */}
            {modalImg && (
              <div className="poem-modal-overlay" onClick={() => setModalImg(null)}>
                <img src={modalImg} alt="Poem" className="poem-modal-img" />
              </div>
            )}
          </div>
          {/* Books Box */}
          <div className="hobby-box books-box">
            <h3>Books I'm into</h3>
            <ul className="book-list">
              {books.map((book, idx) => (
                <li key={idx} className="book-list-item">{book}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Contact Section */}
      <footer className="footer-contact-section" id="contact">
        <h2>Contact Me</h2>
        <p style={{fontSize: '1.3rem'}}>Feel free to reach out via email:</p>
        <a className="email-link" href="mailto:anugyagupta43@gmail.com" style={{fontSize: '1.3rem'}}>anugyagupta43@gmail.com</a>
        <div style={{marginTop: '2rem'}}>
    
        </div>
      </footer>
    </>
  );
}

export default App;
