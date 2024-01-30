// Components
import Container from "@/components/Container";
import NavBar from "@/components/navbar/NavBar";

// Types
import { LayoutChildrenProps } from "@/types";

export const Layout = ({ children }: LayoutChildrenProps) => {
  return (
    <Container>
      <div className="flex flex-col min-h-screen mt-20">
        <div className="flex-1 m-auto py-5 px-11 w-full flex-grow space-y-10">{children}</div>
      </div>
    </Container>
  )
};