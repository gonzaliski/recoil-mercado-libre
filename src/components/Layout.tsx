import React, { useState,useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SearchForm } from "./SearchForm";

function Layout(){
    let navigate = useNavigate()
  
    async function handleSearch(searchQuery){
      // buscar e impactar el state 
      navigate(`/search/${searchQuery}`, { replace: true });
    };
    return (
      <div>
        <header className="search__header">
          <SearchForm onSearch={handleSearch}/>
        </header>
        <section className="content">
          <Outlet/>
        </section>
      </div>
    );
  }


export { Layout };