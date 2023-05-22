import React ,{useState,useMemo} from 'react'
import style from './style.module.css'
import {Button} from '../../components/Button'
import {Card} from './Card/index'
import { Pagination } from './Pagination'
import {data} from './moc-data';

let PageSize = 6;

export const Cards = () => {
  // const [data, setData] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className={style.cards_wrapper}>
        <div className={style.first_section}>
        <p className={style.tittle}>
        list  of  Shopes
        <span className={style.border}></span>
        </p>
        <Button text="View All Property" class={style.button}/>
        </div>
        <div className={style.cards}>
        {currentTableData.map(item => {
            return (
              <Card  tittle={item.first_name}/>

            );
          })}
        </div>
        <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  )
}
