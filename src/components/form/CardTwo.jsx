import React from 'react'

function CardTwo({element}) {
  return (
    <div>
      <div className="flex flex-col ml-16  border-2 border-[red] h-[50vh] w-[70%] p-4 text-center">
              <span className="text-[red] flex justify-center mt-6 text-[50px]">
                {element.icon}
              </span>

              <p className="font-medium mt-6">
               {element.content}
              </p>
            </div>
    </div>
  )
}

export default CardTwo
