"use client";

import { useState, useEffect } from "react";

export default function CookiePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem("cookieConsent");
    if (!cookieChoice) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    // You can add additional logic here for accepting all cookies
    console.log("All cookies accepted");
  };

  const handleRefuseNonEssential = () => {
    localStorage.setItem("cookieConsent", "essential-only");
    setIsVisible(false);
    // You can add additional logic here for refusing non-essential cookies
    console.log("Non-essential cookies refused");
  };

  const handleShowMore = () => {
    // You can add logic here to show more information about cookies
    console.log("Show more clicked");
    // For now, we'll just open a new tab with X's cookie policy
    window.open("https://twitter.com/privacy", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Left side - Text content */}
          <div className="flex-1">
            <div className="text-gray-900 dark:text-gray-100">
              <h3 className="text-base font-semibold mb-2">
                Did someone say … cookies?
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                X and its partners use cookies to provide you with a better,
                safer and faster service and to support our business. Some
                cookies are necessary to use our services, improve our services,
                and make sure they work properly.{" "}
                <button
                  onClick={handleShowMore}
                  className="text-gray-900 dark:text-gray-100 underline hover:no-underline focus:outline-none focus:underline"
                  type="button"
                >
                  Show more about your choices.
                </button>
              </p>
            </div>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex flex-col gap-2 min-w-[200px]">
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              type="button"
            >
              Accept all cookies
            </button>
            <button
              onClick={handleRefuseNonEssential}
              className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              type="button"
            >
              Refuse non-essential cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
