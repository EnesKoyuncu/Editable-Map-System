import icons from "../data/iconPool";
import IconComponent from "./IconComponent";

export interface IconContaienr {
  categoryName: any;
  selectIcon: any;
  currentIcon: any;
}

export const IconContainerComponent: React.FC<IconContaienr> = ({
  categoryName,
  selectIcon,
  currentIcon,
}) => {
  return (
    <div className="grid-container">
      {icons
        .filter((icon) => icon.category === categoryName)
        .map((icon) => (
          <IconComponent
            icon={icon}
            selectIcon={selectIcon}
            highlight={currentIcon?.name === icon.name}
          />
        ))}
    </div>
  );
};
