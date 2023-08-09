import React from 'react';


export default function LoadingSpinner(props: any) {
    return(
        <div className="d-flex align-items-center justify-content-center" style={mainLoadingSpinner}>     
            <div className="spinner-border " role="status" style={spinnerStyle}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

const spinnerStyle = {
 
}

const mainLoadingSpinner = {
    backgroundColor: "#F7F7F7",
    width: "100vw",
    height: "100vh"

 }