import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useTutorialState } from '../../Context/tutorialContext';
import { useEffect } from 'react';

const DraggableItem = ({ index, moveItem, onDrop }) => {
  const [isDragging, setIsDragging] = useState(false);
  const {isDragClicked, setIsDragClicked} = useTutorialState();

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'DRAGGABLE_ITEM',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
    drop: () => {
      if (isClicked) {
        onDrop();
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const [{ opacity }, drag] = useDrag({
    type: 'DRAGGABLE_ITEM',
    item: { type: 'DRAGGABLE_ITEM', index },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    if (window.innerWidth > 768) return
    console.log("clicked");
    setIsDragClicked(true);
  };

  useEffect(()=>{
    setIsDragClicked(false)
  },[])

  const buttonText =
    window.innerWidth <= 768
      ? 'Clickeame'
      : 'Mueveme';


  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`draggable-item ${isDragging ? 'draggable-item-dragging' : ''} ${isOver && canDrop ? 'drop-target' : ''}`}
      style={{ opacity }}
      onClick={isOver && canDrop ? onDrop : handleClick}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {buttonText}
    </div>
  );
};


const DropArea = ({ onDrop }) => {
  const { isDragClicked, setIsDragClicked } = useTutorialState();
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'DRAGGABLE_ITEM',
    drop: () => onDrop(),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const containerClass = `drop-area ${isOver ? 'drop-area-over' : ''} ${
    !isOver && canDrop ? 'drop-area-not-over' : ''
  }`;

  const handleClickDrop = () => {
    if(isDragClicked) {
      onDrop()
      setIsDragClicked(false)
      return 
    }
    return setIsDragClicked(false)
  }

  const buttonText =
    window.innerWidth <= 768 && isDragClicked
      ? 'Click dentro'
      : isOver
      ? 'Soltar dentro'
      : 'Mover dentro';

  return (
    <div ref={drop} className={containerClass} onClick={handleClickDrop}>
      {buttonText}
    </div>
  );
};

const DragAndDropContainer = ({ items, onStepChange }) => {
  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    onStepChange();
  };

  const handleDrop = () => {
    onStepChange();
  };

  return (
    <div className="drag-container">
      <DropArea onDrop={handleDrop} />
      <div className="drag-container-items">
        {items.map((item, index) => (
          <DraggableItem key={index} text={item.type} index={index} moveItem={moveItem} />
        ))}
      </div>
    </div>
  );
};

export default DragAndDropContainer;
