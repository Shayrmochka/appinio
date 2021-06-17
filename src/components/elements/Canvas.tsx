import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { UserDataContext } from '../../context/UserDataContext';

interface CanvasProps {
  width: string;
  height: string;
  label: string;
  element: any;
}

type Coordinate = {
  x: number;
  y: number;
};

const Canvas = ({ width, height, label, element }: CanvasProps) => {
  const { handleCanvas } = useContext(UserDataContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setMousePosition] =
    useState<Coordinate | undefined>(undefined);

  const getCoordinates = useCallback(
    (event: MouseEvent): Coordinate | undefined => {
      if (!canvasRef.current) {
        return;
      }

      const canvas: HTMLCanvasElement = canvasRef.current;

      handleCanvas(element, event, canvas);
      //console.log(...userData[element.name]);
      return {
        x: event.pageX - canvas.offsetLeft,
        y: event.pageY - canvas.offsetTop,
      };
    },
    [handleCanvas, element]
  );

  const startPaint = useCallback(
    (event: MouseEvent) => {
      const coordinates = getCoordinates(event);
      if (coordinates) {
        setMousePosition(coordinates);
        setIsPainting(true);
      }
    },
    [getCoordinates]
  );

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousedown', startPaint);
    return () => {
      canvas.removeEventListener('mousedown', startPaint);
    };
  }, [startPaint]);

  const paint = useCallback(
    (event: MouseEvent) => {
      if (isPainting) {
        const newMousePosition = getCoordinates(event);
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
        }
      }
    },
    [isPainting, mousePosition, getCoordinates]
  );

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousemove', paint);
    return () => {
      canvas.removeEventListener('mousemove', paint);
    };
  }, [paint]);

  const exitPaint = useCallback(() => {
    setIsPainting(false);
    setMousePosition(undefined);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mouseup', exitPaint);
    canvas.addEventListener('mouseleave', exitPaint);
    return () => {
      canvas.removeEventListener('mouseup', exitPaint);
      canvas.removeEventListener('mouseleave', exitPaint);
    };
  }, [exitPaint]);

  const drawLine = (
    originalMousePosition: Coordinate,
    newMousePosition: Coordinate
  ) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');
    if (context) {
      context.strokeStyle = 'black';
      context.lineJoin = 'round';
      context.lineWidth = 1;

      context.beginPath();
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      context.lineTo(newMousePosition.x, newMousePosition.y);
      context.closePath();

      context.stroke();
    }
  };

  //console.log(canvasData);

  return (
    <div>
      <p className="signature__label">{label}</p>
      <canvas id="canvas" ref={canvasRef} height={height} width={width} />
    </div>
  );
};

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default Canvas;
