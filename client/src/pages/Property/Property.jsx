import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProperty } from '../../utils/api';
import { PuffLoader } from 'react-spinners';
import { AiFillHeart } from 'react-icons/ai';

import "./Property.css"

const Property = () => {
  const {pathname} = useLocation();

  const id = pathname.split("/").slice(-1)[0];
  const {data, isLoading, isError} = useQuery(["residencies", id], () => getProperty(id));

  console.log(data);

  if (isLoading) {
    return (
      <div className='wrapper'>
         <div className="flexCenter paddings">
               <PuffLoader/>
         </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="wrapper">
          <div className="flexCenter paddings">
             <span>Error While fetching the property details</span>
          </div>
      </div>
    )
  }

  return (
    <div className='wrapper'>
        <div className="felxColStart paddings innerWidth property-container">

          {/* Like button */}
            <div className='like'>
                <AiFillHeart/>
            </div>

            {/* image */}
            <img src={data?.image} alt="home image" />
        </div>
    </div>
  )
}

export default Property