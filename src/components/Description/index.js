import React from 'react'
import style from './style.module.css'
import {Button} from '../../components/Button'
import DescriptionImg1 from '../../assets/description_1.png'
import DescriptionImg2 from '../../assets/description_2.png'
import DescriptionImg3 from '../../assets/description_3.png'
import DescriptionImg4 from '../../assets/description_4.png'

export const Description = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.description}>
            <div className={style.images}>
                <img alt="description image" src={DescriptionImg1} className={style.description_img1} />
                <img alt="description image" src={DescriptionImg2} className={style.description_img2} />
                <img alt="description image" src={DescriptionImg3} className={style.description_img3} />
                <img alt="description image" src={DescriptionImg4} className={style.description_img4} />
            </div>
            <div className={style.text}>
                <div className={style.content}>
                    <p className={style.tittle}>Confidant  and<br />reliability</p>
                    <p className={style.description}>
                    You need it? We got it. We make finding your next<br />
                    shope easy, comfortable, and simple. From our<br />
                    happiness guarantee to our selective roommate<br />
                    finder option. We provide you the flexibility that you<br />
                    most desire.
                    </p>
                    <Button text="Search Shops"  class={style.button}/>
                </div>
            </div>
        </div>
    </div>
  )
}
