import React from "react";
import Title from "./Title";
import { services } from "../data";
const Service = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((x) => {
          return (
            <article className="service" key={x.id}>
              <span className="service-icon">
                <i className={x.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{x.title}</h4>
                <p className="service-text">{x.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
