import { Outlet } from "react-router-dom";

const SharedProductLayout = () => {
  return (
    <>
      <h2>Products</h2>
      <section className="section">
        <Outlet />
      </section>
    </>
  );
};

export default SharedProductLayout;
