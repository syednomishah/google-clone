import React from 'react'
import { Triangle } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
        <Triangle color="#00BFFF" height={100} width={100} />
    </div>
  )
}
