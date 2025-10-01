import React, { useState } from 'react';
import AddClubForm from '../../../Form/AddClubForm';
import useAuth from '../../../Hook/useAuth';
import { imageUpload } from './api/utils';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { useMutation } from '@tanstack/react-query';
import { useForm } from "react-hook-form"


const AddClub = () => { 
  const axiosSecure = useAxiosSecure()
  const {user}=useAuth()

  const [dates ,setDates]=useState({
        
      startDate: new Date(),
      endDate: null,
      key: 'selection'
  })
  console.log(dates)
  const handleDates = item => {
    console.log(item)
    setDates(item.selection)
  }
  
  const {mutateAsync} = useMutation({
    mutationFn:async (clubData)=> {
      const {data} = await axiosSecure.post(`/club`,clubData)
      return data
    },
    onSuccess:() => {
      console.log('data save')
    }
  })

  const {register,handleSubmit}=useForm()

    const onSubmit = async (formData) => {
          const imageFile = formData.image
    let image_url = "";

    if(imageFile) {
              image_url = await imageUpload(imageFile)

    }
       const clubData = {
    name: formData.name,   // example: input field
    category: formData.category, // example: dropdown
    image: image_url,      // save uploaded image url
  };
    await mutateAsync(clubData)


    }






  return (
    <div>

        <AddClubForm dates={dates} 
        handleDates={handleDates}
        handleSubmit={handleSubmit}
        register={register}
         onSubmit={onSubmit}/>
    </div>
  );
};

export default AddClub;