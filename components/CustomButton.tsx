"use client"

import Image from "next/image"
import { CustomButtonProps } from "@/types"

export default function CustomButton({ title, containerStyles, handleClick, btnType }: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`
        flex flex-row relative justify-center items-center py-3 px-6 outline-none 
        ${containerStyles} 
      `}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}
