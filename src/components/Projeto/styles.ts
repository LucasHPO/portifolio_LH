import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`
export const LinkBTN = styled.a`
  padding: 8px;
  font-size: 14px;
  display: inline-block;
  margin-top: 24px;
  background-color: ${(props) => props.theme.corDeFundoBTN};
  color: ${(props) => props.theme.corDeFundo};
  cursor: pointer;
  border-radius: 12px;
`
