import { ButtonPill } from '@/components/shared/shadcn/button'
import React from 'react'

function AccountTabs() {
  return (
    <div className='flex space-x-5'>
<ButtonPill>Accounts</ButtonPill>
<ButtonPill>Cards</ButtonPill>
<ButtonPill>Savings</ButtonPill>



    </div>
  )
}

export default AccountTabs