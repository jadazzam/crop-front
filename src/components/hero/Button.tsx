'use client';
import React, { useState } from 'react';
import { HeroSectionBlock } from '@/components/hero/index';


export function HeroSectionBlockButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <HeroSectionBlock.Button hovered={hovered} setHovered={setHovered} />

  );
}