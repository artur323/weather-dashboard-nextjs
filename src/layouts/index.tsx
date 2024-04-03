import type { FC, PropsWithChildren } from "react";

import Header from "./header";
import Footer from "./footer";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
