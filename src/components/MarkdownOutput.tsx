// import the styled component library
import styled from "styled-components";

// import ReactMarkdown from "react-markdown";
import ReactMarkdown from "react-markdown";

// Create a Output container styled component which is a div
const OutputContainer = styled.div`
    width: 40%;
    height: 100%
    display: flex;
    flex-flow: row end;
`;

// create the interface for the props
interface MarkdownOutputProps {
  markdown: string;
}

// destructure the props
const MarkdownOutput = ({ markdown }: MarkdownOutputProps) => {
  // return the OutputContainer with <ReactMarkdown>{markdown}</ReactMarkdown> as a child
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
