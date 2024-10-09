import { useState, useEffect } from 'react';
import { databases } from '@/lib/appwrite';
import { useUserStore } from '@/lib/store';
import { Bar } from 'react-chartjs-2';

export default function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState(null);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (user) {
      fetchAnalytics();
    }
  }, [user]);

  const fetchAnalytics = async () => {
    try {
      const response = await databases.getDocument('YOUR_DATABASE_ID', 'analytics', user.$id);
      setAnalytics(response);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  };

  if (!analytics) return <div>Loading...</div>;

  const chartData = {
    labels: ['Donations', 'Memberships', 'Shop Sales', 'Commissions'],
    datasets: [
      {
        label: 'Revenue',
        data: [
          analytics.totalDonations,
          analytics.totalMemberships,
          analytics.totalShopSales,
          analytics.totalCommissions,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <div>
        <h2>Total Revenue: ${analytics.totalRevenue}</h2>
        <Bar data={chartData} />
      </div>
      <div>
        <h2>Top Supporters</h2>
        <ul>
          {analytics.topSupporters.map((supporter) => (
            <li key={supporter.userId}>
              {supporter.name} - ${supporter.totalContribution}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}