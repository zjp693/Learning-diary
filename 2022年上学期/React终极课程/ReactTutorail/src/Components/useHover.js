import { useEffect, useRef, useState } from "react";

export default function useHover() {

  const [value, setVlaue] = useState(false)
  const elementRef = useRef()
  const handleMouseEnter = () => setVlaue(true)
  const hanleMuseLeave = () => setVlaue(false)

  useEffect(() => {
    const node = elementRef.current

    if (!node) return
    node.addEventListener('mouseenter', handleMouseEnter)
    node.addEventListener('mouserleave', hanleMuseLeave)
    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter)
      node.removeEventListener("mouserleave", hanleMuseLeave)
    }
  }, [])
  return [elementRef,value]
}