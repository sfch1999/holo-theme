import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-14 mb-14">
      <Fade bottom>
        <div className="w-full h-full  flex flex-row justify-between align-middle bg-[url('../images/holographic-background.webp')] p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full backdrop-blur-sm bg-white/30 p-10 rounded-lg lg:p-10">
            <div className="text-black font-semibold text-xl xxs:text-s xxs:font-normal sm:text-xl font-notoserif">
              "This groundbreaking work by the authors is revolutionizing the intersection of AI and financial risk management. By applying deep reinforcement learning to gamma and vega hedging, they have set a new standard for AI-driven trading strategies. Their innovative approach not only enhances risk control but also paves the way for the future of autonomous financial decision-making. A true milestone in AI-powered finance."
            </div>
            <div className="mt-10">
              <h3 className="text-black text-2xl font-smibold">Journal of Banking and Finance</h3>
              <p className="text-black text-sm font-semibold opacity-50">
                Elsevier
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial
