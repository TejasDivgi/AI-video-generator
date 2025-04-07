'use client'
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import CustomLoading from './_components/CustomLoading'
import { generateMP4FromScript } from '../../api/generate-audio/TextGen';

function CreateNew() {
  // Initialize formData as an object
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [VideoScript, setVideoScript] = useState();
  // Handle input change and update formData
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  // Function to trigger video script generation
  const onCreateClickHandler = () => {
    getVideoScript();
  };

  // Updated fetch call with POST method and proper headers/body
  const getVideoScript = async () => {
    setLoading(true);
    const prompt = `Write a script to generate ${formData.duration} seconds video on topic: ${formData.topic} along with AI image prompt in ${formData.imageStyle} format for each scene and give me result in JSON format with imagePrompt and ContentText as fields.`;
    console.log("Prompt:", prompt);
  
    try {
      const response = await fetch('/api/get-video-script', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log("API Response:", data.result);
      // Save the video script in the videoScript state variable
      setVideoScript(data.result);

      await generateMP4FromScript(data.result);
    } catch (error) {
      console.error("Error calling API:", error);
    }
    setLoading(false);
  };

  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-4xl text-primary text-center'>Create New</h2>
      <div className='mt-10 shadow-md p-10'>
        {/* Select Topic */}
        <SelectTopic onUserSelect={onHandleInputChange} />

        {/* Select Style */}
        <SelectStyle onUserSelect={onHandleInputChange} />

        {/* Select Duration */}
        <SelectDuration onUserSelect={onHandleInputChange} />

        {/* Create Button */}
        <button
          onClick={onCreateClickHandler}
          className='mt-10 w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 h-10 flex items-center justify-center text-center'
        >
          Create Video
        </button>
      </div>
      <CustomLoading loading={loading}/>
          </div>
  );
}

export default CreateNew;
