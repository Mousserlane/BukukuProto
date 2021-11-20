import React from "react";
import { Icon } from "./generic";

import { colors } from "../styles/styles";

type Props = {
  focused: boolean;
  iconName: string;
};

const TabBarIcon = ({ focused, iconName }: Props) => (
  <Icon
    fontFamily="Ionicons"
    name={focused ? iconName : `${iconName}-outline`}
    size={24}
    color={colors.primary}
  />
);

export default TabBarIcon;
