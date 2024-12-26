import React from 'react'
import { Link } from "react-router-dom";


function HomePage() {
    return (
      <>
        <div>
          <button className="text-white bg-blue-600 m-4 p-1 rounded">
            <Link to="/properties">View Properties</Link>
          </button>
          <button className="text-white bg-blue-600 m-4 p-1 rounded">
            <Link to="/clients">View Clients</Link>
          </button>
        </div>
      </>
    );
  }

export default HomePage


