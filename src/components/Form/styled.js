import { styled } from 'styled-components';

export const MainForm = styled.div`
background-color: #D6F4FA;
width: 652px;
padding: 62px 0;

display: flex;
flex-direction: column;
align-items: center;
z-index: 2;
`;

export const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
column-gap: 15px;
margin-bottom: 7px;
`;

export const Logo = styled.img`
height: 33.378px;
`;

export const Title = styled.h2`
color: var(--dark, #090F24);
font-family: Rubik;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: 38.926px;

width: 258px;
margin: 0;
`;

export const Subtitle = styled.p`
color: #1B5F6B;
font-family: Noto Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24.804px;

margin: 0;
`;

export const FormContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 14px;
`;

export const RequiredFields = styled.p`
color: #427781;
font-family: Noto Sans;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18.603px;
margin: 0;
`;

export const FormButton = styled.button`
display: flex;
padding: 13px 30px;
justify-content: center;
align-items: center;
gap: 10px;

border: 0px;
border-radius: 30px;
background: var(--blue, #74CCD8);
box-shadow: 0px 2px 4px 0px rgba(51, 196, 223, 0.20);
`;

export const FormButtonIcon = styled.img`
width: 20px;
`;

export const FormButtonTitle = styled.p`
color: var(--white, #FFF);
font-family: Noto Sans;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;

margin: 0;
`;
