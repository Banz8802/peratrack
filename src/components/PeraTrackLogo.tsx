import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function PeraTrackLogo({ className = "h-9 w-auto" }: LogoProps) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* Official User Uploaded PeraTrack Logo Image (No extra text) */}
      <Image
        src="/images/logos/peratrack-logo.png"
        alt="PeraTrack Logo"
        width={220}
        height={50}
        className="h-9 w-auto object-contain"
        priority
      />
    </div>
  );
}
