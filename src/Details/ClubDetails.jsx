import React from 'react';
 import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import LoadingSpinner from '../Loading/LoadingSpinner';
import useAxiosCommon from '../Hook/useAxiosCommon';
import ClubReservation from '../AddClub/ClubReservation';
import Container from '../Container/Container';
import Helmet from '../Helmet/Helmet';
import Heading from '../Heading';


const ClubDetails = () => {
     const {id} = useParams()
    const axiosCommon = useAxiosCommon();

  const { data: club = {} ,isLoading} = useQuery({
  queryKey: ['club', id],
  queryFn: async () => {
    const {data} = await axiosCommon.get(`/club/${id}`);
    console.log(data)
    // id assca na

    return  data; 
    
  },
});

if (isLoading) return  <span className="loading loading-bars loading-xl"></span>





  return (

     <Container>
      <Helmet>
        <title>{club?.title}</title>
      </Helmet>
      {club && (
        <div className='max-w-screen-lg mx-auto'>
          {/* Header */}
          <div className='flex flex-col gap-6'>
            <div>
              <Heading title={club.title} subtitle={club.location} />
              <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img
                  className='object-cover w-full'
                  src={club.image}
                  alt='header image'
                />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            {/* Room Info */}
            <div className='col-span-4 flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <div
                  className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
                >
                  <div>Hosted by {club?.host?.name}</div>

                  <img
                    className='rounded-full'
                    height='30'
                    width='30'
                    alt='Avatar'
                    src={club?.host?.image}
                  />
                </div>
                <div
                  className='
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              '
                >
                  <div>{club?.guests} guests</div>
                  <div>{club?.bedrooms} rooms</div>
                  <div>{club?.bathrooms} bathrooms</div>
                </div>
              </div>

              <hr />
              <div
                className='
          text-lg font-light text-neutral-500'
              >
                {club?.description}
              </div>
              <hr />
            </div>

            <div className='md:col-span-3 order-first md:order-last mb-10'>
           
           
              <ClubReservation club={club} />
            </div>
          </div>
        </div>
      )}
    </Container>



  );
};

export default ClubDetails;