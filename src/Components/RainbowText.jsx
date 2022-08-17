import styled from "styled-components";


const RainbowText = styled.span`
        &:hover {
        text-decoration: none;
        background-image: linear-gradient(to left, #5BCEF9, #F6A8B8, #FFFFFF, #F6A8B8, #5BCEF9);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

export default RainbowText;
