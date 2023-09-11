import React from "react";
import Title from "./Title";
import { tourData } from "../data";


const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured " subTitle="tours" />

      <div className="section-center featured-center">
        {tourData.map((data)=>{
          return <article key={data.id} className="tour-card">
          <div className="tour-img-container">
            <img src={data.imgSrc} className="tour-img" alt="" />
            <p className="tour-date">{data.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{data.title}</h4>
            </div>
            <p>
              {data.description}
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className={data.icon}></i>
                </span>{" "}
                {data.iconName}
              </p>
              <p>{data.days}days</p>
              <p>from ₹{data.price}</p>
            </div>
          </div>
        </article>
        })}
      </div>
    </section>
  );
};

export default Tours;
