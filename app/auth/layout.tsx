import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-full flex justify-center p-2 items-center'>
        {children}
    </div>
  )
}

export default layout