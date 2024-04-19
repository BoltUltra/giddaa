import React, { Fragment } from 'react';
import { Tab } from '@headlessui/react'
import Sidebar from './Sidebar';
import SummaryTransaction from './SummaryTransaction';
import SuccessfulTransactions from './SuccessfulTransactions';
import ExpectedTransactions from './ExpectedTransactions';
import DefaultTransactions from './DefaultTransactions';



const Transactions = () => {
  return (
    <section className='flex items-start font-red-hat'>
      <Sidebar />
      <div className='md:ml-[20%] md:px-14 md:py-14 px-5 py-14  md:w-[80%] md:mt-0 mt-14'>
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className='milik text-4xl pb-4'>Transactions & Earnings</h3>
            <p>View all your transactions and how much you have earned from customers</p>
          </div>
          <div className="w-14 h-14 md:flex hidden items-center justify-center rounded-full text-white bg-primary relative">
            <i class="fa-regular fa-bell text-2xl"></i>
            <span className="absolute bg-white rounded-full text-primary top-2 right-3 h-4 w-4 flex text-xs items-center justify-center">2</span>
          </div>
        </div>

        <div className='mt-9'>
          <Tab.Group>
            <Tab.List className='border-b space-x-5 text-sm md:overflow-hidden md:flex-none flex md:max-w-full max-w-[350px] overflow-x-scroll'>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected ? 'active-tab' : 'text-[#707070]'
                    }
                  >
                    SUMMARY
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected ? 'active-tab whitespace-nowrap' : 'text-[#707070] whitespace-nowrap'
                    }
                  >
                    SUCCESSFUL TRANSACTIONS
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected ? 'active-tab whitespace-nowrap' : 'text-[#707070] whitespace-nowrap'
                    }
                  >
                    EXPECTED TRANSACTIONS
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected ? 'active-tab' : 'text-[#707070]'
                    }
                  >
                    DEFAULTS
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected ? 'active-tab' : 'text-[#707070]'
                    }
                  >
                    ANALYTICS
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected ? 'active-tab' : 'text-[#707070]'
                    }
                  >
                    FORECAST
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className='mt-6'>
              <Tab.Panel>
                <SummaryTransaction />
              </Tab.Panel>
              <Tab.Panel>
                <SuccessfulTransactions />
              </Tab.Panel>
              <Tab.Panel>
                <ExpectedTransactions />
              </Tab.Panel>
              <Tab.Panel>
                <DefaultTransactions />
              </Tab.Panel>
              <Tab.Panel>
                No Data Available
              </Tab.Panel>
              <Tab.Panel>
                No Data Available
              </Tab.Panel>


            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default Transactions;
