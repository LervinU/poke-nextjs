import React, { useRef } from 'react';

export default function SearchBar(props: any) {
  const inputRef = useRef(null);
  
    return (
        <div className="input-group d-flex align-items-center justify-content-center">
        <div className="form-outline w-50">
          <input ref={inputRef} type="search" id="form1" className="form-control form-control-lg" placeholder="Search" />
        </div>
        <button type="button" onClick={() => props.onSearch(inputRef)} className="btn btn-secondary btn-lg">
          <i className="bi bi-search"></i>
        </button>
      </div>
    )
}