import React, { useEffect } from 'react'
import { useCarStore } from '../globals/car'
import { useLocation, useParams } from 'react-router-dom'

const CarDetails = () => {
  let { state } = useLocation()

  return (
    <div>
      {state ? (
        <>
          <h3>{state.car.name}</h3>
          <p>{state.car.brand}</p>
          <p>{state.car.acceleration}</p>
        </>
      ) : (
        <p>No car available</p>
      )}
    </div>
  )
}

export default CarDetails