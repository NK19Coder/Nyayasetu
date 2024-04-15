import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import featureImg from '../assets/images/feature-img.png';
import videoIcon from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import faqImg from '../assets/images/faq-img.png';
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import About from '../components/About/About.jsx';
import ServiceList from '../components/Services/ServiceList.jsx';
import LawyerList from '../components/Lawyers/LawyerList';
import FaqList from '../components/Faq/FaqList';
import Testimonial from '../components/Testimonial/Testimonial';


const Home = () => {
  return <>
  {/*==========hero section============= */}
    <section className='hero__section pt-[60px] 2xl:h-[800px]'>
      <div className="container">
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
          {/*===============hero content============= */}
          <div>
            <div className='lg:w-[570px]'>
                <h1 className='text-[28px] leading-[46px] text-headingColor font-[550] md:text-[60px] md:leading-[60px]  '>न्याय सर्वार्थे, त्वरितं सुलभं च।</h1>
                <p className='text__para text-[#000] font-[500] md:text-[20px]'>Our aim is to provide justice for all, quick and easy.</p>

                
            </div>
            {/*===============hero counter============== */}
            <div className='mt-[30px] lg:mt[70px] flex flex-row lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>30+</h2>
              <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
              <p className='text__para text-[#000] font-[500] md:text-[20px]'>Years of Experience</p>
            </div>

            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
              <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
              <p className='text__para text-[#000] font-[500] md:text-[20px]' >Firm/Office Location</p>
            </div>

            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
              <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
              <p className='text__para text-[#000] font-[500] md:text-[20px]'>Client Satisfaction</p>
            </div>

            </div>

          </div>
          {/*===============hero content============= */}
          <div className='flex gap-[30px] justify-end'>
            <div>
              <img className='w-[360px] rounded-lg h-100 mt-12' src={heroImg01} alt="" />
            </div>
            <div className='mt-[30px]'>
              <img src={heroImg02} alt="" className='w-60 h-50 mb-[25px] mt-12 rounded-lg'/>
              <img src={heroImg03} alt="" className='w-60 h-50 mt-5 rounded-lg'/>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*===============hero content end============= */}

    <section className='bg-amber-50'>
      <div className="container">
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Providing the best legal services</h2>
          <p className='text__para text-center'>World-class consultancy for everyone. Our System offers unmatched, expert legal services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

        <div className='py-[30px] px-5'>
          <div className='flex items-center justify-center'><img className='h-60 rounded-lg w-50' src={icon01} alt="" />
          </div>

          <div className='mt-[30px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Lawyer</h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Whether you require representation in a personal injury case, business dispute, or any other legal challenge.</p>

            <Link to='/lawyers' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
          </div>

        </div>

        <div className='py-[30px] px-5'>
          <div className='flex items-center justify-center'><img className='h-60 w-80 rounded-lg' src={icon02} alt="" />
          </div>

          <div className='mt-[30px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Location</h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Provide accessible legal services to our clients at multiple office locations placed throughout India.</p>

            <Link to='/lawyers' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
          </div>

        </div>

        <div className='py-[30px] px-5'>
          <div className='flex items-center justify-center'><img className='h-60 rounded-lg w-80' src={icon03} alt="" />
          </div>

          <div className='mt-[30px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Schedule an appointment with us to get assistance for your legal needs. </p>

            <Link to='/lawyers/1' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
          </div>

        </div>

        </div>
      </div>
    </section>

    <About/>

    {/*===============services section================== */}
    <section className='bg-amber-50'>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className='heading text-center'>Our legal services</h2>
          <p className='text__para text-center'> Provide you with expert legal guidance and dedicated representation tailored to your unique needs.</p>
        </div>

        <ServiceList/>

      </div>
    </section>
    {/*===============services section end================== */}

    {/*===============feature section======================= */}
    <section className='bg-amber-50'>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">

        {/*================feature content================= */}
        <div className='xl:w-[670px]'>
          <h2 className="heading">Get virtual legal advice<br/>anytime.</h2>
          <ul className="pl-4">
            <li className="text__para">
              1. Schedule the appointment directly.
            </li>
            <li className='text__para'>2. Search for your lawyer here, and contact their office/firm.</li>
            <li className="text__para">3. View our lawyers who are accepting new clients, use the online scheduling tool to select an appointment time.</li>
          </ul>
          <a href="http://127.0.0.1:5500/videoconferencing/mumble2-master/mumble2-master/lobby.html" target="_blank">
        {/* <img src="C:\Users\NEHAL NAGPAL\Downloads\emotions.png" alt="Speech Emotion Recognition" class="image-button"> */}
        <button className='btn'>Get Legal Consultation</button>
      </a>
          
        </div>

        {/*===================feature img======================= */}
        <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
          <img src={featureImg} className='w-3/4 rounded-lg h-[450px] w-[650px]' alt="" />

          <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[0px] shadow-panelShadow md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
           
            <div className="flex items-center justify-between">
              <div className='flex items-center gap-[6px] lg:gap-3'>
                <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                  Tue, 24
                </p>
                <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
                  10:00 AM
                </p>
              </div>
              <span className='w-5 h-5 lg:w-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                <img src={videoIcon} alt="" />
              </span>
            </div>

            <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
              Consultation
            </div>

            <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
              <img src={avatarIcon} alt="" />
              <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>Assudin Owassi</h4>
            </div>

          </div>
        </div>
        </div>
      </div>
    </section>
    {/*===============feature section end======================= */}

    {/*===============our great lawyers==========================*/}
    <section className='bg-amber-50'>
      <div className="container">
      <div className="xl:w-[470px] mx-auto">
          <h2 className='heading text-center'>Our great lawyers</h2>
          <p className='text__para text-center'>Our team of experienced lawyers is dedicated to delivering outstanding results for our clients.</p>
        </div>

        <LawyerList/>

      </div>
    </section>
    {/*===============our great lawyers==========================*/}

    {/*===============faq section================================ */}
    <section className='bg-amber-50'>
      <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-0'>
          <div className='w-1/2 hidden md:block'><img src={faqImg} alt=""  className='h-[600px] w-[480px] rounded-lg'/></div>

          <div className='w-full md:w-1/2'>
            <h2 className='heading'>Commonly asked questions from our clients</h2>

            <FaqList/>
          </div>

        </div>
      </div>
    </section>
    {/*===============faq section end================================ */}

    {/*================testimonial=================================== */}
    <section className='bg-amber-50'>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className='heading text-center'>What our clients say</h2>
          <p className='text__para text-center'>Clients' satisfaction and success are our top priorities. </p>
        </div>
        <Testimonial/>
      </div>
    </section>
    {/*================testimonial end=================================== */}

  </>
};

export default Home;
