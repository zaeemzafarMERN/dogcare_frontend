import { Layout  } from "antd";

import ProfileInfo from "../../views/profile/profileInfo";

function DropZone() {

  return (
    <Layout
      className=""
      style={{ backgroundColor: "transparent", }}
    >
      <ProfileInfo />
    </Layout>
  );
}

export default DropZone;
