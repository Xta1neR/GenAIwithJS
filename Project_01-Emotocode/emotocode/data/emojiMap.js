export const emojiMap = {
  A: "🍏", 
  B: "🐝", 
  C: "🌊", 
  D: "🦆", 
  E: "🥚",
  F: "🐟", 
  G: "🦒", 
  H: "🏠", 
  I: "🍦", 
  J: "🤹",
  K: "🥝", 
  L: "🌿", 
  M: "🌙", 
  N: "🪺", 
  O: "🍊",
  P: "🥔", 
  Q: "👑", 
  R: "🌈", 
  S: "🐍", 
  T: "🌴",
  U: "☂️", 
  V: "🎻", 
  W: "🐋", 
  X: "❌", 
  Y: "🪀", 
  Z: "🦓"
};

// Reverse map for decoding
export const textMap = Object.fromEntries(
  Object.entries(emojiMap).map(([key, value]) => [value, key])
);