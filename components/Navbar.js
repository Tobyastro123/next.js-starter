import Link from 'next/link';

const Navbar = () => {
  const styles = {
    display: 'flex',
    background: 'grey',
    justifyContent: 'space-between',
    anchorStyles: {
      textDecoration: 'none',
      color: 'white',
      padding: '10px',
    }
  };
  return (
    <div style={styles}>
      <Link href="/">
        <a style={styles.anchorStyles}>Home page</a>
      </Link>
      <Link href="/about">
        <a style={styles.anchorStyles}>About page</a>
      </Link>
      <Link href="/contact">
        <a style={styles.anchorStyles}>Contact page</a>
      </Link>
    </div>
  )
};

export default Navbar;
