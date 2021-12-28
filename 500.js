"use strict";

// Adding Animations
const animationsTimeline = new TimelineMax();
// 500 Number
animationsTimeline.staggerFromTo(
  "#num-of-500-svg",
  0.5,
  { opacity: 0 },
  { opacity: 1, repeat: -1, yoyo: true },
  0.1
);
// Glasses
animationsTimeline.staggerFromTo(
  "#glasses-of-500-svg",
  0.5,
  { scale: 1 },
  { scale: 1.02, repeat: -1, yoyo: true },
  0.1
);
// Wiers
animationsTimeline.staggerFromTo(
  "#wire-of-500-svg",
  0.5,
  { opacity: 0.8 },
  { opacity: 1, repeat: -1, yoyo: true },
  0.1
);
// Moving camera up and down
animationsTimeline.staggerFromTo(
  "#pin-of-500-svg",
  1,
  { x: 4 },
  { x: 0, repeat: -1, yoyo: true },
  0.1
);
