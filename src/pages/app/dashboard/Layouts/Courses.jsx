import React from "react";
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <>
      <section className="w-full  md:py-24 lg:py-20">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore Our Diverse Course Offerings
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From business and technology to personal development and
                creative arts, our online courses cater to a wide range of
                interests and skill levels.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap- sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="group grid gap-4 rounded-lg bg-card p-6 shadow-lg transition-all hover:bg-card-hover hover:shadow-xl">
              <div className="flex items-center justify-between">
                <BookIcon className="h-8 w-8 text-primary" />
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Business
                </span>
              </div>
              <h3 className="text-xl font-bold">Introduction to Marketing</h3>
              <p className="text-muted-foreground">
                Explore the fundamentals of marketing and learn effective
                strategies to promote your business.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">12 hrs</span>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Enroll
                </Link>
              </div>
            </div>
            <div className="group grid gap-4 rounded-lg bg-card p-6 shadow-lg transition-all hover:bg-card-hover hover:shadow-xl">
              <div className="flex items-center justify-between">
                <CodeIcon className="h-8 w-8 text-primary" />
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Technology
                </span>
              </div>
              <h3 className="text-xl font-bold">
                Web Development Fundamentals
              </h3>
              <p className="text-muted-foreground">
                Learn the essential skills to build modern, responsive websites
                from scratch.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">24 hrs</span>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Enroll
                </Link>
              </div>
            </div>
            <div className="group grid gap-4 rounded-lg bg-card p-6 shadow-lg transition-all hover:bg-card-hover hover:shadow-xl">
              <div className="flex items-center justify-between">
                <BrushIcon className="h-8 w-8 text-primary" />
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Creative
                </span>
              </div>
              <h3 className="text-xl font-bold">Graphic Design Essentials</h3>
              <p className="text-muted-foreground">
                Unlock your creative potential and learn the fundamentals of
                graphic design. Unlock your creative potential
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">18 hrs</span>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Enroll
                </Link>
              </div>
            </div>
            <div className="group grid gap-4 rounded-lg bg-card p-6 shadow-lg transition-all hover:bg-card-hover hover:shadow-xl">
              <div className="flex items-center justify-between">
                <BriefcaseIcon className="h-8 w-8 text-primary" />
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Business
                </span>
              </div>
              <h3 className="text-xl font-bold">Entrepreneurship Essentials</h3>
              <p className="text-muted-foreground">
                Gain the knowledge and skills to turn your business idea into a
                successful venture.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">20 hrs</span>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Enroll
                </Link>
              </div>
            </div>
            <div className="group grid gap-4 rounded-lg bg-card p-6 shadow-lg transition-all hover:bg-card-hover hover:shadow-xl">
              <div className="flex items-center justify-between">
                <LightbulbIcon className="h-8 w-8 text-primary" />
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Personal Development
                </span>
              </div>
              <h3 className="text-xl font-bold">Mindfulness and Meditation</h3>
              <p className="text-muted-foreground">
                Discover the transformative power of mindfulness and learn
                effective meditation techniques.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">15 hrs</span>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Enroll
                </Link>
              </div>
            </div>
            <div className="group grid gap-4 rounded-lg bg-card p-6 shadow-lg transition-all hover:bg-card-hover hover:shadow-xl">
              <div className="flex items-center justify-between">
                <PaletteIcon className="h-8 w-8 text-primary" />
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Creative
                </span>
              </div>
              <h3 className="text-xl font-bold">Photography Fundamentals</h3>
              <p className="text-muted-foreground">
                Unlock your creative potential and learn the art of photography.
                effective meditation techniques.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">22 hrs</span>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Enroll
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Why Choose Our Online Courses?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our online courses are designed to provide you with a
                comprehensive and engaging learning experience, empowering you
                to achieve your goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="group grid gap-4 rounded-lg bg-card p-6 shadow-lg transition-all hover:bg-card-hover hover:shadow-xl">
              <LightbulbIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Expert-Led Instruction</h3>
              <p className="text-muted-foreground">
                Learn from industry experts who share their real-world knowledge
                and practical insights.
              </p>
            </div>{" "}
            <div className="group grid gap-4 rounded-lg bg-card p-6 shadow-lg transition-all hover:bg-card-hover hover:shadow-xl">
              <LightbulbIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Expert-Led Instruction</h3>
              <p className="text-muted-foreground">
                Learn from industry experts who share their real-world knowledge
                and practical insights.
              </p>
            </div>{" "}
            <div className="group grid gap-4 rounded-lg bg-card p-6 shadow-lg transition-all hover:bg-card-hover hover:shadow-xl">
              <LightbulbIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Expert-Led Instruction</h3>
              <p className="text-muted-foreground">
                Learn from industry experts who share their real-world knowledge
                and practical insights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AccessibilityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function BrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LightbulbIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PaletteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}
