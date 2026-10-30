import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTranslate } from 'react-localize-redux'
import PageHead from '../components/page-head'
import IronImage from '../components/ironimage'

import Project1 from '../images/projects/1.png'
import Project1s from '../images/projects/1s.png'
import Project2 from '../images/projects/2.png'
import Project2s from '../images/projects/2s.png'
import Project3 from '../images/projects/3.png'
import Project3s from '../images/projects/3s.png'
import Project4 from '../images/projects/4.png'
import Project4s from '../images/projects/4s.png'
import Project5 from '../images/projects/5.png'
import Project5s from '../images/projects/5s.png'
import Project6 from '../images/projects/6.png'
import Project6s from '../images/projects/6s.png'
import Project7 from '../images/projects/7.png'
import Project7s from '../images/projects/7s.png'

class Showcase extends Component {
  render () {
    const {translate} = this.props

    return (
      <div>
        <PageHead
          title={'Arnoldson.online - ' + translate('showcase.pageTitle')}
          description={translate('page.desc')}
        />
        <main className="ScreenWrapper ShowcaseScreenWrapper">
          <h2 className="heading">{translate('showcase.heading')}</h2>
          <div className="ProjectContainer">
            <div className="projectItem">
              <h3>Bus price calculator</h3>
              <div className="ironImgContainer"><IronImage srcPreload={Project1s} srcLoaded={Project1} darken={0} /></div>
              <a href="https://arnoldson.online/projects/buspricequote/" target="_blank" rel="noopener noreferrer">Demo</a> | <a href="https://github.com/HisingeBussAB/bus-price-quotation" target="_blank" rel="noopener noreferrer">Code</a>
              <p>Charter bus quote system. Calculates price to charge for charter buses based on hours and distance using Google Maps. The base route calculator is complete, project will be extended with save functions and ability to edit base prices. For the demo version dummy prices are used.</p>
            </div>
            <div className="projectItem">
              <h3>Bus tour agent website</h3>
              <div className="ironImgContainer"><IronImage srcPreload={Project2s} srcLoaded={Project2} darken={0} /></div>
              <a href="https://www.rekoresor.se" target="_blank" rel="noopener noreferrer">Live</a> | <a href="https://github.com/HisingeBussAB/bus-travel-website-with-limited-cms" target="_blank" rel="noopener noreferrer">Code</a>
              <p>Website with CMS for bus tour agent. Mostly server rendered PHP with MySQL. JavaScript used for admin panel and AJAX-forms. Demo of administration panel avaliable on demand.</p>
            </div>
            <div className="projectItem">
              <h3>Socal App</h3>
              <div className="ironImgContainer"><IronImage srcPreload={Project3s} srcLoaded={Project3} darken={0} /></div>
              <a href="https://hkarn.github.io/social-app-yhjust16/" target="_blank" rel="noopener noreferrer">Demo</a> | <a href="https://github.com/hkarn/social-app-yhjust16" target="_blank" rel="noopener noreferrer">Code</a>
              <p>Blog/Social post forum. Class assignment. Allows users to make, edit and delete own posts. Like or comment on other posts. Administrator can delete all posts and comments.</p>
            </div>
            <div className="projectItem">
              <h3>Spinnfiskeklubben vinga</h3>
              <div className="ironImgContainer"><IronImage srcPreload={Project4s} srcLoaded={Project4} darken={0} /></div>
              <a href="https://spinnfiskeklubbenvinga.se/" target="_blank" rel="noopener noreferrer">Demo</a> | <a href="https://github.com/hkarn/spinnfiskeklubben-vinga-website" target="_blank" rel="noopener noreferrer">Code</a>
              <p>Simple website for a fishing/cabin organisation in Gothenburg archipelago. Built with Next.js. Not yet complete.</p>
            </div>
            <div className="projectItem">
              <h3>Tour agent booking system</h3>
              <div className="ironImgContainer"><IronImage srcPreload={Project5s} srcLoaded={Project5} darken={0} /></div>
              <a href="https://github.com/HisingeBussAB/reko-tour-booking-system" target="_blank" rel="noopener noreferrer">Code</a>
              <p>Ongoing React update of older tour booking system for bus tour agent. The older system is built in PHP and server rendered with no back-end, front-end seprataion. The original system is also as a release in the repository. It is the first big system I built after comming back to programming for many years so needs to be re-built in more modern technology.</p>
            </div>
            <div className="projectItem">
              <h3>Currency converter</h3>
              <div className="ironImgContainer"><IronImage srcPreload={Project6s} srcLoaded={Project6} darken={0} /></div>
              <a href="https://arnoldson.online/projects/currency/" target="_blank" rel="noopener noreferrer">Demo</a> | <a href="https://github.com/hkarn/currency-exchange-rates-front" target="_blank" rel="noopener noreferrer">Code</a>
              <p>Currency converter and cross-currency tables. Vanilla JS. Uses CoinBase API.</p>
            </div>
            <div className="projectItem">
              <h3>Vocabulary trainer</h3>
              <div className="ironImgContainer"><IronImage srcPreload={Project7s} srcLoaded={Project7} darken={0} /></div>
              <a href="https://arnoldson.online/projects/vocabulary/" target="_blank" rel="noopener noreferrer">Demo</a> | <a href="https://github.com/hkarn/HTML-CSS-JS-Webstandards-final-YHJUST16" target="_blank" rel="noopener noreferrer">Code</a>
              <p>Vocabulary trainer. Vanilla JS.</p>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

Showcase.propTypes = {
  translate: PropTypes.func
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale)
})

export default connect(mapStateToProps, null)(Showcase)
