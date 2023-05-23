import { css } from 'styled-components';
import theme from './theme';
export const fontMix = (fontSize, color) => css`
  font-size: ${fontSize}px;
  color: ${theme[color]};
`;
export const flexSort = (justifyContent, alignItems) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export const boxSize = (width, height) => css`
  width: ${width}px;
  height: ${height}px;
`;
