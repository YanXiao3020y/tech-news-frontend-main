'use client'
import React from 'react'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import ExpandMenu from './ExpandMenu'
import TagButton from './TagButton'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
  const navList: Array<string> = ['NEWS', 'PRODUCTS', 'TOOLS']
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="bg-gray-100 h-[75px] w-full min-h-[70px] flex justify-center items-center sticky top-0 z-10">
      <Link href="/">
        <div className="no-select absolute top-0 left-6 w-10 h-[75px] flex items-center justify-center">
          <Image src="/favicon.ico" alt="icon" width="40" height="40" />
        </div>
      </Link>
      <div className="relative no-select w-80 sm:w-[400px] h-full flex justify-around items-center">
        {/* <div
          className="cursor-pointer font-inknut text-center text-[0.8rem] sm:text-[1rem] h-full relative inline-block leading-[75px]"
          onMouseOver={() => {
            setIsActive(true)
          }}
          onMouseLeave={() => {
            setIsActive(false)
          }}
        >
          NEWS
          <FontAwesomeIcon className="h-5 w-5 ml-2.5" icon={faChevronDown} />
          <ExpandMenu status={isActive} />
        </div> */}
        {navList.map((item, index) => {
          return (
            <Link
              className="font-inknut text-[0.8rem] sm:text-[1rem] h-full relative inline-block leading-[75px]"
              href={`/${item.toLowerCase()}`}
              key={index}
            >
              {item}
            </Link>
          )
        })}
      </div>
      <div className="absolute right-4">
        <Link href="/about">
          <TagButton color="#3389FF">
            <span className="font-inknut text-xs">ABOUT</span>
          </TagButton>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
