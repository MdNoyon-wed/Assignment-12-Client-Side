 import { useQuery } from '@tanstack/react-query';
 import useAxiosSecure from '../Hook/useAxiosSecure'

import React from 'react';

import ClubCard from '../Card/ClubCard';
import useAxiosCommon from '../Hook/useAxiosCommon';
import { useSearchParams } from 'react-router';

const Club = () => {

 

  const axiosCommon = useAxiosCommon();
  const [params, setParams]=useSearchParams()
  const category = params.get('category')


  

  const { data: clubs = [], isLoading, error } = useQuery({
  queryKey: ['clubs',category],
  queryFn: async () => {
    const res = await axiosCommon.get(`/clubs?category=${category}`);

    return res.data; 
  },
});
 

  if (isLoading) {
    return <div className="text-center py-20">Loading clubs...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Failed to load clubs.</div>;
  }

 

  return (

    <div>
      {Array.isArray(clubs) && clubs.length > 0 ? (
  <div className="grid grid-cols-3 md:grid-cols-2 mt-10 sm:grid-cols-1 border">
    {clubs.map(club => (
      <ClubCard key={club._id} club={club} />
    ))}
  </div>
) : (
  <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
    <p className="text-gray-500">No Clubs Available!</p>
  </div>
)}


    </div>
  
  );
};

export default Club;
