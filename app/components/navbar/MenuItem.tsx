'use client'

import React from "react";

interface MentItemProps {
    onClick: ()=>void;
    label:string
}

const MenuItem:React.FC<MentItemProps> = ({onClick,label}) => {
  return (
    <div className="px-4 transition font-semibold py-3 hover:bg-neutral-100" onClick={onClick}>{label}</div>
  )
}

export default MenuItem