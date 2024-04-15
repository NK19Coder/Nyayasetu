import React from 'react';
import Header from '../components/Header/Header.jsx'
import './Form.css';
import { Link } from 'react-router-dom';
function Form() {
  return (
    <div className="container ">
  <div  className="bg-primary text-white border border-primary shadow-lg p-4 ">
    
  <div className="bg-primary text-black py-10 px-4 font-bold text-center text-[40px] font-serif">
          <h5>Lawyer Registration Form</h5>
        </div>
        <div className='flex items-center justify-center'>
  <form className="w-full max-w-lg ">
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          First Name
        </label>
        <input
          id="grid-first-name"
          type="text"
          placeholder="Jane"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label htmlFor="grid-last-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Last Name
        </label>
        <input
          id="grid-last-name"
          type="text"
          placeholder="Doe"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
      
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label htmlFor="grid-gender" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Gender
        </label>
        <select
            id="grid-state"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Choose</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
      </div>
    </div>
    
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label htmlFor="grid-email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Email
        </label>
        <input
          id="grid-email"
          type="email"
          placeholder="example@gmail.com"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label htmlFor="grid-phone" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Phone Number
        </label>
        <input
          id="grid-phone"
          type="mobile"
          placeholder="+91 995 384 7370"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        
      </div>
    </div>
    
    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label htmlFor="grid-aadhaar" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Aadhaar Number
        </label>
        <input
          id="grid-aadhaar"
          type="text"
          placeholder="Enter your Aadhaar Number"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>

      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label htmlFor="grid-age" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Age
        </label>
        <input
          id="grid-age"
          type="number"
          placeholder="Enter your License Number"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>


      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          State
        </label>
        <div className="relative">
          <select
            id="grid-state"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="default">Choose</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
  <option value="Lakshadweep">Lakshadweep</option>
  <option value="Delhi">Delhi</option>
  <option value="Puducherry">Puducherry</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      </div>


      <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3 mt-5">
        <label htmlFor="grid-address" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Address
        </label>
        <input
          id="grid-address"
          type="text"
          placeholder="Permanent Address"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
    </div>  



    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label htmlFor="grid-city" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          City
        </label>
        <input
          id="grid-city"
          type="text"
          placeholder="Enter your City"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>

      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label htmlFor="grid-zip" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Zip Code
        </label>
        <input
          id="grid-zip"
          type="number"
          placeholder="110063"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>


      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label htmlFor="grid-res" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Indian Residence
        </label>
        <div className="relative">
          <select
            id="grid-res"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="default">Choose</option>
            <option value="Andhra Pradesh">Yes</option>
            <option value="Arunachal Pradesh">No</option>
 
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      </div>


      <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3 mt-5">
        <label htmlFor="grid-practice" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Practicing At
        </label>
        <select
            id="grid-practice"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Choose</option>
            <option>Supreme Court</option>
            <option>High Court</option>
            <option>District Court</option>
          </select>
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label htmlFor="grid-degree" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Degree
        </label>
        <select
            id="grid-degree"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Choose</option>
            <option>Bachelors of Law</option>
            <option>Masters of Law</option>
            <option>Bachelor of Civil Law</option>
            <option>Master of Legal Studies</option>
            <option>Dual Degrees</option>
            <option>Online Law Degree</option>
          </select>
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label htmlFor="grid-exp" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Experience
        </label>
        <textarea className='text-black bg-[#E5E7EB] rounded-lg' name="grid-exp"  cols="56" rows="10" placeholder='Description about your previous work/cases.'></textarea>
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label htmlFor="grid-year" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Years of Experience
        </label>
        <input
          id="grid-year"
          type="number"
          placeholder=""
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>

      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label htmlFor="grid-license" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          License Number
        </label>
        <input
          id="grid-license"
          type="text"
          placeholder="Enter your License Number"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>


      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Pro Bono
        </label>
        <div className="relative">
          <select
            id="grid-state"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="default">Interested or not</option>
            <option value="Andhra Pradesh">Yes</option>
            <option value="Arunachal Pradesh">No</option>
  
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      </div>
      
      <div className='flex -mx-3 mb-2'>
      <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-5">
          Upload your image
        </label>
      <input className='mt-5' type="file" />

      <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-5">
          Upload your degree
        </label>
      <input className='mt-5' type="file" />
      </div>
      <div className='flex justify-center'>
        <button type='submit' className='btn'><Link to='/login'>Submit</Link></button>
      </div>
     

  </form>
</div>
</div>
</div>

  );
}

export default Form;