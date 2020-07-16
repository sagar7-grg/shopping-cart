import styled from 'styled-components';

export const ButtonContainer=styled.button`
border-color:${props=>props.cart?"var(--mainYellow)":"var(--lightBlue)"};
padding:5px;
font-size:1.5rem;
text-transform:capitalize;
border-radius:4px;
color:${props=>props.cart?"var(--mainYellow)":"var(--mainBlue)"};

&:hover{
    transform:scale(1.2);
    background:${props=>props.cart?"var(--mainYellow)":"var(--mainBlue)"};
    color:var(--mainWhite);
    
}
`