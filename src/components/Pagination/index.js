import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import './style.css'
import { usePagination, DOTS } from './usePagenation';

export function Pagination(props) {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];


  
  return (
    <nav aria-label='...' className='pagination'>
      <MDBPagination size='lg' className='mb-0'>
        <MDBPaginationItem 
        disabled={currentPage === 1}
        onClick={onPrevious}
        >
          <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true'>
            Previous
          </MDBPaginationLink>
        </MDBPaginationItem>
        {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }
        return (
             <MDBPaginationItem>
             <MDBPaginationLink  
             selected={pageNumber === currentPage}
             onClick={() => onPageChange(pageNumber)}
             >
               {pageNumber}<span className='visually-hidden'>(current)</span>
             </MDBPaginationLink>
           </MDBPaginationItem>
        );
        })}
        <MDBPaginationItem>
          <MDBPaginationLink 
            disabled={currentPage === lastPage}
           onClick={onNext}
          >Next</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
  );
}