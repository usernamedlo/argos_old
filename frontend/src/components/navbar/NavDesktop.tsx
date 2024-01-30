// ROOT
import { routes } from "@/lib/routes";

// COMPONENTS
import { Button } from "@/components/ui/button";
import WalletConnect from './WalletConnect';

export const NavDesktop = () => {
  return (
    <>
      <ul className="hidden lg:flex lg:items-center gap-5">
        {routes.map((route) => {
          const { key, href, label } = route;
          return (
            <li key={key}>
              <Button
                onClick={() => window.location.href = href}
                variant={"navLink"}
                className="glow"
              >
                {label}
              </Button>
            </li>
          );
        })}
      </ul>
      <div className="hidden lg:block">
        <WalletConnect />
      </div>
    </>
  );
};
