import React, { useState } from "react";
import PaginationComponent from './PaginationComponent';
import styles from './pagination.module.css';

const Pagination = (props) => {
    const { products, pageLimit, dataLimit, pageType, user, setUser, clickadd, setClickadd} = props;
    const pages = Math.ceil(products.length / dataLimit)
    const [currentPage, setCurrentPage] = useState(1);
    let lastPageNum;
    let start;
    console.log(pageLimit, dataLimit);
    console.log(pages, currentPage);
    function goToNextPage() {
        if(currentPage<pages){
            setCurrentPage((page) => page + 1);
       } 
    }
  
    function goToPreviousPage() {
        if(currentPage>1){
            setCurrentPage((page) => page - 1);
        }
    }
  
    function changePage(event) {
       const pageNumber = Number(event.target.textContent);
       setCurrentPage(pageNumber);
    }
  
    const getPaginatedData = () => {
       const startIndex = currentPage * dataLimit - dataLimit;
       const endIndex = startIndex + dataLimit;
       return products.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
       //let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
       if(pages<=pageLimit){
        start = 0;
        return new Array(pages).fill().map((_, idx) => start + idx + 1);
       }else{
        start = currentPage+pageLimit-1<=pages? currentPage-1: pages-pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
       }
    };
  
    return (
      <div>
      {/* show the posts, 6 posts at a time */}
      <div className={styles.main}>
        {getPaginatedData().map((product, idx) => (
          <PaginationComponent key={idx} product={product} pageType={pageType} 
            user={user} setUser={setUser} clickadd={clickadd} setClickadd={setClickadd}/>
        ))}
      </div>
  
      {/* show the pagiantion
          it consists of next and previous buttons
          along with page numbers, in our case, 5 page
          numbers at a time
      */}
      <div className={styles.pagination}>
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={currentPage === 1?  styles.directionDisabled : styles.direction}
        >
          prev
        </button>
        {
            currentPage>1? <p>...</p> : null
        }
        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => {
            lastPageNum = item;
            return (
                <button
                  key={index}
                  onClick={changePage}
                  className={currentPage === item ? styles.pageActive : styles.pageInactive}
                >
                  <small>{item}</small>
                </button>
              )
            })
        }
        {
            lastPageNum<pages? <p>...</p> : null
        }
  
        {/* next button */}
        <button
          onClick={goToNextPage}
          className={currentPage === pages ? styles.directionDisabled : styles.direction}
        >
          next
        </button>
      </div>
    </div>
    );
  }

  export default Pagination;