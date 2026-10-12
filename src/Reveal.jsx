import React, { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = 0 }) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    setVisible(true);
    observer.unobserve(entry.target);
  }
}, {
  threshold: 0,
});

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}