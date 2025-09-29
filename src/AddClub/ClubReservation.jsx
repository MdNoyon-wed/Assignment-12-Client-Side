import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../Button/Button';
// import { DateRange } from 'react-date-range';
 
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

// error aca



const ClubReservation = ({club}) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
        <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden '>
      <div className='flex items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {club?.price}</div>
        <div className='font-light text-neutral-600'>night</div>
      </div>
      <hr />
      <div className='flex justify-center'>{/* Calender */}

        <DateRange
        showDateDisplay={false}  
  editableDateInputs={true}
  onChange={item => setState([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={state}
/>
      </div>
      <hr />
      <div className='p-4'>
        <Button label={'Reserve'} />
      </div>
      <hr />
      <div className='p-4 flex items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>${club?.price}</div>
      </div>
    </div>
 
  );
};

ClubReservation.propTypes = {
  club: PropTypes.object,
}

export default ClubReservation;