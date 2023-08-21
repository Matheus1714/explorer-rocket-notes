import styled from 'styled-components'

interface ContainerProps {
  $isnew: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background: ${({ theme, $isnew }) =>
    $isnew === 'true' ? 'transparent' : theme.COLORS.BACKGROUND_900};
  color: ${(props) => props.theme.COLORS.GRAY_300};

  border: ${({ theme, $isnew }) =>
    $isnew === 'true' ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin-bottom: 8px;
  border-radius: 10px;

  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }
  .button-delete {
    color: ${(props) => props.theme.COLORS.RED};
  }
  .button-add {
    color: ${(props) => props.theme.COLORS.ORANGE};
  }
  > input {
    height: 56px;
    width: 100%;
    padding: 12px;

    color: ${(props) => props.theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${(props) => props.theme.COLORS.GRAY_300};
    }
  }
`
