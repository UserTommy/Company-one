import React from 'react'

const Content = ( {children} ) => {
return (
    <>
        <div className='content mt-[90px] mx-auto container flex flex-col gap-[90px] px-[20px]'>{children}</div>
    </>
)
}

export default Content