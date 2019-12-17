import React, { useState, useEffect, useRef } from "react"
import useWindowSize from "./useWindowSize"

const Canvas = (props) => {
    const [drawing, setDrawing] = useState(false),
    [width, setWidth] = useState(window.innerWidth),
    [height, setHeight] = useState(window.innerHeight),

    [windowWidth, windowHeight] = useWindowSize(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }),
    
    canvasRef = useRef(),
    ctx = useRef()

    const startDrawing = (e) => {
        ctx.current.lineJoin = "round"
        ctx.current.lineCap = "round"
        ctx.current.lineWidth = 10
        ctx.current.strokeStyle = props.color
        ctx.current.beginPath();
        ctx.current.moveTo(
            e.clientX - canvasRef.current.offsetLeft,
            e.clientY - canvasRef.current.offsetTop
        )
        setDrawing(true)
    }

    const stopDrawing = () => {
        ctx.current.closePath()
        setDrawing(false)
    }

    const handleMouseMove = (e) => {
        const coords = [
            e.clientX - canvasRef.current.offsetLeft,
            e.clientY - canvasRef.current.offsetTop
        ]
        if(drawing) {
            ctx.current.lineTo(...coords)
            ctx.current.stroke()
        }
        if(props.handleMouseMove) {
            props.handleMouseMove(...coords)
        }
    }

    useEffect(() => { 
        ctx.current = canvasRef.current.getContext("2d")
    }, [])

    return <canvas
            ref={canvasRef}
            width={windowWidth || width}
            height={windowHeight || height}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
            onMouseMove={handleMouseMove}
            />
}

export default Canvas