import React from 'react';

type ExampleContext = {
  name: string;
  changeName: (n: string) => void;
};

export const ExampleContext = React.createContext<ExampleContext>(
  undefined as unknown as ExampleContext
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
  if (typeof exampleContext === undefined) {
    throw new Error('ExampleProvider is not wrapped in the tree');
  }

  return exampleContext;
};
