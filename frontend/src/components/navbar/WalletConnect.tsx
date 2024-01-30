'use client';

// RAINBOW  KIT
import { ConnectButton } from '@rainbow-me/rainbowkit';

const WalletConnect = () => {

  return (
    <div className=''>
      <ConnectButton
        label='Sign in'
        accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full',
        }}
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }}
      />
    </div>
  )
};

export default WalletConnect;
