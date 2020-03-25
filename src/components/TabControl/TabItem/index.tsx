import React, { useState } from "react";
import styled from "styled-components";

import { TabContent } from "@/types";
import { Close, DefaultFile } from "@/components/Icon";
import { IconContext } from "@/components/IconProvider";
import { ThemeContext, Theme } from "@/components/ThemeProvider";

type Props = {
  item: TabContent;
  isActivated: boolean;
  onCloseButtonClicked?: (item: TabContent) => void;
  onTabClicked?: (item: TabContent) => void;
};

type TabWrapperProps = {
  isActivated: boolean;
  theme: Theme;
};

const TabWrapper = styled.div<TabWrapperProps>`
  display: inline-block;
  min-width: 150px;
  padding: 8px 16px;
  color: ${(props) => (props.isActivated ? props.theme.activeFontColor : props.theme.fontColor)};
  user-select: none;
  background-color: ${(props) => (props.isActivated ? props.theme.activeBackground : props.theme.background)};
`;

const TabContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  width: 16px;
  height: 16px;
`;

const Label = styled.span`
  flex: 1 1 auto;
  padding-left: 8px;
  font-size: 14px;
`;

const CloseButton = styled(Close)`
  padding: 2px;
`;

const TabItem: React.FC<Props> = ({ item, isActivated, onCloseButtonClicked, onTabClicked }) => {
  const [isHovered, setHovered] = useState(false);

  const getIconComponent = (icons: { extension: RegExp; component: React.FC<any> }[], filename: string) => {
    const icon = icons.find((w) => w.extension.test(filename));
    const Component = icon ? icon.component : DefaultFile;

    return <Component />;
  };

  const onClickTabWrapper = () => {
    if (onTabClicked) onTabClicked(item);
  };

  const onClickCloseButton = () => {
    if (onCloseButtonClicked) onCloseButtonClicked(item);
  };

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <TabWrapper isActivated={isActivated} theme={theme} onClick={onClickTabWrapper} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <IconContext.Consumer>
            {(icons) => (
              <TabContainer>
                <Icon>{getIconComponent(icons, item.item.title)}</Icon>
                <Label>{item.item.title}</Label>
                {isActivated || isHovered ? <CloseButton onClick={onClickCloseButton} /> : null}
              </TabContainer>
            )}
          </IconContext.Consumer>
        </TabWrapper>
      )}
    </ThemeContext.Consumer>
  );
};

export default TabItem;
