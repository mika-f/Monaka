import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import styled from "styled-components";

import { ExplorerSectionItem } from "@/types";
import { ChevronDown, ChevronRight } from "@/components/Icon";
import Scroller from "@/components/Scroller";
import { ThemeContext, Theme } from "@/components/ThemeProvider";

type Props = {
  className?: string;
} & ExplorerSectionItem;

type ThemedProps = {
  theme: Theme;
};

const Content = styled.div`
  padding: 2px;
`;

const Icon = styled.div`
  padding: 2px 0;
`;

const Label = styled.div<ThemedProps>`
  flex: 1 1 auto;
  padding: 0 0 2px 2px;
  overflow: hidden;
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
  text-overflow: ellipsis;
`;

const Title = styled.div<ThemedProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2px 0 0 4px;
  user-select: none;
  background: ${(props) => props.theme.inactiveBackground};
`;

const Wrapper = styled.div<ThemedProps>`
  overflow: hidden;
`;

const ExplorerItem: React.FC<Props> = ({ children, className, title }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!isExpanded);

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <Wrapper className={className} theme={theme}>
          <Title onClick={toggleExpanded} theme={theme}>
            <Icon>{isExpanded ? <ChevronDown /> : <ChevronRight />}</Icon>
            <Label theme={theme}>{title}</Label>
          </Title>
          <AnimateHeight duration={100} height={isExpanded ? "auto" : 0}>
            {/* expand animation not working */}
            <Scroller>
              <Content>{children}</Content>
            </Scroller>
          </AnimateHeight>
        </Wrapper>
      )}
    </ThemeContext.Consumer>
  );
};

export default ExplorerItem;
