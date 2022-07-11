import { ReactNode } from "react";

interface GenericProps {
  children: ReactNode;
}

interface MenuItemProps {
  icon: JSX.Element;
  text: string;
  link: string;
}

export { GenericProps, MenuItemProps };
