import "styled-components/native";
import theme from '../styles/index.ts';

declare module "styled-components/native" {
    type StyledTheme = typeof theme;
    export interface DefaultTheme extends StyledTheme {};
}