"use client";

import React, { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Faq() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden">
      {showWhatsApp && (
        <FloatingWhatsApp
          avatar="/image/logo.svg"
          className="text-neutral"
          phoneNumber="6281255446710"
          accountName="Baitul Adab"
          allowEsc={true}
        />
      )}

      <div className="w-full px-4 lg:px-16 py-20 lg:py-32 flex flex-col gap-8 items-center justify-center">
        <span className="text-neutral text-8xl font-bold">FAQ</span>
        <div className="flex flex-col w-full lg:w-3/4 gap-4">
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 text-neutral"
          >
            <div className="collapse-title text-xl font-semibold">
              Can I choose my meals?
            </div>
            <div className="collapse-content">
              <p>
                Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-arrow bg-base-100 text-neutral"
          >
            <div className="collapse-title text-xl font-semibold">
              When will I receive my order?
            </div>
            <div className="collapse-content">
              <p>
                Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget.
              </p>
            </div>
          </div>
          <div
            tabIndex={2}
            className="collapse collapse-arrow bg-base-100 text-neutral"
          >
            <div className="collapse-title text-xl font-semibold">
              Can I skip a delivery?
            </div>
            <div className="collapse-content">
              <p>
                Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget.
              </p>
            </div>
          </div>
          <div
            tabIndex={3}
            className="collapse collapse-arrow bg-base-100 text-neutral"
          >
            <div className="collapse-title text-xl font-semibold">
              Can I add Extras to my delivery?
            </div>
            <div className="collapse-content">
              <p>
                Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
