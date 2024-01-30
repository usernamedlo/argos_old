import Container from "@/components/Container";
import { Layout } from "@/components/Layout";
import ClientOnly from "@/components/features/layout/ClientOnly";

export default function Home() {
  return (
    <ClientOnly>
      <Container>
        <Layout>
          <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-[#FF0080] to-[#7928CA]">
            Welcome to the home page!
          </h1>
        </Layout>
      </Container>
    </ClientOnly>
  );
}
