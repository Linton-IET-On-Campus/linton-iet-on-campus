import React from 'react'

const ChoosePlanItem = ({ item }) => {
  return (
    <div class="col-lg-4">
        <div class="pricing">
            <h3>{item.title}</h3>
            <p class="description">{item.short}</p>
            <div class="price">
                <span>Starting at</span>
                <strong>RM<em class="number" data-number={item.price}>{item.price}</em></strong>
                <span>{item.duration}</span>
            </div>
            <p class="description-2 mb-5">{item.description}</p>
            <p><a href="http://wa.me/601110501375" target="_blank" class="btn btn-outline-primary py-3 px-5">Join Now</a></p>
        </div>
    </div>

  )
}

export default ChoosePlanItem