import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
        <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">{/*aside function to sidebar with full height*/}
            <div className="text-center"> {/*Center align for email id*/}
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Karun Krishna</a></h1>{/*Customization for name under author-img*/}
              <span className="colorlib-email"><i className="icon-email"></i> kk@gmail.com</span>{/*custom email format*/}
            </div>{/*End of div till email*/}
            <nav>
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>{/*Linking introduction button to intro*/}
                  <li><a href="#about" data-nav-section="about">About</a></li>{/*Same as intro button to intro*/}
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">{/*M<enu under sidebar's fullname*/}
              <ul>
                <li><a href="https://www.facebook.com/karunkrishna" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>{/*Linking fb to fb icon*/}
                <li><a href="https://twitter.com/karunkrishna18" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>{/*Same for twitter*/}
                <li><a href="https://www.instagram.com/karunkrishnaactually/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>{/*INstagram*/}
                <li><a href="https://www.linkedin.com/in/dbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>{/*Linkedin*/}
                <li><a href="https://github.com/githubkk1/" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>{/*git*/}
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="false" /> a lot of time and a few tweaks here and there <i className="icon-beer" aria-hidden="true"></i><br></br>{/*Includiong the beer and heart icon*/}
                  Thanks to Rishi and Somadisha for your time and help {/*Shoutout to cololib*/}
              </small></p>
              <p><small>
                Something coming soon !!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
