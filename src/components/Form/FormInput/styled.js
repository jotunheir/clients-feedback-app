import { styled, css } from 'styled-components';

export const Input = styled.input`
color: var(--dark, #090F24);
font-family: Noto Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;

width: 526px;
height: 42px;
padding-left: 20px;
box-sizing: border-box;
border-radius: 40px;
border: 1px solid var(--blue, #74CCD8);
background: var(--white, #FFF);

${({ isError }) => isError && css`
border: 1px solid red;
`}
`;

export const Textarea = styled.textarea`
color: var(--dark, #090F24);
font-family: Noto Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;

resize: none;
min-height: 130px;
width: 526px;
border-radius: 20px;
box-sizing: border-box;
padding: 11.5px 0 0 20px;
border: 1px solid var(--blue, #74CCD8);

${({ isError }) => isError && css`
border: 1px solid red;
`}
`;

export const ErrorContainer = styled.div`
height: 15px;
`;

export const ErrorActive = styled.div`
display: flex;
color: red;
font-size: 10px;
height: 15px;
padding-left: 21.5px;
`;
