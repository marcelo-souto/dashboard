import { Link } from "react-router";
import { Container } from "@/components/ui/container";

const HomePage = () => {
  return (
    <Container
      as="main"
      className="border border-red-950 bg-red-300 hover:bg-red-600"
    >
      <h1>Welcome to the Home Page</h1>
      <Link to="dashboard">Dashboard</Link>
    </Container>
  );
};

export { HomePage };
