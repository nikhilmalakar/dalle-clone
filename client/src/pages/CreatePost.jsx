import { useState } from "react";
import React from 'react';

import preview from '../assets/preview.png';  
import { useNavigate } from "react-router-dom";

import { FormField, Loader } from "../components";


const CreatePost = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState(
    {
      name : "",
      prompt: "",
      image : "",
    }
  );

  const [generateImage, setGenerateImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () =>{

  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  }

  const generateImageFromPrompt = () => {

  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className='font-bold text-[#222328] text-[32px]'>Create Now!</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>Use DALL-E AI to generate stunning visuals for you</p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName = "Your name"
            type = "text"
            name = "name"
            placeholder = "John Doe"
            value = {form.name}
            handleChange = {handleChange}
            />
          <FormField
            labelName = "Prompt"
            type = "text"
            name = "prompt"
            placeholder = "Earth from moon using a vintage camera"
            value = {form.prompt}
            handleChange = {handleChange}
            />

            <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
            w-64 p-3 h-64 flex justify-center items-center">
              {form.image ? (
                <img 
                  src = {form.image}
                  alt = {form.prompt}
                  className="w-full h-full object-contain"
                />
                ) : 
                <img 
                src = {preview}
                alt = "Preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
                />
              }

              {generateImage && 
                <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                  <Loader />
                </div>
              }
            </div>
        </div>

        <div className="mt-5 flex gap-5">
            <button
              type="button"
              onClick={generateImageFromPrompt}
              className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                {generateImage ? "Hold On!" : "Generate"}
              </button>
              
        </div>
      </form>
    </section>
  )
}

export {CreatePost}