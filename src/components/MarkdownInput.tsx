// import the styled component library
import styled from "styled-components";

// Define a textarea styled component
const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100vh;
  display: flex;
  font-size: 16px;
  padding: 10px;
`;

const InputContainer = styled.div`
  width: 50%;
  border-style: solid;
  display: flex;
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
