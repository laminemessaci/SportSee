import { Outlet } from 'react-router-dom';
import { Header } from './Header/index.jsx';

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
