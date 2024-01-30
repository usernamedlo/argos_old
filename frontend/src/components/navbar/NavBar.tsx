'use client';

// COMPONENTS
import { NavDesktop } from '@/components/navbar/NavDesktop';
import { NavMobile } from '@/components/navbar/NavMobile';
import Logo from '@/components/navbar/Logo';
import WalletConnect from './WalletConnect';

export const NavBar = () => {

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#07090B]/60">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-[4.5rem]">
        <Logo />
        <NavDesktop />
        <NavMobile />
      </nav>
    </div>
  );
};

export default NavBar;
