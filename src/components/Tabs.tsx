import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

const onChange = (key: string) => {
  console.log(key);
};

const tabItems = [
  {
    key: "1",
    label: "Tab 1",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
  },
];

const App: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" style={{ height: "50px" }} onChange={onChange}>
      {tabItems.map((item) => (
        <Tabs.TabPane key={item.key} tab={item.label} style={{}}>
          {item.children}
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};
//! Yukarıdaki style kısmı bilerek boş bıraktım ayarlancak.
export default App;
