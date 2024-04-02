import { useState } from "react";
import Header from "./components/Header";
import MarkdownCheatSheet from "./components/MarkdownCheatSheet";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justifycontent: space-between;
`;

const App = () => {
  const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);
  // Create a state to manage the markdown text
  const handleToggleGuide = () => {
    setShowCheatSheet(!showCheatSheet);
  };

  // const [markdown, setMarkdownText] = useState<string>("");
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const handleMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      <Header onToggleGuide={handleToggleGuide} />
      {showCheatSheet && <MarkdownCheatSheet />}
      {/* Wrapped within a styled component div named Container */}
      <Container>
        {/* MarkdownInput (pass the markdown text as a value to this component as well as the handle change function) */}
        <MarkdownInput onChange={handleMarkdownChange} value={markdown} />
        {/* MarkdownOutput (pass the markdown text as a prop to this component*/}
        <MarkdownOutput markdown={markdown} />
      </Container>
    </>
  );
};

export default App;
