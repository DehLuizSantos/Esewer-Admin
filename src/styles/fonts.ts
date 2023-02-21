import styled, { css } from 'styled-components';

type fontProps = {
  color: string;
};

export const TitleH1 = styled.h1<fontProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.fonts.TitleLarge};
    font-weight: 600;
    color: ${color};
  `}
`;

export const TitleH2 = styled.h2<fontProps>`
  ${({ theme, color }) => css`
    color: ${color};
  `}
`;

export const TitleH3 = styled.h3<fontProps>`
  ${({ theme, color }) => css`
    color: ${color};
  `}
`;

export const ParagraphBig = styled.p<fontProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.fonts.TitleLarge};
    font-weight: 600;
    color: ${color};
  `}
`;

export const ParagraphMedium = styled.p<fontProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.fonts.medium};
    font-weight: 600;
    color: ${color};
  `}
`;

export const ParagraphSmall = styled.p<fontProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.fonts.small};
    font-weight: 600;
    color: ${color};
  `}
`;
