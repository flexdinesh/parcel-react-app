import { ExampleProvider } from './example-provider';

export const Providers: React.FC = ({ children }) => {
  return <ExampleProvider>{children}</ExampleProvider>;
};
