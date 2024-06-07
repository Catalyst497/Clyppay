// Portfolio.jsx

import React, { useState, useEffect } from 'react';
import { useCoinsMarketData } from '@/api/apiQueries/useCoinsMarketData';
import Pagination from '@/components/shared/custom/Pagination'; // Adjust the import path as needed
import { PortfolioItem } from '@/components/shared/custom/PortfolioItem'; // Adjust the import path as needed
import { Card, CardTitle } from '@/components/shared/shadcn/card';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const skip = (currentPage - 1) * itemsPerPage;
  
  const { data, error, isLoading, isFetching } = useCoinsMarketData('usd', skip, itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1); // Reset to first page if data source changes
  }, [itemsPerPage]);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.log(error)
    return <div>Error: {error.message}</div>};

  const totalItems = data?.totalItems || 0; // Assuming `data` has `totalItems` property
  const paginatedItems = data?.coins || [];

  return (
    <Card className="py-4 px-3 h-full">
      <CardTitle>Portfolio</CardTitle>
      <div className='flex min-h-[90%] flex-col justify-between'>
        <ul className='flex flex-col space-y-5'>
          {paginatedItems.map((item) => (
            <li key={item.id} >
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
            totalItems={totalItems}
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
