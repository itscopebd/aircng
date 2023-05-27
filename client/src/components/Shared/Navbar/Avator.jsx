import React, { useContext } from 'react';
import avatorImage from "../../../assets/images/placeholder.jpg";
import { AuthContext } from '../../../providers/AuthProvider';
const Avator = () => {
const {user}= useContext(AuthContext)

 return <img className='rounded-full' src={user && user.photoURL? user.photoURL :avatorImage} alt="profile" style={{height:"30px", width:"30px"}} />;
};

export default Avator;