import styled from "styled-components";

function Introduction() {
    return (
        <Container>
            <section>
                <p className='handwriting'>
                    Hi! My name is <br />
                    <span className="title">James </span> <br />
                    And I'm passionate about <br />
                    <span className="title"> &lt; Software Development /&gt; </span>
                </p>
            </section>
            <section>
                <p>
                    I am a software engineer with {yearsExperience} years experience in various tech roles. I love all things front-end, design, and user experience (UX).
                    Currently, I teach software development and UX at <span><a class="highlight" href="www.codeclan.com">CodeClan</a></span>.
                    In my free time I mentor career-changers and people at various stages in their career.
                </p>
            </section>

             <section>
                <p className="title">
                    About Me
                </p>
                <p>A brief list of some of the technologies I have been using:</p>
                <ul>
                    <li>HTML, CSS, JS</li>
                    <li>React, Next.js, Vue.js</li>
                    <li>Java</li>
                    <li>Python</li>
                </ul>
            </section>
        </Container>
    );
}

const Container = styled.section`
    text-align: left;
    margin: 60px 40px;
`

const thisYear = new Date().getFullYear();
const yearsExperience = thisYear - 2020;

export default Introduction;