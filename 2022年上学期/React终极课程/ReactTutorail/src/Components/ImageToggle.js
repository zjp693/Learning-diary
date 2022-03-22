// src/ImageToggle.js
import { useEffect, useState, Children } from "react";

function ImageToggle(props) {
  const [state, setState] = useState({
    current: 0,
    total: 0,
  });
  useEffect(() => {
    setState((prev) => ({ ...prev, total: Children.count(props.children) }));
  }, [props.children]);

  useEffect(() => {
    const timer = setInterval(showNext, 2000);
    return () => clearInterval(timer);
  }, []);

  const showNext = () => {
    setState(({ current, total }) => {
      return {
        total,
        current: current + 1 === total ? 0 : current + 1,
      };
    });
  };
  return <div>{Children.toArray(props.children)[state.current]}</div>;
}

export default ImageToggle