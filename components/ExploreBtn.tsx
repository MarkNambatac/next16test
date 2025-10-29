'use client'
import Image from 'next/image'
import React from 'react'

const ExploreBtn = () => {
    return (
        <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={() => console.log("CLICK")}>
            <a href="#events" className="href">  Explore Button
                <Image src="/icons/arrow-down.svg" alt="arrow-down" height={24} width={24}/>
            </a>
        </button>

    )
}

export default ExploreBtn