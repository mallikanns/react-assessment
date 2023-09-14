import Navbar from "./Navbar";

const Layout = (props) => {
  const children = props.children;
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
