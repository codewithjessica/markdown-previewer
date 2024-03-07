// import the styled component library
import styled from "styled-components";

// Define a textarea styled component
const StyledTextArea = styled.textarea`
  width: 100%;
  font-size: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: row start;
  width: 40%;
  height: 500px;
`;

// define the interface for the props (one is listed below)
// onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
interface MarkdownInputProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

// destructure the props
const MarkdownInput = ({ onChange, value }: MarkdownInputProps) => {
  // pass the props (on change and value to the StyledTextArea styled component)
  return (
    <InputContainer>
      <StyledTextArea onChange={onChange} value={value}></StyledTextArea>
    </InputContainer>
  );
};

export default MarkdownInput;
