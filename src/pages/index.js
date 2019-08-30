import React from "react"
import { Element, Link } from "react-scroll"

import Layout from "../components/layout/layout"
import Header from "../components/layout/header"
import Images from "../components/Images"
import SEO from "../components/layout/seo"
import Box, { SideBySide } from "../components/Box"

const IndexPage = () => (
  <Layout>
    <SEO title="Codie Westphall" />
    <Element name="work" className="section">
      <Header>
        <div className="header__grid">
          <div className="header__title">
            <h1>Codie Westphall</h1>
            <h2 className="subtitle">iOS &amp; Android engineer</h2>
            <h2 className="subtitle">based in Auckland, NZ</h2>
          </div>
          <div className="header__subtitle">
            <h3>
              Currently working at{" "}
              <a
                href="https://www.gettimely.com/"
                target="_blank"
                rel="nofollower noopener noreferrer"
              >
                Timely
              </a>
              .
            </h3>
            <h3>
              Open for contract work,{" "}
              <Link to="contact" smooth="true" style={{ cursor: "pointer" }}>
                get in touch.
              </Link>
            </h3>
          </div>
          <div className="header__image">
            <Images.Avatar />
          </div>
        </div>
      </Header>

      <h2 className="container">Work</h2>
      <Box>
        <h3>
          <a
            href="https://www.gettimely.com/"
            target="_blank"
            rel="nofollower noopener noreferrer"
          >
            Timely
          </a>
        </h3>
        <h4 className="u-uppercase">scheduling &amp; point of sale</h4>
        <div className="content">
          <div>
            Running day spa's, hair salons, and beauty clinics all over the
            world.
          </div>
          <div>
            My role is to lead the development of further features and decisions
            for mobile clients at Timely. Working with 3rd party payment
            providers, printer connectivity and a variety of hardware is all
            part of the job.
          </div>
        </div>

        <h4 className="u-uppercase">Technologies</h4>
        <p className="content">
          Swift, Codable, Custom networking, Customer UI, Bluetooth
          connectivity, Hardware support
        </p>
        <div className="full-width">
          <Images.Timely />
        </div>
      </Box>
      <Box>
        <h3>
          <a
            href="https://www.gettimely.com/consultation-app/"
            target="_blank"
            rel="nofollower noopener noreferrer"
          >
            Consult by Timely
          </a>
        </h3>
        <h4 className="u-uppercase">Customisable forms</h4>
        <div className="content">
          <div>
            Enhancing integrations to Timely as well as providing the industry
            with an innovative app.
          </div>
          <div>
            My role was to build an easy to use form builder that provided
            flexibility for future upgrades. On top of this we wanted to offer
            enhancements to existing Timely customers while still having a full
            solution for those who were not Timely customers.
          </div>
        </div>

        <h4>Technologies</h4>
        <p class="content">
          Swift, Codable, Drag and drop, Drawing, Customer UI
        </p>
        <div className="full-width">
          <Images.Consult />
        </div>
      </Box>
      {/* <SideBySide>
        <Box sideBySide>
          <h3>Floorsense</h3>
          <div className="full-width">
            <Images.FloorSense />
          </div>
        </Box>
        <Box sideBySide>
          <h3>PocketSmith</h3>
        </Box>
      </SideBySide> */}
    </Element>
    <Element name="about" className="section container">
      <h2>About</h2>
      <p>
        Hello, I'm Codie. I've been a mobile developer for the past 5 years,
        tackling native iOS and Android projects over the startup scene in New
        Zealand.
      </p>
      <p>
        When I'm not found playing with cool tech at work, you'll probably find
        me enjoying the beautiful country I live in or with a delicious beverage
        in my hand. Coffee (flat white), beer (hazy IPA), or a gin &amp; tonic.
      </p>
      <p>
        My hobbies are all over the show, but photography is one of my loves and
        passion. It mixes well with hiking and travelling too! I also love a
        good film, or tv show that gets me thinking.
      </p>
    </Element>
    <Element name="contact" className="section section--last">
      <Box centered>
        <div style={{ width: 150, margin: "0 auto" }}>
          <Images.Mail />
        </div>
        <h2 className="underlined">Let's Talk</h2>
        <h4>
          Currently open for small contract work. Feel free to get in touch.
        </h4>
      </Box>
    </Element>
  </Layout>
)

export default IndexPage
