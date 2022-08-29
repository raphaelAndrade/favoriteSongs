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

export const Title = styled.h1`
    margin: 32px 0;
    color: #fff;
    font-size: 24px;
`

export const SortButton = styled.button`
    with: 100px;
    padding: 4px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
    );
    color: #fff;
    text-transform: capitalize;
    margin-bottom: 12px;
`