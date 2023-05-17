import './styles/Home.scss'


import linkedinSVG from './images/linkedin.svg'
import githubSVG from './images/github.svg'
import HomeSVG from './images/HomeSGV.svg'
import htmlSVG from './images/htmlSVG.svg'
import cssSVG from './images/cssSVG.svg'
import jsSVG from './images/jsSVG.svg'
import tsSVG from './images/tsSVG.svg'
import reactSVG from './images/reactSVG.svg'
import scssSVG from './images/scssSVG.svg'
import aboutme from './images/aboutmeIMG.jpg'
import smartLibrary from './images/smartl.png'
import locationSVG from './images/locationSVG.svg'
import emailSVG from './images/emailSVG.svg'

function App() {

  function scrollHome () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  }


  function scrollAbout () {
    window.scrollTo({
        top: 700,
        behavior: 'smooth',
    });
  }

  function scrollProjects () {
    window.scrollTo({
        top: 1300,
        behavior: 'smooth',
    });
  }


  function scrollContact () {
    window.scrollTo({
        top: 2000,
        behavior: 'smooth',
    });
  }



  return (
  <div className='mainHome'>
    <div className="navBarHome">
      <h2>Kauan Santos</h2>
      <div className='navLinks'>
        <button onClick={scrollHome}>Home</button>
        <button onClick={scrollAbout}>About</button>
        <button onClick={scrollProjects}>Projects</button>
        <button onClick={scrollContact}>Contact</button>
      </div>
    </div>

    <div className='content'> 
      <div className='leftContent'>
        <h1>Front-End React Developer</h1>
        <p>Hi, i'm Kauan Santos, bla bla blas</p>
        <div className='divLinks'>
          <a href='https://www.linkedin.com/in/kauan-santos-6b516b1a7/'><img src={linkedinSVG} alt="Linkedin" /></a>
          <a href='https://github.com/Kauan-afk'><img src={githubSVG} alt="Github" /></a>
        </div>

        <div className='techStack'>
          <h3>Tech Stack</h3>
          <img src={htmlSVG} alt="" />
          <img src={cssSVG} alt="" />
          <img src={jsSVG} alt="" />
          <img src={tsSVG} alt="" />
          <img src={reactSVG} alt="" />
          <img src={scssSVG} alt="" />
        </div>
        
      </div>
      <div className='rightContent'>
        <img src={HomeSVG} alt="" />
      </div>
    </div>

    <div className='about'>
      <img src={aboutme} alt="" />
      <div className='aboutText'>
        <h4>About me</h4>
        <h3>A focused front end web developer from São Paulo, Brazil 💚</h3>
        <p>Focused frontend Web developer, still without professional experience in the area, with
        knowledge in several technologies such as: HTML5, CSS3, Javascript, Typescript, Reactjs and SCSS.
        For now using my knowledge in personal projects. I seek the
        opportunity to use my knowledge to evolve professionally.</p>
      </div>
    </div>

    <div className='projects'>
      <div className='projectsContent'>
        <h4>Portifolio</h4>
        <h3>Here are some of my best projects</h3>

        <a href="https://smart-library-iota.vercel.app/">
          <div className='proj1'>
            <img src={smartLibrary} alt="" />
            <div className='proj1Text'>
              <h3>Smart Library 📖</h3>
              <p>A library management website, made with the aim of managing etec libraries in são paulo,
                so that those who have access to books will be able to reserve them at any time and in any place.</p>

              <h3>React | SCSS | Node.Js</h3>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div className='contact'>
      <h4>Contact</h4>
      <h3>Feel free to get in touch ✌</h3>
      <div className='contactContent'>
        <img src={locationSVG} alt="" />
        <p>São Paulo, Brasil</p>

        <img src={emailSVG} alt="" />
        <p>kauansantosoliveira55@gmail.com</p>
      </div>
    </div>

    <div className='footer'>
      Copyright © 2023. All rights are reserved.
    </div>

  </div>
  )
}

export default App
