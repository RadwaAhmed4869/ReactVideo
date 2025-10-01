import "./SequenceReverse.css";
import { useEffect, useRef } from "react";

export default function SequenceReverse() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // number of images to be sequenced
    const frameCount = 181;

    // Generates the filename of the image based on the current index
    const currentFrame = (index) => {
      return `/src/assets/sequence/frame_${index
        .toString()
        .padStart(4, "0")}.jpg`;
    };

    // Drawing the initial image on the canvas
    const img = new Image();
    console.log(currentFrame(0));
    
    img.src = currentFrame(0);
    img.onload = function () {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    //preloading images
    const preloadImages = () => {
      Array.from({ length: frameCount }, (_, i) => {
        const img = new Image();
        img.src = currentFrame(i);
      });
    };

    //update images
    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    // Tracking the user scroll position
    window.addEventListener("scroll", () => {
      const html = document.documentElement;
      const wrap = document.querySelector(".png__sequence");
      const scrollLeft = html.scrollLeft;
      const maxScrollLeft = wrap.scrollWidth - window.innerWidth;
      const scrollFraction = scrollLeft / maxScrollLeft;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );
      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });
    preloadImages();
  }, []);

  return (
    <section className="png__sequence">
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        className="png__sequence__canvas"
        id="canvas"
      >
        {" "}
      </canvas>
    </section>
  );
}

//Resource: https://dev.to/pipscript/creating-a-png-sequence-animation-using-react-and-scss-k71