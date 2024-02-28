import { Layout } from "antd";

interface pageLayoutProps{
    children: JSX.Element;
    headerDefault?: boolean;
    data?: any;
}

export default function ContentLayout(props: pageLayoutProps) {
  return (
    <main >
      <Layout style={{ height: '100vh'}}>
          {props.children}
      </Layout>
    </main>
  );
}
