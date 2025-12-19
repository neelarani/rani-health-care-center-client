import { AppointmentBarChart } from '@/components/shared/AppointmentBarChart';
import { AppointmentPieChart } from '@/components/shared/AppointmentPieChart';
import { DashboardSkeleton } from '@/components/shared/DashboardSkeleton';
import { StatsCard } from '@/components/shared/StatCard';
import { getDashboardMetaData } from '@/services/meta/dashboard.service';
import { IAdminDashboardMeta } from '@/types/meta.interface';
import { Suspense } from 'react';

async function AdminDashboardContent() {
  const result = await getDashboardMetaData();

  const data: IAdminDashboardMeta = result.data;

  const totalRevenue = data.totalRevenue?._sum?.amount || 0;

  return (
    <div className="space-y-6">
      {/* Stats Cards Grid */}
      <div
        className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 ${
          data.adminCount !== undefined ? 'xl:grid-cols-6' : 'xl:grid-cols-5'
        }`}
      >
        <StatsCard
          className="bg-blue-500 border-none"
          title="Total Appointments"
          value={data.appointmentCount.toLocaleString()}
          iconName="CalendarDays"
          description="All time appointments"
          iconClassName="bg-blue-100"
        />
        <StatsCard
          className="bg-purple-500 border-none"
          title="Total Patients"
          value={data.patientCount.toLocaleString()}
          iconName="Users"
          description="Registered patients"
          iconClassName="bg-green-100"
        />
        <StatsCard
          className="bg-sky-500 border-none"
          title="Total Doctors"
          value={data.doctorCount.toLocaleString()}
          iconName="Stethoscope"
          description="Active doctors"
          iconClassName="bg-purple-100"
        />
        {data.adminCount !== undefined && (
          <StatsCard
            className="bg-green-500 border-none"
            title="Total Admins"
            value={data.adminCount.toLocaleString()}
            iconName="UserCog"
            description="System administrators"
            iconClassName="bg-orange-300"
          />
        )}
        <StatsCard
          className="bg-orange-500 border-none"
          title="Total Payments"
          value={data.paymentCount.toLocaleString()}
          iconName="CreditCard"
          description="Payment transactions"
          iconClassName="bg-indigo-100"
        />
        <StatsCard
          className="bg-green-500 border-none"
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          iconName="DollarSign"
          description="Total earnings"
          iconClassName="bg-emerald-100"
        />
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <AppointmentBarChart data={data.barChartData} />
        <AppointmentPieChart data={data.pieCharData} />
      </div>
    </div>
  );
}

const AdminDashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-muted">
          Dashboard
        </h1>
        <p className="text-muted">
          Overview of your healthcare system statistics
        </p>
      </div>

      <Suspense fallback={<DashboardSkeleton />}>
        <AdminDashboardContent />
      </Suspense>
    </div>
  );
};

export default AdminDashboardPage;
