import React from 'react'
import cat from '../../cat.jpg';

function ProfilePhoto() {
  return (
      <div>
          <img style={{height:"230px",width:"230px"}} className='profile-photo' src={cat} alt='' />
    </div>
  )
}

export default ProfilePhoto