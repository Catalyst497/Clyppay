// Pagination.jsx

import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { PaginationEllipsis } from "@/components/shared/shadcn/pagination";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const ellipsis = <PaginationEllipsis key="ellipsis" />;

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`${currentPage === i ? 'bg-primary text-primary-foreground' : ''} icon-size rounded-full grid place-items-center px-4 py-2`}
          >
            {i}
          </button>
        );
      }
    } else {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`${currentPage === 1 ? 'bg-primary text-primary-foreground' : ''} icon-size rounded-full grid place-items-center px-4 py-2`}
        >
          1
        </button>
      );

      if (currentPage > 3) {
        pageNumbers.push(ellipsis);
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`${currentPage === i ? 'bg-primary text-primary-foreground' : ''} icon-size rounded-full grid place-items-center px-4 py-2`}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push(ellipsis);
      }

      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`${currentPage === totalPages ? 'bg-primary text-primary-foreground' : ''} icon-size rounded-full grid place-items-center px-4 py-2`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination flex items-center space-x-5">
      <button
        className='icon-size bg-muted rounded-full p-3'
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft />
      </button>
      {renderPageNumbers()}
      <button
        className='icon-size bg-muted rounded-full p-3'
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
