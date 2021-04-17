import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">{/*Creating highlight section*/}
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">{/*Formating and animating highlights and timeline*/}
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>{/*Creating format for "Timeline*/}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">{/*Assigning grid to 12*/}
                <div className="timeline-centered">{/*Creating the box for the internship texts*/}
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">{/*Animation for juniper*/}
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">{/*Pen icon color*/}
                        <i className="icon-pen2" />{/*Creating Pen icon as bullet*/}
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Juniper <span>2019-present</span></h2>
                        <p>I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper to do rapid development. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">{/*animation for DAIICT*/}
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">{/*Pen icon color*/}
                        <i className="icon-pen2" />{/*Creating pen icon as bullet*/}
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduation at DAIICT<span>2015-2019</span></h2>
                        <p>I am pursuing my under-graduation studies with major in I.C.T.(Information & Communication Technology). I have taken courses like DSA, OOPs, Computer Networks, IOT, Web-Data Management over the years and have better understanding of these subjects.I have also been part of S.B.G.(Student Body Govenance) scince my first year of college.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">{/*Animation for Primary and highter education*/}
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">{/*Pen Icon color*/}
                        <i className="icon-pen2" />{/*Making pen icon as bullet*/}
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2003-2015</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 91 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInTop">{/*Animation*/}{/*But no change in webpage*/}
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
