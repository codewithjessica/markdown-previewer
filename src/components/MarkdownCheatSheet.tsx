import styled from "styled-components";

const GuideContainer = styled.div`
    margin: 10px;
    border: 1px solid #555555;
    background-color: #ededed;
    padding: 10px 30px;
`;

const MarkdownCheatSheet = () => {
  return (
    <GuideContainer>
        <h2>Markdown Cheat Sheet</h2>
        <ul>
            <li><code># H1</code></li>
            <li><code>## H2</code></li>
            <li><code>### H3</code></li>
            <li><code>**bold**</code></li>
            <li><code>*italic*</code></li>
            <li><code>[Link](http://a.com)</code></li>
            <li><code>![Image](http://url/a.png)</code></li>
            <li><code>`inline code`</code></li>
            <li><code>- list item</code></li>
        </ul>
    
    </GuideContainer>
  )
}

export default MarkdownCheatSheet