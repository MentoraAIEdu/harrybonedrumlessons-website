import type { Metadata } from "next";
import { StudentPortalWidget } from "../components/StudentPortalWidget";

export const metadata: Metadata = {
  title: "Student Portal Login",
  description:
    "Log in to your student portal to access lesson notes, scheduling, resources, and more.",
};

export default function StudentPortalLoginPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="hero-gradient py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
            Student Portal
          </h1>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            Log in below to access your lesson notes, scheduling, resources, and
            more.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-xl mx-auto">
          <StudentPortalWidget />
        </div>
      </section>
    </main>
  );
}
