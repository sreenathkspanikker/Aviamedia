import React from 'react';

const TechnicalIcons: any = [];
for (let i = 1; i <= 18; i++) {
  const iconName = `IC-${i}`;
  const iconComponent = require(`@/public/skills/${iconName.toLowerCase()}.svg`);
  TechnicalIcons.push({ icon: React.createElement(iconComponent.default) });
}

export const Technical: any[] = TechnicalIcons;
