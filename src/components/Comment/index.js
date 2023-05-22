import React from 'react'
import style from './style.module.css'
import Apostrophic from '../../assets/comment_abost.png'
import image from '../../assets/comment_image.png'
import personImage from '../../assets/person.png'

export const Comment = () => {
  return (
    <div className={style.comment}>
        <div className={style.text}>
            <img alt="apostrophic" src={Apostrophic} className={style.apostrophic} />
            <p className={style.comment_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam<br />
            interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel<br />
            pellentesque est. Curabitur at odio sit amet libero vulputate<br />
            efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam<br />
            massa, faucibus id pretium ac, mattis eu velit. Donec sed risus<br />
            a lacus fringilla finibus.
            </p>
            <div className={style.person}>
            <img alt="image" src={image} className={style.image} />
            </div>
        </div>
        <div className={style.image_section}>
            <img alt="person" src={personImage} className={style.person_image} />
            <span>Harry Wilson</span>
        </div>
    </div>
  )
}
