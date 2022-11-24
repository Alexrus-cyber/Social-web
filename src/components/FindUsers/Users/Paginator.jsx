import React, {useState} from "react";

export const Paginator = ({totalUsersCounts, pageSize, currentPage, onPageChanged, portionSize}) =>{
    let pagesCount = Math.ceil(totalUsersCounts / pageSize);

    let pages = [];

    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize); //
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    {pages.filter(p => p>=leftPortionNumber && p<=rightPortionNumber).map((p) => {
        return <span></span>
    })}

}