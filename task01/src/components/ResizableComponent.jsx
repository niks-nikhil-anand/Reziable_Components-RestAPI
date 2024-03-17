import React from 'react';
import { Resizable } from 'react-resizable';

const ResizableComponent = ({ width, height, onResize }) => {
  return (
    <Resizable
      width={width}
      height={height}
      onResize={onResize}
      minConstraints={[100, 100]}
      maxConstraints={[500, 500]}
    >
      <div className="resizable-content">
        {/* Add your content here */}
        <h2>Resizable Component</h2>
        <p>This component can be resized from all sides.</p>
      </div>
    </Resizable>
  );
};

export default ResizableComponent;
