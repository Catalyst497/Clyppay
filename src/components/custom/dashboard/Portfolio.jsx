import React, { useState } from 'react';
import cryptoPortfolio from './data.json';
import Pagination from '@/components/reusables/Pagination'; // Adjust the import path as needed
import { PortfolioItem } from '@/components/reusables/PortfolioItem'; // Adjust the import path as needed
import { Card, CardTitle } from '@/components/shadcn/Card';

const itemsPerPage = 2;

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedItems = cryptoPortfolio.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Card className="py-4 px-3 h-full">
        <CardTitle>Portfolio</CardTitle>
        <div className='flex min-h-[90%] flex-col justify-between'>
        <ul className='flex flex-col space-y-5'>
        {paginatedItems.map((item, index) => (
          <li key={index} >
            <PortfolioItem
              logo={item.logo}
              name={item.name}
              abbr={item.symbol}
              quantity={item.quantity}
              price_per_unit={item.price_per_unit}
              total_value={item.total_value}
              percentage_change={item.percentage_change}
            />
          </li>
        ))}
      </ul>
      <div className='w-full flex items-center justify-center'>
      <Pagination
        totalItems={cryptoPortfolio.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      </div>
     
        </div>

    </Card>
  );
};

export default Portfolio;
