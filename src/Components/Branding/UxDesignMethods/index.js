import React from 'react';
import {UxDesignMethodComponents} from './styleComponents';
import PoolPrice_Winner from '../../../Assests/brandingPage/PoolPrice_Winner.png';
import {stageFlow} from '../../../Constants/Branding/brandingCardList';
function UxDesignMethods (){
    return(
       <UxDesignMethodComponents>
         <div className='uxDesignMethod_main'>
             <div className='d-flex flex-column align-items-center'>
                 <div style={{border: '2px solid #0554F2', width: '70px'}}></div>
                 <div className='step_follow'>Few Steps we follow in our</div>
                 <div className='methodAndTechnices py-3'>UX Design Methods and Techniques</div>
                 <img src={PoolPrice_Winner} alt='PoolPrice_Winner'/>
             </div>
             <div className='row mb-5'>
                 {stageFlow.map(val =>(
                    <div className='col-4 col-lg-4 py-4'>
                        <div className='step_follow_heading'>{val.name}</div>
                        <div className='step_follow_para px-4 py-1'>{val.description}</div>
                    </div>
                 ))}
             </div>
         </div>
       </UxDesignMethodComponents>
    )
}
export default UxDesignMethods;
