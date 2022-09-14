import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/HeroSection/Hero";
import Trips from "../components/Trips/Trips";
import SamplePage from "../components/SamplePage";
import Testimonials from "../components/TestiSection/Testimonials";


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    {/* <SamplePage /> */}
    <Trips heading="Our Favorite Destinations"/>
    <Testimonials />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
