import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
} from 'react';

type ExampleContext = {
  name: string;
  changeName: (n: string) => void;
};

const ExampleContext = createContext<ExampleContext>(
  {} as unknown as ExampleContext
);

export const ExampleProvider: React.FC = ({ children }) => {
  const [name, setName] = useState('');

  const changeName = useCallback(
    (n: string) => {
      setName(n);
    },
    [setName]
  );
  const contextValue = useMemo(() => {
    return { name, changeName };
  }, [name, changeName]);

  return (
    <ExampleContext.Provider value={contextValue}>
      {children}
    </ExampleContext.Provider>
  );
};

export const useExample = () => {
  const exampleContext = useContext(ExampleContext);
  if (
    typeof exampleContext.name === undefined ||
    typeof exampleContext.changeName === undefined
  ) {
    throw new Error('ExampleProvider is not wrapped in the tree');
  }

  return exampleContext;
};
