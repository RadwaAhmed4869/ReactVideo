import { useEffect, useState, useRef, startTransition } from "react";

export default function TransitionSequence() {
    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const intervalRef = useRef(null);
    const canvasRef = useRef(null);
    const canvas = canvasRef.current;

    const noOfFrames = 181;
    const fbs = 29;

    const imagesPaths = Array.from({ length: noOfFrames + 1 }, (_, i) =>
        `/src/assets/sequence/frame_${i
            .toString()
            .padStart(4, "0")}.jpg`);

    const drawImage = (index) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const img = new Image();
        img.src = imagesPaths[index];
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // clear before redraw
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    };

    const StartTransition = () => {
        if (intervalRef.current) return; // prevent multiple intervals
        setIsTransitioning(true);

        intervalRef.current = setInterval(() => {
            setIndex(prev => {
                if (prev >= noOfFrames) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    setIsTransitioning(false);
                    return prev;
                }
                return prev + 1;
            });
        }, 1000 / fbs);
    }

    const StartReverse = () => {
        if (intervalRef.current) return; // prevent multiple intervals
        setIsTransitioning(true);

        intervalRef.current = setInterval(() => {
            setIndex(prev => {
                if (prev <= 0) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    setIsTransitioning(false);
                    return prev;
                }
                return prev - 1;
            });
        }, 1000 / fbs);
    }

    // whenever index changes, draw the frame
    useEffect(() => {
        drawImage(index);
    }, [index]);

    // cleanup interval on unmount
    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <>
            <section className="png__sequence">
                {/* <h1>{index}</h1> */}
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
            <section>
                <button onClick={StartTransition} disabled={isTransitioning}>Transition</button>
                <button onClick={StartReverse} disabled={isTransitioning}>Reverse</button>
            </section>
        </>

    );
}