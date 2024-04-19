import React, { useEffect, useState } from 'react';


const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  let daySuffix;


  if (day === 1 || day === 21 || day === 31) {
    daySuffix = 'st';
  } else if (day === 2 || day === 22) {
    daySuffix = 'nd';
  } else if (day === 3 || day === 23) {
    daySuffix = 'rd';
  } else {
    daySuffix = 'th';
  }

  return `${day}${daySuffix} ${month} ${year}`;
};
const DefaultTransactions = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [defaultData, setDefaultData] = useState(null);
  const [summaryData, setSummaryData] = useState(null)


  const toggleDropdown = (transactionId) => {
    setOpenDropdownId(openDropdownId === transactionId ? null : transactionId);
  };
  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem('token');

      try {
        const defaultResponse = await fetch(`${process.env.BASE_URL}/developer/transaction/get-missed-payments`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const defaultData = await defaultResponse.json();
        setDefaultData(defaultData);

        const summaryResponse = await fetch(`${process.env.BASE_URL}/developer/transaction/get-summary`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const summaryData = await summaryResponse.json();
        setSummaryData(summaryData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTransactions();
  }, []);

  const calculateDaysLeft = (dueDate) => {
    const dueDateTime = new Date(dueDate).getTime();
    const currentDateTime = new Date().getTime();
    const differenceMs = dueDateTime - currentDateTime;
    const daysDifference = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    return daysDifference >= 0 ? `${daysDifference} days left` : `${Math.abs(daysDifference)} days ago`;
  };
  return (
    <>
      <div className='space-y-6 mb-6'>
        <div className="grid md:grid-cols-4 gap-5">
          <div className='transactions-card'>
            {summaryData ? (
              <div className='text-center space-y-3'>
                <p className='text-2xl font-extrabold'>&#8358;{Math.round(parseFloat(summaryData.value.expectedEarnings)).toLocaleString()}</p>
                <p className='text-xs'>Expected Earnings</p>
                <i class="fa-regular fa-circle-info absolute top-0 right-5 cursor-pointer"></i>
              </div>
            ) : (
              <p className='text-xs'>Loading summary data...</p>
            )}
          </div>
          <div className='transactions-card'>
            {summaryData ? (
              <div className='text-center space-y-3'>
                <p className='text-2xl font-extrabold'>&#8358;{Math.round(parseFloat(summaryData.value.totalEarned)).toLocaleString()}</p>
                <p className='text-xs'>Total Default Amount</p>
                <i class="fa-regular fa-circle-info absolute top-0 right-5 cursor-pointer"></i>
              </div>
            ) : (
              <p className='text-xs'>Loading summary data...</p>
            )}
          </div>
          <div className='transactions-card'>
            {summaryData ? (
              <div className='text-center space-y-3'>
                <p className='text-2xl font-extrabold'>{Math.round(parseFloat(summaryData.value.totalMissedTransactions)).toLocaleString()}</p>
                <p className='text-xs'>Missed Payments</p>
                <i class="fa-regular fa-circle-info absolute top-0 right-5 cursor-pointer"></i>
              </div>
            ) : (
              <p className='text-xs'>Loading summary data...</p>
            )}
          </div>
          <div className='transactions-card'>
            {summaryData ? (
              <div className='text-center space-y-3'>
                <p className='text-2xl font-extrabold'> <span className='text-red-500'>{Math.round(parseFloat(summaryData.value.totalApplicationsWithMissedTransactions)).toLocaleString()}</span> of {Math.round(parseFloat(summaryData.value.totalApplicationsInTransactions)).toLocaleString()}</p>
                <p className='text-xs'>Customers who’ve missed payment</p>
                <i class="fa-regular fa-circle-info absolute top-0 right-5 cursor-pointer"></i>
              </div>
            ) : (
              <p className='text-xs'>Loading data...</p>
            )}
          </div>
        </div>
        <div className='md:px-0 px-5 md:max-w-full max-w-[350px] md:overflow-hidden overflow-x-scroll'>
          <div className="mt-8 flow-root">
            <p className='pb-2 md:max-w-xl'>Data on payments that should have beeen made but weren’t and the customers who should have paid</p>
            <div className="-mx-4  overflow-x-auto lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-[#f0f0f0]">
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 sm:pl-6">
                          ID
                        </th>
                        <th scope="col" className="table-heading">
                          CUSTOMER
                        </th>
                        <th scope="col" className="whitespace-nowrap table-heading">
                          AMOUNT
                        </th>
                        <th scope="col" className="whitespace-nowrap table-heading">
                          TYPE
                        </th>
                        <th scope="col" className="table-heading">
                          PROPERTY
                        </th>
                        <th scope="col" className="table-heading">
                          PLAN
                        </th>
                        <th scope="col" className="table-heading">
                          DUE DATE
                        </th>
                        <th scope="col" className="table-heading">
                          DATE OVERDUE
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                          <span className="sr-only">ACTIONS</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {defaultData && defaultData.value.data ? (
                        defaultData.value.data.map((transaction, index) => (
                          <tr key={index} className=''>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {index}
                            </td>
                            <td className="table-data">{`${transaction.customer.firstName} ${transaction.customer.lastName}`}</td>
                            <td className="whitespace-nowrap table-data">
                              &#8358;{Math.trunc(parseFloat(transaction.amount)).toLocaleString()}
                            </td>
                            <td className="whitespace-nowrap table-data capitalize">
                              {transaction.transactionType}
                            </td>
                            <td className="table-data">{`${transaction.house.cityName}, ${transaction.house.stateName}`}</td>
                            <td className="data">{transaction.mortgagePlan.name}</td>
                            <td className="whitespace-nowrap table-data">{formatDate(transaction.dueDate)}</td>
                            <td className="whitespace-nowrap table-data">{calculateDaysLeft(transaction.dueDate)}</td>
                            <td className="relative py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <i className="fa-light fa-ellipsis-vertical cursor-pointer" onClick={() => toggleDropdown(index)}></i>
                              {openDropdownId === index && (
                                <div className="absolute shadow rounded-md -top-10 right-5 bg-white py-2 uppercase border z-40 px-2">
                                  <div className="flex flex-col space-y-2">
                                    <div className='flex items-center w-52 text-center text-xs space-x-2'>
                                      <i class="fa-regular fa-bell"></i>
                                      <a href="#" className="block py-1">Remind Customer</a>
                                    </div>
                                    <div className='flex items-center w-52 text-center text-xs space-x-2'>
                                      <i className="fa-thin fa-sack"></i>
                                      <a href="#" className="block py-1">View Repayment Schedule</a>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="10" className="px-6 py-4 whitespace-nowrap text-sm ">
                            No data available.
                          </td>
                        </tr>
                      )}
                    </tbody>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DefaultTransactions