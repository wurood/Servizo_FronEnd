import React ,{useState,useMemo} from 'react'
import style from './style.module.css'
import { ListItem } from './ListItem'
import {data} from '../moc-data';
import { Pagination } from '../Pagination'

let PageSize = 6;

export const ShopesList = () => {
    const cards = [1, 2, 3];
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
  
  return (
    <div className={style.list}>
         {currentTableData.map(item => {
            return (
              <ListItem  tittle={item.first_name}/>

            );
          })}

      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  )
}
