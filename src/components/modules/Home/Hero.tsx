import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { HeroProps } from '@/types/heroProps';
import { LargeSparkleIcon, SparkleIcon } from '@/assets/icons/SparkleIcon';
import Link from 'next/link';

export function Hero({
  badge = {
    text: 'AI-Powered Healthcare',
  },
  heading = {
    line1: 'Find Your Perfect',
    line2: 'Doctor with AI',
  },
  description = [
    'Our advanced AI technology analyzes your symptoms, medical',
    'history, and preferences to match you with the best-fit doctors',
    'in seconds.',
  ],

  stats = [
    { value: '10k+', label: 'Patients Served' },
    { value: '1000+', label: 'Expert Doctors' },
    {
      value: '4.9',
      label: 'Patient Rating',
      icon: <Star className="size-6 fill-yellow-400 stroke-yellow-400" />,
    },
  ],
  formCard = {
    title: 'AI Doctor Finder',
    symptomLabel: 'What are your symptoms?',
    symptomPlaceholder: 'e.g., headache, fever, cough',
    specialtyLabel: 'Preferred specialty',
    specialtyOptions: [
      'General Physician',
      'Cardiologist',
      'Dermatologist',
      'Pediatrician',
      'Orthopedic',
    ],
    defaultSpecialty: 'General Physician',
    submitText: 'Get AI Recommendations',
    footerText:
      '✨ Powered by advanced AI algorithms for accurate doctor matching',
  },
}: HeroProps) {
  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.currentTarget);
  //     const data = {
  //       symptoms: formData.get('symptoms') as string,
  //       specialty: formData.get('specialty') as string,
  //     };
  //     formCard.onSubmit?.(data);
  //   };

  return (
    <div className="w-full relative py-24">
      {/* Radial Gradient Background from Bottom */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          background:
            'radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)',
        }}
      />
      {/* Content Container */}
      <div className="w-full px-4 py-8 relative">
        <div className="mx-auto container px-6 lg:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Hero Content */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 self-start rounded-full px-4 py-2 bg-background/50">
                <SparkleIcon />
                <span className="text-accent/80 font-medium ">
                  {badge.text}
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-2 text-muted">
                <h1 className="text-lg md:text-2xl lg:text-5xl leading-[60px]">
                  {heading.line1}
                </h1>
                <h1 className="text-lg md:text-2xl lg:text-5xl leading-[60px]">
                  {heading.line2}
                </h1>
              </div>

              {/* Description */}
              <div className="space-y-1 text-[17px] leading-7 text-muted/80">
                {description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href={'/consultation'}
                  className="text-chart-1 border-chart-1 hover:text-chart-1/70 border rounded-md px-4 py-2"
                >
                  View Doctors
                </Link>
                <Link
                  href={'/consultation'}
                  className="text-muted/70  border-background hover:text-muted/60 border-4 rounded-md px-4 py-2"
                >
                  Book Appointment
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <p className="text-[25.5px] leading-9 text-muted">
                        {stat.value}
                      </p>
                      {stat.icon}
                    </div>
                    <p className="text-[13.6px] leading-6 text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Form Card */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-[600px] rounded-2xl bg-background/40 p-8 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                {/* Card Header */}
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-base leading-6 text-muted">
                    {formCard.title}
                  </h2>
                  <LargeSparkleIcon />
                </div>

                {/* Form */}
                <form className="space-y-6">
                  {/* Symptoms Input */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="symptoms"
                      className="text-[11.9px] text-muted"
                    >
                      {formCard.symptomLabel}
                    </Label>
                    <Input
                      id="symptoms"
                      name="symptoms"
                      placeholder={formCard.symptomPlaceholder}
                      className="h-[49.787px] rounded-xl border-muted/30"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className=" w-full rounded-xl bg-chart-1 text-[15.3px] hover:bg-chart-1/80 p-5"
                  >
                    {formCard.submitText}
                  </Button>
                </form>

                {/* Footer */}
                <div className="mt-6 border-t border-muted/40 pt-4">
                  <p className="text-center text-base leading-5 text-muted/90">
                    {formCard.footerText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
