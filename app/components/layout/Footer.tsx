import React from "react";
import { AppText } from "@/app/components/ui/AppText";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <AppText variant="h4" weight="bold" className="text-white mb-2">
                            EcoMart
                        </AppText>
                        <AppText variant="caption" color="muted">
                            Your trusted online marketplace for quality products
                        </AppText>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <AppText variant="subtitle" weight="semibold" className="text-white mb-4">
                            Quick Links
                        </AppText>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Home
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Products
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Support */}
                    <div>
                        <AppText variant="subtitle" weight="semibold" className="text-white mb-4">
                            Support
                        </AppText>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Help Center
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                FAQs
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Contact Us
                            </a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <AppText variant="subtitle" weight="semibold" className="text-white mb-4">
                            Legal
                        </AppText>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <AppText variant="caption" color="muted">
                        © 2026 EcoMart. All rights reserved.
                    </AppText>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20v-7.21H5.413v-2.622h2.877V7.897c0-2.854 1.742-4.405 4.285-4.405 1.219 0 2.267.091 2.571.132v2.981h-1.764c-1.383 0-1.649.657-1.649 1.62v2.127h3.298l-.43 2.622h-2.867V20" />
                            </svg>
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
