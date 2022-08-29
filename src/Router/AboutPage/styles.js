import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 520px;
    min-height: 600px;
    background: #161a2b;
    text-align: center;
    margin: 70px auto;
    border-radius: 10px;
    padding-bottom: 32px;
`

export const Description = styled.p`
    width: 60%;
    margin: 32px 0;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    background: linear-gradient(to right, #30CFD0 0%, #9b00fa 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`