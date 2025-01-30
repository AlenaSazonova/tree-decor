import { useRef, useState } from 'react';
import { 
    
} 
    from './Drag&Drop.style';

const useDragAndDrop = (treeMask) => {
    const [decorations, setDecorations] = useState([]);
    const treeRef = useRef(null);

    const handleDragStart = (e, src) => {
        e.dataTransfer.setData('src', src);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const src = e.dataTransfer.getData('src');
        if (!treeRef.current) return;

        const treeRect = treeRef.current.getBoundingClientRect();
        const decorationSize = 50;

        let x = e.clientX - treeRect.left - decorationSize / 2;
        let y = e.clientY - treeRect.top - decorationSize / 2;

        const shiftedTreeMask = treeMask.map((point) => ({
            x: point.x - 125,
            y: point.y - 130
        }));

        const isWithinTreeOrContour = (x, y) => {
            return shiftedTreeMask.some((point, index) => {
                const nextPoint = shiftedTreeMask[index + 1] || shiftedTreeMask[0];
                const distanceToLine = distanceToSegment(x, y, point.x, point.y, nextPoint.x, nextPoint.y);

                const distanceToPoint = Math.sqrt((x - point.x) ** 2 + (y - point.y) ** 2);
                return distanceToPoint <= decorationSize || distanceToLine <= decorationSize;
            });
        };

        if (isWithinTreeOrContour(x, y)) {
            setDecorations((prev) => [...prev, { src, x, y }]);
        } else {
            console.log("Decoration dropped outside tree mask or contour");
        }
    };

    const distanceToSegment = (px, py, x1, y1, x2, y2) => {
        const lineLength = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        if (lineLength === 0) return Math.sqrt((px - x1) ** 2 + (py - y1) ** 2);

        const t = Math.max(0, Math.min(1, ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / (lineLength * lineLength)));
        const closestX = x1 + t * (x2 - x1);
        const closestY = y1 + t * (y2 - y1);
        return Math.sqrt((px - closestX) ** 2 + (py - closestY) ** 2);
    };

    return {
        decorations,
        treeRef,
        handleDragStart,
        handleDragOver,
        handleDrop,
    };
};

export default useDragAndDrop;