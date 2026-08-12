export const money = (n) => `$${n.toLocaleString()}`;

export const stars = (rating) => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return '★'.repeat(full) + (half ? '½' : '');
};

export const genRef = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = 'VX-';
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
};

export const barcodeBars = (seed) => {
  const bars = [];
  for (let i = 0; i < 34; i++) {
    const h = 10 + Math.floor(Math.abs(Math.sin(seed + i * 12.9898)) * 26);
    bars.push(h);
  }
  return bars;
};
