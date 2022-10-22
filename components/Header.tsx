import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
    return (
        <div className="mt-2">
            <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Global">
                <div className="flex flex-1 items-center">
                    <div className="flex w-full items-center justify-between md:w-auto">
                        <a href="#">
                            <span className="sr-only">Your Company</span>
                            {/* <Image src="https://rb.gy/vsvv2o" alt="logo" layout='fill' objectFit="contain" /> */}
                            {/* <h2 className='text-red-500 font-extrabold'>KwanJai</h2> */}
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                            <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:ml-10 md:block md:space-x-10">
                        <Link href="#" className="font-medium text-gray-500 hover:text-gray-900">Product</Link>
                        <Link href="#" className="font-medium text-gray-500 hover:text-gray-900">Features</Link>
                        <Link href="#" className="font-medium text-gray-500 hover:text-gray-900">Marketplace</Link>
                        <Link href="#" className="font-medium text-gray-500 hover:text-gray-900">Company</Link>
                    </div>
                </div>
                <div className="hidden text-right md:block">
                    <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                        <a href="#" className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-600 hover:bg-gray-50">Log in</a>
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Header