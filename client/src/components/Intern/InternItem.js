import React from 'react'

const InternItem = ({ item }) => {
  return (

        <div>

            <img src={item.img} align="left"/>

            <h2><strong>{item.name}</strong></h2>
            <br/>
            <strong>POSITION: </strong>{item.position}<br/>
            <br/>
            <strong>SALARY: </strong>{item.salary} <br/>
            <br/>
            <strong>LOCATION: </strong>{item.location}<br/>
            <br/>
            <strong>DURATION: </strong>{item.duration}<br/>
            <br/>
            <strong>ABOUT: </strong><br/>{item.description}<br/><br/>

            <a class="a" href={item.link}>LEARN MORE...</a>

        </div>
  )
}

export default InternItem