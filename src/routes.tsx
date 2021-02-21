export const routes = [
  {
    id: "1",
    icon: "dashboard",
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    id: "2",
    icon: "user",
    name: "Users",
    route: "/user",
  },
  {
    id: "3",
    icon: "shopping-cart",
    name: "Posts",
    route: "/post",
  },
  {
    id: "4",
    icon: "api",
    name: "Request",
    route: "/request",
  },
  {
    id: "5",
    name: "UI Element",
    icon: "camera-o",
  },
  {
    id: "6",
    menuParentId: "5",
    icon: "edit",
    name: "Editor",
    route: "/editor",
  },
  {
    id: "7",
    name: "Charts",
    icon: "code-o",
  },
  {
    id: "8",
    menuParentId: "7",
    icon: "line-chart",
    name: "ECharts",
    route: "/chart/ECharts",
  },
  {
    id: "9",
    menuParentId: "7",
    icon: "bar-chart",
    name: "HighCharts",
    route: "/chart/highCharts",
  },
  {
    id: "10",
    menuParentId: "7",
    icon: "area-chart",
    name: "Rechartst",
    route: "/chart/Recharts",
  },
];
