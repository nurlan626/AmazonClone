import React from 'react'
import LeftSidePanel from './leftSide/LeftSidePanel'
import RightSidePanel from './rightSide/RightSidePanel'

const DisplayContent: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <LeftSidePanel />
      </div>
      <div>
        <RightSidePanel />
      </div>
    </div>
  )
}

export default DisplayContent