import { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { login } from "../Redux/authaction";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Login = () => {


    return (
      <div>
        
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
      
        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
        
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button className="submit" >Login</button>

      </div>
    );
  };