import React from 'react'
import Image from 'next/image'

export default function Devimg({ containerStyle, imgSrc }) {
  return (
    <div className={`${containerStyle}`}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  )
}
