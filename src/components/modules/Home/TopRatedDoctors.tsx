/* eslint-disable @typescript-eslint/no-explicit-any */
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getAllDoctors } from '@/services/doctor/doctorScedule.services';

type Doctor = {
  id: string;
  name: string;
  profilePhoto: string;
  qualification: string;
  designation: string;
  currentWorkingPlace: string;
  experience: number;
  appointmentFee: number;
  averageRating: number;
  review: any[];
};

const TopRatedDoctors = async () => {
  const result = await getAllDoctors();

  console.log(result, 'doctor info');

  if (!result?.success) return null;

  // top rated 3 doctors
  const doctors: Doctor[] = result.data
    .sort(
      (a: Doctor, b: Doctor) => (b.averageRating || 0) - (a.averageRating || 0)
    )
    .slice(0, 3);

  return (
    <section className="bg-foreground py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-muted">
            Our Top Rated Doctor
          </h2>
          <p className="text-muted/80 mt-4">
            Access to medical experts from various specialities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {doctors.slice(0, 4).map(doctor => (
            <Card
              key={doctor.id}
              className="overflow-hidden hover:shadow-xl transition-shadow "
            >
              <CardHeader className="bg-blue-200 items-center p-6">
                <Image
                  src={doctor.profilePhoto}
                  alt={doctor.name}
                  width={96}
                  height={96}
                  className="rounded-full border-4 border-muted"
                />
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex justify-between items-center my-3">
                  <div>
                    <CardTitle className="text-lg font-bold">
                      {doctor.name}
                    </CardTitle>

                    <p className="text-primary font-medium mt-1">
                      {doctor.qualification}
                    </p>

                    <p className="text-base text-black mt-1 font-semibold">
                      {doctor.designation}
                    </p>
                  </div>

                  <div>
                    <p className="bg-green-200 text-center rounded-full">
                      address
                    </p>
                    <p className="text-sm text-black font-semibold">
                      {doctor.currentWorkingPlace}
                    </p>

                    <div className="flex items-center text-base font-semibold">
                      <Star
                        className="text-yellow-400 fill-current"
                        size={16}
                      />
                      <span className="ml-2 text-black">
                        {doctor.averageRating || 0}
                      </span>
                      <span className="ml-2 text-black">
                        ({doctor.review.length} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex justify-center">
                <Link
                  href="/consultation"
                  className="border-chart-1 border font-bold py-2 px-6 rounded-md bg-background hover:bg-background/80 text-muted duration-300 hover:text-muted"
                >
                  Book Now
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            href="/consultation"
            className="bg-chart-1 hover:bg-chart-1/80 px-4 py-2 rounded-md font-bold"
          >
            View All Doctors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;
