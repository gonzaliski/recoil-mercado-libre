import React, { useEffect, useState } from "react"


 function SearchForm(props) {
 
    const handleSubmit = (e)=>{
      e.preventDefault()
      if(props.onSearch){
        props.onSearch(e.target.search.value)
      }
    }
      return (
        <form onSubmit={handleSubmit} className="search__form">
          <input type="text" name="search" className="search__form-input"></input>
          <button className="search__form-button">{"Buscar"}</button>
        </form>
      );
    }
  

  export { SearchForm}