import React, { Component } from 'react' 

export default class About extends Component { 
  render() {
    return (
      <div> {/*divide the web page into a segment*/} 
        <section className="colorlib-about" data-section="about">{/*Naming the div segment*/}
        <div className="colorlib-narrow-content">{/*function to create margin between scroll bar and about us*/}
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInRight"> {/*To animate "About us till :P by calling data animate effect"*/}
                <div className="col-md-12">{/*Limit column to medium*/}
                    <div className="about-desc">
                    <span className="heading-meta">About KK</span>{/*Calling heading-meta style using span tag*/}
                    <h2 className="colorlib-heading">Who Am I?</h2>{/*Calling colorlib heading to h2 tag*/}
                    <p>I am a 27 year old magician who been in the industry for the last 25 years. Apart from private events to corporate shows, I also teach magic and use magic as a tool for soft skill training, public speaking skills. </p>
                    <p>I also am pursuing my MCA which I have no idea about but hey, life goes on. ^_^</p>
                    </div>
                </div>
                </div>  
            </div>
            </div>
        </div>
        </section> {/*End of about us section*/}
        <section className="colorlib-about">{/*function to create margin between scroll bar and about us*/}
        <div className="colorlib-narrow-content">{/*function to create margin between scroll bar and about us*/}
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft"> {/*Division customisation for "What do I do till - expertise*/}
                <span className="heading-meta">Not just a one act show but</span>{/*heading meta style to what do i d*/}
                <h2 className="colorlib-heading">But I have a wide of clients that employ for events like</h2>{/* including colorlib heading style*/}
            </div>
            </div>
            <div className="row row-pt-md"> {/*separation between expertize boxes and previous line */}
            <div className="col-md-4 text-center animate-box"> {/*size of 1st section "webdevelopment*/}
                <div className="services color-1">{/*Color of hexagon and bottom pad of Web development*/}
                <span className="icon">{/*Incorporating hexagon*/}
                    <i className="icon-content-right"/>{/*Incorporating bulb */}
                </span>
                <div className="desc">{/*Weirdly changes size of the 1st box*/}
                    <h3>Private/Family Events</h3>
                    <p>Like birthdays, wedding receptions, sangeets, dinner parties, any kind of environment basicall</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">{/*h2 align and animation and col width*/}
                <div className="services color-3">{/*Color of hexagon*/}
                <span className="icon">{/*hexagon*/}
                    <i className="icon-phone3" />{/*Phone*/}
                </span>
                <div className="desc">{/*creates particular dimension of box under hexagon*/}
                    <h3>Corporate Events</h3>
                    <p>Like annual days, corporate dinners, family day, office event curtain raisers, carnivals, etc.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">{/*Size,animation and text align of div*/}
                <div className="services color-5">{/*Color of hexagon*/}
                <span className="icon">{/*hexagon*/}
                    <i className="icon-data" />{/*Server icon*/}
                </span>
                <div className="desc">
                    <h3>Team Builiding</h3>
                    <p>I also use magic as a tool for helping individuals and office teams increase their soft skills, publick speaking skills, increase interaction with colleagues        </p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
