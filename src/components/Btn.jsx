/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

const Btn = ({ text, classes, navigateTo }) => {
  const navigate = useNavigate("");
  return (
    <button
      onClick={() => navigate(navigateTo)}
      className={`group hover:after:content-[${text}] inline-block rounded-full p-[2px] px-3 py-3 text-sm transition-all duration-150 ease-in-out ${classes}`}
    >
      {text}
    </button>
  );
};

export default Btn;
