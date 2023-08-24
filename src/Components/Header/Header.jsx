import { useState } from 'react';
import logo from '/images/logo.svg'
import closeLogo from '/images/icon-close-menu.svg'
import hamburger from '/images/icon-hamburger.svg'


const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    const setMobileMenu = () => {
        setShowMenu(!showMenu)
    }


    return (

        <>
            <header className='relative   '>
                <nav className='flex items-center mx-auto py-10 w-[90%] max-w-6xl'>
                    <a href="#" className='lg:ml-5' aria-label='website-Logo'><img src={logo} alt="" /></a>
                    <button className='block lg:hidden absolute top-[40%] right-[5%] z-[3]' onClick={setMobileMenu} aria-label="mobile-menu" role="button" >
                        <img src={!showMenu ? hamburger : closeLogo} alt="mobile-nav-logo" />
                    </button>
                    <div className={`absolute top-0 pt-20 left-0 px-[5%] w-full h-screen z-[2] bg-gradient-to-b from-[#00000080] to-transparent ${showMenu ? "block" : "hidden"} lg:static lg:w-auto lg:h-auto lg:block lg:bg-none lg:ml-auto lg:p-0`}>
                        <ul className='flex flex-col lg:flex-row lg:gap-3'>
                            <li className='list-none bg-white lg:bg-inherit lg:text-white cursor-pointer py-5 px-4 rounded-t-xl lg:p-0'><a href="" className='w-full no-underline block text-xl font-medium'>About</a></li>
                            <hr />
                            <li className='list-none bg-white lg:bg-inherit lg:text-white cursor-pointer py-5 px-4 lg:p-0'><a href="" className='w-full no-underline block text-xl font-medium'>Discover</a> </li>
                            <hr />
                            <li className='list-none bg-white lg:bg-inherit lg:text-white cursor-pointer py-5 px-4 rounded-b-xl lg:p-0'><a href="" className='w-full no-underline block text-xl font-medium'>Get Started</a></li>
                        </ul>
                    </div>
                </nav>
            </header >
        </>
    )

}

export default Header;