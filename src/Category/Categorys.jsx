import CategoryBox from './CategoryBox'
 import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
 import { BiFootball , BiHeart,BiSolidBadgeDollar, BiSolidHandLeft, BiRun,BiCool,BiMove, BiChair, } from "react-icons/bi";
 import { IoMdFootball } from "react-icons/io";

import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi'
import { FaSkiing,FaFootballBall,FaChess } from 'react-icons/fa'
import { RiVerifiedBadgeFill } from "react-icons/ri";

import { BsSnow } from 'react-icons/bs'
import { IoDiamond,IoFolderOpenOutline } from 'react-icons/io5'
import { MdOutlineVilla,MdSportsCricket } from 'react-icons/md'

const Categories = () => {


 const categories = [
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
    
   
      <div className='pt-4 flex items-center justify-between overflow-x-auto'>
        {categories.map(item => (
          <CategoryBox key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
   
  )
}

export default Categories