import { Space } from "antd";
import icons from "../data/iconPool";
import IconComponent from "./IconComponent";

export interface IconContainerProps {
  categoryName: any;
  selectIcon: any;
  currentIcon: any;
}

export const IconContainerComponent: React.FC<IconContainerProps> = ({
  categoryName,
  selectIcon,
  currentIcon,
}) => {
  return (
    <Space wrap size={10} className="grid-container">
      {icons
        .filter((icon) => icon.category === categoryName)
        .map((icon) => (
          <IconComponent
            icon={icon}
            selectIcon={selectIcon}
            highlight={currentIcon?.name === icon.name}
          />
        ))}
    </Space>
  );
};
