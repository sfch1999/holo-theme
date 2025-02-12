import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import FeaturedBlog from "../components/FeaturedBlog"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Seo
        title="ABI AI: Accelerate the Development of AI Applications"
        description="ABI AI is an AI-as-a-Service (AIaaS) provider specializing in delivering custom AI solutions for enterprises. It helps businesses leverage artificial intelligence to optimize operations, enhance decision-making, and drive innovation. ABI AI offers expertise in machine learning, natural language processing (NLP), computer vision, and predictive analytics, enabling companies to integrate AI seamlessly into their workflows. Whether automating processes, improving customer experiences, or extracting insights from data, ABI AI tailors its solutions to meet the unique needs of each enterprise."
      ></Seo>
      <Header></Header>
      <FeatureSection></FeatureSection>
      <FeaturedBlog></FeaturedBlog>
      <Testimonial></Testimonial>
    </Layout>
  </div>
)

export default IndexPage
