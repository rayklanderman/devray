'use client';

import Image from 'next/image';

export default function StaticHeroCard() {
  return (
    <div className="w-full h-[500px] bg-ink-900 rounded-3xl shadow-2xl flex items-center justify-center border border-ink-700">
      <div className="text-center p-8">
        <Image
          src="/cropped_circle_image.png"
          alt="DevRay Logo"
          width={160}
          height={160}
          className="w-40 h-40 mx-auto mb-8 rounded-full object-cover border border-ochre-500/40"
        />
        <h2 className="text-3xl font-bold text-parchment-100 mb-2">DevRay</h2>
        <p className="text-parchment-500">Premium Development Services</p>
      </div>
    </div>
  );
}
