import { ExampleProvider } from "./example-provider";

const Providers: React.FC = ({ children }) => {
  return <ExampleProvider>{children}</ExampleProvider>;
};

export default Providers;
