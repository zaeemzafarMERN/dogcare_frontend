import { Layout, Modal, message } from "antd";
import ClientHeader from "./ClientHeader";
import ClientFooter from "./ClientFooter";

const ClientLayout = ({ children, head, footer = true,bg=true }) => {
  return (
    <Layout
      style={{
        backgroundColor: "transparent",
        scrollBehavior: "smooth",
        position: "relative",
      }}
    >
      <span className={bg ? "web-header" : ""}>
      <ClientHeader />
      </span>
        {children}
        {footer && <ClientFooter />}
    </Layout>
  );
};
export default ClientLayout;
