import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">{/*Creating highlight section*/}
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">{/*Formating and animating highlights and timeline*/}
                <span className="heading-meta">Some of my highlights</span>
                <h2 className="colorlib-heading animate-box">Well just some of them</h2>{/*Creating format for "Timeline*/}
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
                        <h2>Performed for people at some super high places </h2>
                        <p>Mr. Narayan Murhy, Mrs, Sudha Murthy, Ms. Kiran Mazumdar, Honorable Ex-Chief Minster of Karnataka. Film actors include Vishuwardhan, Amabarish, Ramesh Arvind, Upendra, the Rajkumar family, Kamal Hassan, well and a whole lot more.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">{/*animation for DAIICT*/}
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">{/*Pen icon color*/}
                        <i className="icon-pen2" />{/*Creating pen icon as bullet*/}
                      </div>
                      <div className="timeline-label">
                        <h2>Corporate Events</h2>
                        <p>Had the priviledge to launch products of well recognized companies like Kinder Joy, Samsung, Nvidia, Bru Coffee, ACC Cement. I have worked under major event companies and brand like DNA Network, Wizcraft, Phase 1, Eblitz, Wingz, Fuel India, etc., </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">{/*Animation for Primary and highter education*/}
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">{/*Pen Icon color*/}
                        <i className="icon-pen2" />{/*Making pen icon as bullet*/}
                      </div>
                      <div className="timeline-label">
                        <h2>Magic for Social Causes</h2>
                        <p>Kargil Soldiers,
Gujarat Earthquake Relief Fund, Tsunami Aid and bringing smiles, hope and motivation at Helping Hand, Spastic Society, Cancer Care institute, Rakum Blind School, Physically & Mentally Challenged Children, CRY, Orphanages, Old age homes, AIDS organisations, Child Welfare, Mid-Day Meals and for various other causes. 
</p> 
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
