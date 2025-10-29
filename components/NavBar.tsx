import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header>
        <nav>
            <Link href="/" className="logo">
            <Image src="/icons/logo.png" alt='Logo' width={24} height={24}/> 
            <p>Dev Events</p>
    
            </Link>

            <ul>
                <Link href="#events">
                    Home
                </Link>
                <Link href="#about">
                    Events
                </Link>
                <Link href="#contact">
                    Create Event
                </Link>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar