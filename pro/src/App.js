import { useEffect, useLayoutEffect, useRef, useState } from "react";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1><b>useEffect vs useLayoutEffect</b></h1>
      <FlickerBox />
      <NoFlickerBox />
    </div>
  );
}

// ❌ Box with Flicker (Delayed useEffect)
function FlickerBox() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => { // Artificial delay to simulate flicker
      if (boxRef.current) {
        setWidth(boxRef.current.offsetWidth);
      }
    }, 3000); // Delay added (300ms)
  }, [width]);

  return (
    <div ref={boxRef} style={{ background: "tomato", padding: "20px", margin: "20px", width: "50%" }}>
      <h2>Flickering Box</h2>
      <p>Width: {width}px</p>
    </div>
  );
}

// ✅ Box without Flicker (useLayoutEffect)
function NoFlickerBox() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setWidth(boxRef.current.offsetWidth); // Updates before paint (prevents flicker)
    }
  }, [width]);

  return (
    <div ref={boxRef} style={{ background: "lightblue", padding: "20px", margin: "20px", width: "50%" }}>
      <h2>No Flicker Box</h2>
      <p>Width: {width}px</p>
    </div>
  );
}

export default App;


