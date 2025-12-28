import DoctorGrid from '@/components/modules/Consultation/DoctorGrid';
import { TableSkeleton } from '@/components/shared/TableSkeleton';
import { getAllDoctors } from '@/services/doctor/doctorScedule.services';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

const TopRatedDoctors = async () => {
  const doctorsResponse = await getAllDoctors();
  const doctors = doctorsResponse?.data?.slice(0, 4) || [];

  return (
    <div className="container mx-auto my-24 px-8">
      {/* Doctor Grid */}
      <Suspense fallback={<TableSkeleton columns={3} />}>
        <DoctorGrid doctors={doctors} />
      </Suspense>

      <div className="flex justify-center items-center mt-12 ">
        <Link
          href={'/consultation'}
          className="font-bold text-base flex gap-2 hover:text-primary py-2 rounded-lg text-muted"
        >
          All Doctors <ArrowRight></ArrowRight>
        </Link>
      </div>
    </div>
  );
};

export default TopRatedDoctors;
