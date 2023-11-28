import React from 'react'
import IconCopy from "../assets/IconCopy.svg"

export default function Footer() {
  return (
    <div className="footer">
      <div className="flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-0 xl:justify-between w-full p-4">
  <div>
    <p className="text-center">
    <img src={IconCopy} alt="IconCopy" /> 
      <b>{new Date().getFullYear()}<span className="mensaje-dev"> Codesing.</span></b> Todos
      los derechos reservados.
    </p>
  </div>
</div>
    </div>
  )
}
