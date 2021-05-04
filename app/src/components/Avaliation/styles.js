import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  width: ${props => props.width ? props.width : "372"};
  height: ${props => props.heigth ? props.heigth : "fit-content"};
  align-self: flex-end;
  justify-content: center;

    Form{
        align-items: ${props => props.align ? props.align : ""};
        align-items: flex-start;
        p, Input, select, button{
            margin-top: 10px;   
        }
    }
`
export const Grades = styled.div`
    display: grid;
    grid-template-columns: 170px 150px;
    font-size: 13px;
    margin-bottom: 10px;

    label {
            margin-top: 5px;   
        }
`

export const NameProfessor = styled.p`
  color: rgba(61, 58, 58, 0.603);
  border-bottom: 1px solid #000000;
  width: 252px;
  text-align: left;
  font-size: 15px;
`;

export const TxtArea = styled.textarea`
  width: 330px;
  height: 70px;
  border-radius: 10px;
  background-color: #fffde7;
  resize: none;

  &:focus {
    outline-width: 0;
  }
`;
