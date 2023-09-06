import { styled } from 'styled-components';

export const Rules = styled.div`
color: var(--dark, #090F24);
font-family: Noto Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21.703px;
letter-spacing: -0.364px;
`;

export const RulesCheckbox = styled.div`
display: flex;
column-gap: 9px;
`;

export const Checkbox = styled.input`
margin: 0;
`;

export const CheckboxLabel = styled.label``;

export const CheckboxLabelBold = styled.span`
font-weight: 600;
`;

export const ErrorContainer = styled.div`
height: 15px;
`;

export const ErrorActive = styled.div`
display: flex;
align-items: flex-end;
color: red;
font-size: 10px;
height: 15px;
padding-left: 21.5px;
`;
