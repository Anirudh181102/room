import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div className="image">
                <a className="navbar-brand" href="#">
                    <img src="data:image/jpeg;base64,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" 
                    height={60} width={60}
                    alt="thapar image"/>                    
                </a>
            </div>
            <div>
                <h2>Thapar Room Booking System</h2>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
        </div>
    </nav>
  )
}
