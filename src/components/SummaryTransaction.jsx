import React, { useEffect, useState } from 'react';


const SummaryTransaction = () => {
  const [summaryData, setSummaryData] = useState(null);
  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem('token');

      try {
        // Fetch Transaction Summary
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
  return (
    <>
      <div className='space-y-6 mb-6'>
        <h4 className='font-semibold'>Earnings Breakdown</h4>
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
                <p className='text-xs'>Total Earned</p>
                <i class="fa-regular fa-circle-info absolute top-0 right-5 cursor-pointer"></i>
              </div>
            ) : (
              <p className='text-xs'>Loading summary data...</p>
            )}
          </div>
          <div className='transactions-card'>
            {summaryData ? (
              <div className='text-center space-y-3'>
                <p className='text-2xl font-extrabold'>&#8358;{Math.round(parseFloat(summaryData.value.leftToEarn)).toLocaleString()}</p>
                <p className='text-xs'>Left To Earn</p>
                <i class="fa-regular fa-circle-info absolute top-0 right-5 cursor-pointer"></i>
              </div>
            ) : (
              <p className='text-xs'>Loading summary data...</p>
            )}
          </div>
          <div className='transactions-card'>
            {summaryData ? (
              <div className='text-center space-y-3'>
                <p className='text-2xl font-extrabold'>&#8358;{Math.round(parseFloat(summaryData.value.averageAmountEarned)).toLocaleString()}</p>
                <p className='text-xs'>Average Amount Earned</p>
                <i class="fa-regular fa-circle-info absolute top-0 right-5 cursor-pointer"></i>
              </div>
            ) : (
              <p className='text-xs'>Loading summary data...</p>
            )}
          </div>
        </div>
      </div>
      <div className='space-y-6 mb-6'>
        <h4 className='font-semibold'>Frequency Breakdown</h4>
        <div className="grid md:grid-cols-4 gap-5">
          <div className='transactions-card'>
            {summaryData ? (
              <div className='text-center space-y-3'>
                <p className='text-2xl font-extrabold'>{Math.round(parseFloat(summaryData.value.expectedNumberOfTransactions)).toLocaleString()}</p>
                <p className='text-xs'>Expected Number Of Transactions</p>
                <i class="fa-regular fa-circle-info absolute top-0 right-5 cursor-pointer"></i>
              </div>
            ) : (
              <p className='text-xs'>Loading summary data...</p>
            )}
          </div>
          <div className='transactions-card'>
            {summaryData ? (
              <div className='text-center space-y-3'>
                <p className='text-2xl font-extrabold'>{Math.round(parseFloat(summaryData.value.totalTransactions)).toLocaleString()}</p>
                <p className='text-xs'>Total Transactions</p>
                <i class="fa-regular fa-circle-info absolute top-0 right-5 cursor-pointer"></i>
              </div>
            ) : (
              <p className='text-xs'>Loading summary data...</p>
            )}
          </div>
          <div className='transactions-card'>
            {summaryData ? (
              <div className='text-center space-y-3'>
                <p className='text-2xl font-extrabold'>{Math.round(parseFloat(summaryData.value.numberOfTransactionsLeft)).toLocaleString()}</p>
                <p className='text-xs'>Number Of Transactions Left</p>
                <i class="fa-regular fa-circle-info absolute top-0 right-5 cursor-pointer"></i>
              </div>
            ) : (
              <p className='text-xs'>Loading summary data...</p>
            )}
          </div>
          <div className='transactions-card'>
            {summaryData ? (
              <div className='text-center space-y-3'>
                <p className='text-2xl font-extrabold'>{Math.round(parseFloat(summaryData.value.averageMonthlyTransactions)).toLocaleString()}</p>
                <p className='text-xs'>Average No of Transaction/ Month</p>
                <i class="fa-regular fa-circle-info absolute top-0 right-5 cursor-pointer"></i>
              </div>
            ) : (
              <p className='text-xs'>Loading summary data...</p>
            )}
          </div>
        </div>
      </div>
      <div className='space-y-6 mb-6'>
        <h4 className='font-semibold'>Default Breakdown</h4>
        <div className="grid md:grid-cols-4 gap-5">
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
                <p className='text-2xl font-extrabold'>{(parseFloat(summaryData.value.transactionDefaultRate)).toLocaleString()}%</p>
                <p className='text-xs'>Transaction Default Rate</p>
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
      </div>
    </>
  )
}

export default SummaryTransaction