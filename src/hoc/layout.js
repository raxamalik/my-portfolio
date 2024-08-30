import React from 'react';

const Layout = (WrappedComponent) => {
  return (props) => (
    <div>
      <header>
        Header
      </header>
      <main>
        <WrappedComponent {...props} />
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
};

export default Layout;
