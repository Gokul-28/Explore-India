import React from 'react'
import aboutImg from '../images/About.jpg'
import Title from './Title';

export const About = () => {
  return (
    <div>
        <section className="section" id="about">
          <Title title = 'about ' subTitle = "us" />
   

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={aboutImg}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the different world</h3>
          <p>
          Embark on a remarkable journey to India with our trusted travel agency. Our experienced tourist agents will make your visit truly unforgettable, ensuring every detail is well-planned. Discover the beauty of India without breaking the bank, as we offer affordable packages tailored to your desires. Join us in creating memories that will last a lifetime
          </p>
          <a href="#home" className="btn">read more</a>
        </article>
      </div>
    </section>
    </div>
  )
}

export default About ;