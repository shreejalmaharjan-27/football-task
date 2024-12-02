import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/NotFound';
import Layout from './Components/Layout';

function App() {
  const context = require.context('./Pages', false, /\.js$/);
  // special keys
  const Pages = context.keys().map(key => context(key).default);

  const specialNames = {
    'Index': '/',
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {Pages.map(Page => {
          const name = Page.name;
          const path = specialNames[name] || `/${name}`;
          return <Route key={name} path={path} element={<Page />} />;
        })}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
