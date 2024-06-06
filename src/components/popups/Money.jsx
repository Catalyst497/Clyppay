import React from 'react'
import Modal from '@/components/shared/custom/Modal'
import { Command,CommandInput,CommandEmpty,CommandGroup,CommandItem } from '@/components/shared/shadcn/command'

import bitcoin from "@/assets/icons/bitcoin.svg";
import cosmos from "@/assets/icons/cosmos.svg";
import etherum from "@/assets/icons/etherum.svg";


export const arr = 
[
    {
    
      "logo": bitcoin,
      "name": "Bitcoin",
      "symbol": "BTC",
      "balance": 2.5,

    },
    {
  
      "logo": etherum,
      "name": "Ethereum",
      "symbol": "ETH",
      "balance": 10,
   
    },
    {
      "name": "Cosmos",
      "logo": cosmos,
      "symbol": "BTC",
      "balance": 2.5,

    },
  ]

function Money() {
  const [value, setValue] = React.useState("")

  return (
   <Modal widthClass={'w-[600px]'} isOpen = {true}> 
   <div className='w-full flex justify-between items-center'>
    <h2>Wallets</h2>
    <button>Add new</button>

   </div>
   <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {arr?.map((x) => (
              <CommandItem
                key={x.name}
                value={x.name}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                
                }}
              >
                
                {x.symbol}
              </CommandItem>
            ))}
          </CommandGroup>
  </Command>

    </Modal>
  )
}

export default Money