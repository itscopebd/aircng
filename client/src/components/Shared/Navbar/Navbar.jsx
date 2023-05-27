import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import MenuDropdown from './MenuDropdown';

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-5 border-b-[1px]'>
                <Container>
                    <div className='flex flex-row gap-5 md:gap-0 items-center justify-between'>
                        <div>
                            <Logo></Logo>
                        </div>
                        <div><Search/></div>
                        <div><MenuDropdown/></div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;