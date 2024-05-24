import React from 'react';

function PortfolioItem({ logo, name, abbr, quantity, price_per_unit, total_value, percentage_change }) {
  return (
    <div className="min-w-[200px] flex justify-between border-input rounded-full bg-background gap-5 px-4 py-2 ">
      <div className="flex items-center space-x-2">
        <div className="icon-size rounded-full overflow-hidden flex  items-centerjustify-center">
          <img src={logo} alt={name} />
        </div>
        <div className="item-details">
          <h3 className='font-bold text-md'>{name}</h3>
          <p className='font-light text-xs'>{abbr}</p>
        </div>
      </div>
      <div className="text-right flex flex-col">
        <span className='text-primary'> ${price_per_unit}.00</span>
        <span className='text-green-500'> {percentage_change}</span>
      </div>
    </div>
  );
}

export { PortfolioItem };
