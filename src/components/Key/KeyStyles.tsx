import styled from 'styled-components'

export const StyledKey = styled.li`
  position: relative;
  width: 60px;
  height: 180px;
  border: 1px solid black;
  border-right: none;
  background: #fffff0;
  border-radius: 5px;
  box-shadow: 0px 3px 5px #666;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  font-weight: bold;
  &:last-child {
    border-right: 1px solid black;
  }
`
