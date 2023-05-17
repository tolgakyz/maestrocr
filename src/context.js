import {createContext, useState} from 'react';

const ContentContext = createContext();

export function ContentProvider({children}) {
  const [content, setContent] = useState('');
  const values = {
    content,
    setContent,
  };
  return (
    <ContentContext.Provider value={values}>{children}</ContentContext.Provider>
  );
}

export default ContentContext;
