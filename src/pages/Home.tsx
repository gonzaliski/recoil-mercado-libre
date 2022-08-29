import React, { useState,useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SearchForm } from "../components/SearchForm";

function Home(){
 
    return (
      <div>
        <h2 className="welcome__title">Buscá un producto</h2>
      </div>
    );
  }


export { Home };