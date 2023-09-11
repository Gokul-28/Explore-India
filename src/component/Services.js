import React from "react";
import Title from "./Title";
import {service} from '../data'

const Services = () => {
  return (
    <div>
      <section className="section services" id="services">
        <Title title="Our " subTitle="Services" />

        <div className="section-center services-center">
          {service.map((data) => {
            return (
              <article className="service">
                <span className={data.spanName}>
                  <i className={data.icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{data.title}</h4>
                  <p className="service-text">{data.text}</p>
                </div>
              </article>
            );
          })}
          ;
        </div>
      </section>
    </div>
  );
};

export default Services;
