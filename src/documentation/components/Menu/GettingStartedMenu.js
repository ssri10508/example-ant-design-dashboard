import {
  HomeFilled,
  LayoutFilled,
  CalendarFilled,
  CopyFilled,
} from "@ant-design/icons";

import SideMenu from "./SideMenu";

const SidebarMenuItems = [
  {
    id: "getting_started",
    title: "Getting started",
    icon: <HomeFilled className="icon" />,
    children: [
      { id: "overview", title: "Overview", toPath: "/overview" },
      { id: "license", title: "License", toPath: "/license" },
      { id: "quick", title: "Quick Start", toPath: "/quick" },
      { id: "whatisant", title: "What is Ant", toPath: "/whatisant" },
    ],
  },
  {
    id: "foundation",
    title: "Foundation",
    icon: <LayoutFilled className="icon" />,
    children: [
      { id: "color", title: "Colors", toPath: "/colors" },
      { id: "icon", title: "Icons", toPath: "/icons" },
      { id: "typography", title: "Typography", toPath: "/typography" },
    ],
  },
  {
    id: "components",
    title: "Components",
    icon: <CopyFilled className="icon" />,
    children: [
      { id: "alter", title: "Alter", toPath: "/alter" },
      { id: "avtar", title: "Avatar", toPath: "/avtar" },
      { id: "badge", title: "Badge", toPath: "/badge" },
      { id: "button", title: "Button", toPath: "/button" },
      { id: "card", title: "Card", toPath: "/card" },
      { id: "collapse", title: "Collapse", toPath: "/collapse" },
      { id: "modal", title: "Modal", toPath: "/modal" },
      { id: "popover", title: "Popover", toPath: "/popover" },
      { id: "progress", title: "Progress", toPath: "/progress" },
      { id: "table", title: "Table", toPath: "/table" },
      { id: "tabs", title: "Tabs", toPath: "/tabs" },
      { id: "timeline", title: "Timeline", toPath: "/timeline" },
      { id: "tooltips", title: "Tool Tips", toPath: "/tooltips" },
    ],
  },
  {
    id: 4,
    title: "Layout",
    icon: <CopyFilled className="icon" />,
    children: [
      { id: "grid", title: "Grid", toPath: "/grid" },
      { id: "layout", title: "Layout", toPath: "/layout" },
    ],
  },
  {
    id: 5,
    title: "Navigation",
    icon: <CalendarFilled className="icon" />,
    children: [
      { id: "affix", title: "Affix", toPath: "/affix" },
      { id: "dropdown", title: "Dropdown", toPath: "/dropdown" },
      { id: "menu", title: "Menu", toPath: "/menu" },
      { id: "pagination", title: "Pagination", toPath: "/pagination" },
    ],
  },
  {
    id: 6,
    title: "Data Entry",
    icon: <HomeFilled className="icon" />,
    children: [
      { id: "checkbox", title: "Checkbox", toPath: "/checkbox" },
      { id: "form", title: "Form", toPath: "/form" },
      { id: "input", title: "Input", toPath: "/input" },
      { id: "radio", title: "Radio", toPath: "/radio" },
      { id: "select", title: "Select", toPath: "/select" },
      { id: "switch", title: "Switch", toPath: "/switch" },
      { id: "upload", title: "Upload", toPath: "/upload" },
    ],
  },
];

function GettingStartedMenu() {
  return (
    <div>
      {SidebarMenuItems.map(({ title, icon, children }) => (
        <SideMenu key={title} title={title} icon={icon} children={children} />
      ))}
    </div>
  );
}

export default GettingStartedMenu;