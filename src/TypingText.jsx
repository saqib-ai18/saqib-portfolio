import { useEffect, useState } from "react";

const titles = [
  "Data Analyst",
  "AI/ML Engineer",
  "Data Scientist",
  "Machine Learning Engineer",
];

export default function TypingText() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const title = titles[index];

    const timer = setTimeout(() => {
      if (text.length < title.length) {
        setText(title.slice(0, text.length + 1));
      } else {
        setText("");
        setIndex((index + 1) % titles.length);
      }
    }, text.length === title.length ? 1500 : 100);

    return () => clearTimeout(timer);
  }, [text, index]);

  return (
    <span className="typing-text">
      {text}
      <span className="typing-cursor">|</span>
    </span>
  );
}