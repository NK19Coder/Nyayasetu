import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import patientAvatar from './../../assets/images/patient-avatar.png';
import nehal from './../../assets/images/nehal.jpeg';
export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div className="bg-amber-50">
          <img src={patientAvatar} />
          <div className="myCarousel bg-amber-50 border-none ">
            <h3>Keshav</h3>
            <h4>Personal Injury Client</h4>
            <p>
            I can't thank the entire team at Nyaysetu enough for their exceptional representation. After my accident, they fought tirelessly to ensure I received fair compensation for my injuries. Their dedication made all the difference.
            </p>
          </div>
        </div>

        <div className="bg-amber-50">
        <img src={patientAvatar} />
          <div className="myCarousel bg-amber-50 border-none">
            <h3>Nitish</h3>
            <h4>Family Law Client</h4>
            <p>
            Navigating a divorce is never easy, but with NyaySetu by my side, I felt supported every step of the way. Their legal expertise, patience, and commitment to my case were truly remarkable.
            </p>
          </div>
        </div>

        <div className="bg-amber-50">
        <img src={nehal} />
          <div className="myCarousel bg-amber-50 border-none">
            <h3>Nehal</h3>
            <h4>Tax Related Matter</h4>
            <p>
            Thanks for providing constant support.Very much satisfied with your services.
            </p>
          </div>
        </div>
        <div className="bg-amber-50">
        <img src={patientAvatar} />
          <div className="myCarousel bg-amber-50 border-none">
            <h3>Devansh</h3>
            <h4>Criminal Defense Client</h4>
            <p>
            Facing criminal charges was a terrifying experience, but NyaySetu offered unwavering support and a strong legal defense. Thanks to their efforts, I received a fair outcome in my case
            </p>
          </div>
        </div>
        <div className="bg-amber-50">
        <img src={patientAvatar} />
          <div className="myCarousel bg-amber-50 border-none ">
            <h3>Nishant</h3>
            <h4>Business Law Client</h4>
            <p>
            I turned to Devansh for assistance with my business's legal needs, and I couldn't be happier with the results. Their team provided strategic advice that helped me make informed decisions and protect my company's interests.
            </p>
          </div>
        </div>
        <div className="bg-amber-50">
        <img src={patientAvatar} />
          <div className="myCarousel bg-amber-50 border-none">
            <h3>Priyanka</h3>
            <h4>Estate Planning Client</h4>
            <p>
             They took the time to understand my wishes and crafted a comprehensive plan that met all my needs. I highly recommend their services.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}