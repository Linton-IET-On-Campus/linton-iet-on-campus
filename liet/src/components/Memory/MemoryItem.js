import React from 'react'

const MemoryItem = ({ item }) => {
  return (

    <div class="column">
        <p>❝ {item.quote} ❞
        </p>
        <p align="center"> — {item.name} —
        </p>
    </div>

  )
}

export default MemoryItem