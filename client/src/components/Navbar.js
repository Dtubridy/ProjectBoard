import React from 'react';

const styles = { height: '40px' };

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
      <div className="container" style={styles}>
        <a className="navbar-brand" href="/">
          Dashboard
        </a>
      </div>
    </nav>
  );
}
