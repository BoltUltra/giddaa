import React from 'react'

const PurchaseOptions = () => {
  return (
    <section className='md:px-20 px-5 py-10 font-red-hat'>
      <div className='flex flex-col max-w-md text-center md:-ml-5 -ml-24'>
        <h3 className='milik text-primary font-bold text-xl md:text-4xl'>Your Purchase Options</h3>
        <img src="/svg/line.svg" alt="" className='md:w-3/4 w-2/4 mx-auto' />
      </div>

      <p className='text-center md:max-w-lg mx-auto md:text-base text-sm py-10'>Buying a home isn’t a one-size fits all kind of purchase — we know!. So…we give you all the options the market has to offer to choose from!</p>
      <div className='grid md:grid-cols-3 gap-7'>
        <div className='purchase-option bg-[#f3faf2]'>
          <img src="/svg/mortgages.svg" alt="" className='absolute md:top-10 md:left-10 top-5 left-5 md:w-10 w-8' />
          <div className="text-center text-primary pb-4">
            <h3 className='milik md:text-2xl text-xl'>Mortgages</h3>
            <p className='text-xs'>THE SLOW TURTLE</p>
          </div>
          <p className='leading-normal'>Imagine you want to buy a house, but you don’t have all the money upfront. A mortgage is like a loan from a bank or a lender that helps you buy the house now, and you pay back the loan over time, usually with interest. It’s a way to spread out the cost of buying a house over several years instead of paying for it all at once. Once you pay off the mortgage, you own the house outright.</p>

          <div className="flex space-x-1">
            <img src="/svg/bullet.svg" alt="" />
            <p className="font-semibold text-primary md:text-base text-sm">View Another Explanation</p>
            <img src="/svg/light.svg" alt="" />
          </div>

          <div>
            <h4 className='milik font-bold md:text-2xl text-xl text-primary text-center pb-3'>Features of Mortgages</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <img src="/svg/list-option.svg" alt="" />
                <p className='md:text-base text-sm'>For budget conscious people without the money to make large payments.</p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/svg/list-option.svg" alt="" />
                <p className='md:text-base text-sm'>Mostly offered by banks & financial institutions</p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/svg/list-option.svg" alt="" />
                <p className='md:text-base text-sm'>Typically attracts payment of interest</p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/svg/list-option.svg" alt="" />
                <p className='md:text-base text-sm'>Payment periods are usually long term <span className="font-bold">(Typically between 10 - 30 years)</span> </p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/svg/list-option.svg" alt="" />
                <p className='md:text-base text-sm'>Monthly Payments are fixed, meaning it remains the same throughout the payment period. For example, you pay N150,000 in Month 1, you’ll pay N150,000 in Month 70. The payment remains the same over time.</p>
              </div>
            </div>
          </div>

          <div className='pt-36'>
            <button className="flex items-center space-x-3 w-[95%] mx-auto border-2 border-primary bg-white rounded-full p-3">
              <img src="/svg/play.svg" alt="" />
              <p className='text-xs'>WATCH THE VIDEO TO LEARN MORE</p>
            </button>
          </div>
        </div>
        <div className='purchase-option bg-[#f5f5de]'>
          <img src="/svg/payment-plans.svg" alt="" className='absolute md:top-12 md:left-6 top-10 left-5 md:w-12 w-10' />
          <div className="text-center text-primary pb-4">
            <h3 className='milik md:text-2xl text-xl'>Payment Plans</h3>
            <p className='text-xs'>THE GALLOPING HORSE</p>
          </div>
          <p className='leading-normal'>Imagine you’re looking to buy your dream house, but you don’t have all the money saved up. A payment plan is a structured arrangement where you agree to pay for your home over a period of time instead of all at once. It allows you to split the cost into smaller, manageable payments spread out over months, or years until the full amount is paid off. This makes the purchase of your dream home more affordable and accessible by breaking down the total cost into more managable payments, usually monthly.</p>

          <div className="flex space-x-1">
            <img src="/svg/bullet.svg" alt="" />
            <p className="font-semibold text-primary md:text-base text-sm">View Another Explanation</p>
            <img src="/svg/light.svg" alt="" />
          </div>

          <div>
            <h4 className='milik font-bold md:text-2xl text-xl text-primary text-center pb-3'>Features of Payment Plans</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <img src="/svg/list-option.svg" alt="" />
                <p className='md:text-base text-sm'>For people who want pocket friendly options, but don’t want to pay interest</p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/svg/list-option.svg" alt="" />
                <p className='md:text-base text-sm'>Mostly offered by property Developers</p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/svg/list-option.svg" alt="" />
                <p className='md:text-base text-sm'>Usually zero (0%) interest. Payment plans usally don’t attract interest.</p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/svg/list-option.svg" alt="" />
                <p className='md:text-base text-sm'>Payment periods are usually short term <span className="font-bold">(6 Months - 3 Years)</span> </p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/svg/list-option.svg" alt="" />
                <p className='md:text-base text-sm'>Like ,mortgages, monthly payments are also fixed, but may change if the property developer experiences issues during development. If periodic payments are subject to change, the developer usually states it in your offer letter.</p>
              </div>
            </div>
          </div>

          <div className='pt-5'>
            <button className="flex items-center space-x-3 w-[95%] mx-auto border-2 border-primary bg-white rounded-full p-3">
              <img src="/svg/play.svg" alt="" />
              <p className='text-xs'>WATCH THE VIDEO TO LEARN MORE</p>
            </button>
          </div>
        </div>
        <div className='purchase-option bg-[#f0f0f0]'>
          <img src="/svg/outright-purchase.svg" alt="" className='absolute md:top-10 md:left-7 top-10 left-5 md:w-12 w-10' />
          <div className="text-center text-primary pb-4">
            <h3 className='milik md:text-2xl text-xl'>Ouright Purchase</h3>
            <p className='text-xs'>THE SWIFT RABBIT</p>
          </div>
          <p className='leading-normal'>The outright purchase of a house refers to buying a home directly without the need for financing through a mortgage or creation of flexible payment plans by developers. In this scenario, you pay the entire purchase price upfront using your own funds or savings, without relying on a loan from a bank or flexible payment options from developers. This means that once the transaction is complete, the you own the property outright, without any debt or ongoing payments to a lender or property developer.</p>

          <div className="flex space-x-1">
            <img src="/svg/bullet.svg" alt="" />
            <p className="font-semibold text-primary md:text-base text-sm">View Another Explanation</p>
            <img src="/svg/light.svg" alt="" />
          </div>

          <div>
            <h4 className='milik font-bold md:text-2xl text-xl text-primary text-center pb-3'>Features of Outright Purchase</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <img src="/svg/list-option.svg" alt="" />
                <p className='md:text-base text-sm'>For people who have the ability to make large purchases at once.</p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/svg/list-option.svg" alt="" />
                <p className='md:text-base text-sm'>Mostly offered by property Developers</p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/svg/list-option.svg" alt="" />
                <p className='md:text-base text-sm'>Usually zero (0%) interest. Payment plans usally don’t attract interest.</p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/svg/list-option.svg" alt="" />
                <p className='md:text-base text-sm'>There are no payment periods. This requires a one-time payment.</p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/svg/list-option.svg" alt="" />
                <p className='md:text-base text-sm'>This requires one lump sum payment, upon which the property is fully yours.</p>
              </div>
            </div>
          </div>

          <div className='pt-20'>
            <button className="flex items-center space-x-3 w-[95%] mx-auto border-2 border-primary bg-white rounded-full p-3">
              <img src="/svg/play.svg" alt="" />
              <p className='text-xs'>WATCH THE VIDEO TO LEARN MORE</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PurchaseOptions