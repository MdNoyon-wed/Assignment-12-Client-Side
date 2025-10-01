import { useState } from "react";
 
import { DateRange } from 'react-date-range';
 import { IoMdFootball } from "react-icons/io";
 import { BiFootball , BiHeart,BiSolidBadgeDollar, BiSolidHandLeft, BiRun,BiCool,BiMove, BiChair, } from "react-icons/bi";
 
import { FaSkiing,FaFootballBall,FaChess } from 'react-icons/fa'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineVilla,MdSportsCricket } from 'react-icons/md'

import { GiCactus } from "react-icons/gi";
import { imageUpload } from "../AddClub/DashboardLayout/Host/api/utils";

const AddClubForm = ({dates,handleDates,handleSubmit,onSubmit,register}) => {


  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: null,
  //     key: 'selection2'
  //   }
  // ]);

   const Categories = [
     {
       label: 'Football',
       icon: IoMdFootball,
       description: 'One Team, One Dream!',
     },
     {
       label: 'Basketball',
       icon: FaFootballBall ,
       description: ' The Game, The Grind, The Glory!',
     },
     {
       label: 'Cricket',
       icon: MdSportsCricket,
       description: 'I love Cricket!',
     },
     {
       label: 'Dollar',
       icon: BiSolidBadgeDollar,
       description: 'This is Dollar!',
     },
     {
       label: 'Football2',
       icon: BiFootball,
       description: 'This is property has a beautiful pool!',
     },
     {
       label: 'Chair',
       icon: BiChair,
       description: 'This Chair!',
     },
     {
       label: 'Cool-Bro',
       icon:BiCool ,
       description: 'This property is near a lake!',
     },
     {
       label: 'Skiing',
       icon: FaSkiing,
       description: 'This property has skiing activities!',
     },
     {
       label: 'Move',
       icon: BiMove,
       description: 'This property is an ancient castle!',
     },
     {
       label: 'Caves',
       icon: RiVerifiedBadgeFill ,
       description: 'This property is in a spooky cave!',
     },
     {
       label: 'Run',
       icon: BiRun,
       description: 'This property offers camping activities!',
     },
     {
       label: 'Chess',
       icon:FaChess ,
       description: 'This property is in arctic environment!',
     },
     {
       label: 'Desert',
       icon: GiCactus,
       description: 'This property is in the desert!',
     },
     {
       label: 'Barns',
       icon:BiHeart,
       description: 'This property is in a barn!',
     },
     {
       label: 'Hand',
       icon: BiSolidHandLeft,
       description: 'This property is brand new and luxurious!',
     },]



  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>

            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Location
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                {...register("location")}
      
                type='text'
                placeholder='Location'
                required
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
                Category
              </label>
              <select
                required
                className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                 {...register("category")}
              >
                {Categories.map((category) => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>




            </div>


            <div className='space-y-1'>
              <label htmlFor='location' className='block text-gray-600'>
                Select Availability Range
              </label>
              {/* Calender */}
              <DateRange
              
                editableDateInputs={true}
                onChange={item =>handleDates(item)}
                moveRangeOnFirstSelection={false}
                  // ranges={[dates.startDate,dates.endDate]}
                  ranges={[dates]}
                  
              />
            </div>
          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
                Title
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                 
              {...register("title")}
                type='text'
                placeholder='Title'
                required
              />
            </div>

            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                      Upload Image
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                  Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                   {...register("price")}
                  type='text'
                  placeholder='Price'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='guest' className='block text-gray-600'>
                  Total guest
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  {...register("total_guest")}
                  type='number'
                  placeholder='Total guest'
                  required
                />
              </div>
            </div>

            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='bedrooms' className='block text-gray-600'>
                  Bedrooms
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  {...register("bedrooms")}
                  type='number'
                  placeholder='Bedrooms'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='bathrooms' className='block text-gray-600'>
                  Bathrooms
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='bathrooms'
                  id='bathrooms'
                  type='number'
                  placeholder='Bathrooms'
                  required
                />
              </div>
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Description
              </label>

              <textarea
                {...register("description")}
                
                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
             
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Save & Continue
        </button>
      </form>
    </div>
  )
}

export default AddClubForm