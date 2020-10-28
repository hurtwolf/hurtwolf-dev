import React from 'react'

export default function container({children}) {
  return (
    <div className="container mx-auto pt-6 px-6">
      {children}
    </div>
  )
}