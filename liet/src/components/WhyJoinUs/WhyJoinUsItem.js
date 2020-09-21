import React from 'react'

const WhyJoinUsItem = ({ item }) => {
  return (

    <div class="col-md-4 col-sm-6 equal-height">
        <div class="item">
            <i class={item.icon}></i>
            <h4>{item.title}</h4>
            <p>
                {item.description}
            </p>
        </div>
    </div>
   
  )
}

export default WhyJoinUsItem