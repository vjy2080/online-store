"use client";

import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { AppText } from "@/app/components/ui/AppText";
import { AppButton } from "@/app/components/ui/AppButton";
import { AppCard } from "@/app/components/ui/AppCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <AppText variant="h1" weight="bold" className="mb-4">
              Welcome to EcoMart
            </AppText>
            <AppText variant="subtitle" color="muted" className="mb-8">
              Your trusted online marketplace for sustainable, high-quality products.
              Manage your store with our powerful dashboard.
            </AppText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AppButton
                onClick={() => window.location.href = "/dashboard"}
              >
                Go to Dashboard
              </AppButton>
              <AppButton variant="secondary">
                Learn More
              </AppButton>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <AppCard title="📊 Analytics" hoverable>
              <AppText variant="body" color="muted">
                Track your sales, orders, and customer metrics in real-time with comprehensive analytics.
              </AppText>
            </AppCard>
            <AppCard title="🛍️ Product Management" hoverable>
              <AppText variant="body" color="muted">
                Easily manage your product catalog with inventory tracking and category management.
              </AppText>
            </AppCard>
            <AppCard title="📦 Order Tracking" hoverable>
              <AppText variant="body" color="muted">
                Monitor order status, customer information, and shipping details all in one place.
              </AppText>
            </AppCard>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
            <AppText variant="h3" weight="bold" className="mb-6">
              Why Choose EcoMart?
            </AppText>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <AppText color="muted">
                  Professional dashboard with real-time data
                </AppText>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <AppText color="muted">
                  Reusable, production-ready components
                </AppText>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <AppText color="muted">
                  Fully responsive design for all devices
                </AppText>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <AppText color="muted">
                  Dark mode support out of the box
                </AppText>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
