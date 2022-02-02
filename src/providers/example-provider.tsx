import React from 'react';

type ExampleContext = {
  name: string;
  changeName: (n: string) => void;
};

const ExampleContext = React.createContext<ExampleContext>(
  {} as unknown as ExampleContext
);

export const ExampleProvider: React.FC = ({ children }) => {
  const [name, setName] = React.useState('');

  const changeName = React.useCallback(
    (n: string) => {
      setName(n);
    },
    [setName]
  );

  const contextValue = React.useMemo(() => {
    return { name, changeName };
  }, [name, changeName]);

  return (
    <ExampleContext.Provider value={contextValue}>
      {children}
    </ExampleContext.Provider>
  );
};

export const useExample = () => {
  const exampleContext = React.useContext(ExampleContext);
  if (
    typeof exampleContext.name === undefined ||
    typeof exampleContext.changeName === undefined
  ) {
    throw new Error('ExampleProvider is not wrapped in the tree');
  }

  return exampleContext;
};
