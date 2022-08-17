import styled from 'styled-components' 

function Header() {
    return ( 
        <Container>
            <Title>James Drysdale</Title>
        </Container>
     );
}

const Container = styled.header`
    color: #fff;
    background-color: #062c43;
    margin: 0;
    padding: 1em;
`

const Title = styled.h1`
    text-align: left;
    font-size: 1.5em;
`



export default Header;