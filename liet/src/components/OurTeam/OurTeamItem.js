import React from 'react'

const OurTeamItem = ({ item }) => {
  return (

        <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="image-flip" >
                <div class="mainflip flip-0">
                    <div class="frontside">
                        <div class="card">
                            <div class="card-body text-center">
                                <p><img class=" img-fluid" src={item.img} alt="card image" /></p>
                                <h4 class="card-title">{item.name}</h4>
                                <p class="card-text">{item.role}</p>
                            </div>
                        </div>
                    </div>

                    <div class="backside">
                        <div class="card">
                            <div class="card-body text-center mt-4">
                                <h4 class="card-title">{item.name}</h4>
                                <p class="card-text">{item.description}</p>
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <a class="social-icon text-xs-center" target="_blank" href={item.whatsapp}>
                                            <i class="fa fa-whatsapp"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="social-icon text-xs-center" target="_blank" href={item.email}>
                                            <i class="fas fa-envelope-square"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

  )
}

export default OurTeamItem