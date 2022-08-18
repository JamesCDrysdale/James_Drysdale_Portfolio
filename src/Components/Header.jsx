import styled from 'styled-components' 
import RainbowText from './RainbowText';

function Header() {
    return ( 
        <Container>
            <Title><RainbowText>James Drysdale</RainbowText></Title>
        </Container>
     );
}

const Container = styled.header`
    background-color: #062c43;
    margin: 0;
    padding: 1em;
`

const Title = styled.h1`
    text-align: left;
    font-size: 3em;
    color: #FFFFFF;
`

export default Header;