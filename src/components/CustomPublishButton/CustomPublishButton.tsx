import React from 'react'

type CustomPublishButtonProps = {
  onClick?: () => void
}

export const CustomPublishButton= ({ onClick }: CustomPublishButtonProps)=> {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-5 py-2.5 rounded-xl 
                 bg-gradient-to-r from-green-500 to-green-600 
                 text-white font-semibold shadow-md hover:shadow-lg 
                 hover:from-green-600 hover:to-green-700 
                 active:scale-95 transition-all"
    >
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-white"
      >
        <path d="M12 19V6M5 12l7-7 7 7" />
      </svg>

      {/* Label */}
      <span>Publish</span>
    </button>
  )
}

