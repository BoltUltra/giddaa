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

const SuccessfulTransactions = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [successfulData, setSuccessfulData] = useState(null);


  const toggleDropdown = (transactionId) => {
    setOpenDropdownId(openDropdownId === transactionId ? null : transactionId);
  };
  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem('token');

      try {
        const successfulResponse = await fetch(`${process.env.BASE_URL}/developer/transaction/get-succesful-payments`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const successfulData = await successfulResponse.json();
        setSuccessfulData(successfulData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTransactions();
  }, []);
  return (
    <>
      <div className='space-y-6 mb-6'>
        <div className="grid md:grid-cols-4">
          <div className='transactions-card'>
            {successfulData ? (
              <div className='text-center space-y-3'>
                <p className='text-2xl font-extrabold'>{successfulData.value.totalRecords}</p>
                <p className='text-xs'>Successful Transactions</p>
                <i className="fa-regular fa-circle-info absolute top-0 right-5 cursor-pointer"></i>
              </div>
            ) : (
              <p className='text-xs'>Loading data...</p>
            )}
          </div>
        </div>
        <div className='md:px-0 px-5 md:max-w-full max-w-[350px] md:overflow-hidden overflow-x-scroll'>
          <div className="mt-8 flow-root">
            <p className='pb-2'>Successful transactions made by customers in your organization</p>
            <div className="-mx-4  overflow-x-auto lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-[#f0f0f0]">
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 sm:pl-6">
                          RRR
                        </th>
                        <th scope="col" className="table-heading">
                          CUSTOMER
                        </th>
                        <th scope="col" className="whitespace-nowrap table-heading">
                          TOTAL PAID
                        </th>
                        <th scope="col" className="whitespace-nowrap table-heading">
                          YOUR EARNINGS
                        </th>
                        <th scope="col" className="table-heading">
                          GIDDAA
                        </th>
                        <th scope="col" className="table-heading">
                          TYPE
                        </th>
                        <th scope="col" className="table-heading">
                          PROPERTY
                        </th>
                        <th scope="col" className="table-heading">
                          PLAN
                        </th>
                        <th scope="col" className="table-heading">
                          PAYMENT DATE
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {successfulData && successfulData.value.data ? (
                        successfulData.value.data.map((transaction) => (
                          <tr key={transaction.application.applicationId} className=''>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {transaction.rrr}
                            </td>
                            <td className="table-data">{`${transaction.customer.firstName} ${transaction.customer.lastName}`}</td>
                            <td className="whitespace-nowrap table-data">
                              <p className="flex flex-col">

                                <span>&#8358;{Math.round(parseFloat(transaction.amount)).toLocaleString()}</span>
                                <span className="text-xs text-primary font-semibold">(100%)</span>
                              </p>
                            </td>
                            <td className="whitespace-nowrap table-data">
                              <p className="flex flex-col">

                                <span>&#8358;{Math.round(parseFloat(transaction.organizationAmount)).toLocaleString()}</span>
                                <span className="text-xs text-primary font-semibold">(97%)</span>
                              </p>
                            </td>
                            <td className="whitespace-nowrap table-data">
                              <p className="flex flex-col">

                                <span>&#8358;{Math.round(parseFloat(transaction.giddaaAmount)).toLocaleString()}</span>
                                <span className="text-xs text-primary font-semibold">(3%)</span>
                              </p>
                            </td>
                            <td className="table-data">{transaction.transactionType}</td>
                            <td className="table-data">{`${transaction.house.cityName}, ${transaction.house.stateName}`}</td>
                            <td className="table-data">{transaction.mortgagePlan.name}</td>
                            <td className="whitespace-nowrap table-data">{formatDate(transaction.dateOfPayment)}</td>
                            <td className="relative py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <i className="fa-light fa-ellipsis-vertical cursor-pointer" onClick={() => toggleDropdown(transaction.rrr)}></i>
                              {openDropdownId === transaction.rrr && (
                                <div className="absolute shadow rounded-md right-0 bg-white py-2 uppercase border z-10">
                                  <div className='flex flex-col justify-center divide-y w-44 text-center'>
                                    <a href="#" className="block py-1">View Receipt</a>
                                    <a href="#" className="block py-1">Download Receipt</a>
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

export default SuccessfulTransactions