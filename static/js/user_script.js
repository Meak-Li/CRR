let sceneSize = 400;

let colorDark = "#080000";
let colorLight = "#fff";
let colorSkin = "hsl(2, 35%, 83%)";
let colorSkinHighlight = "hsl(2, 35%, 92%)";
let colorSkinShadow = "#a96782";
let colorFlesh = "hsl(11, 100%, 25%)";
let colorTears = "hsla(185,63%,58%,0.5)";
let colorGhostlyGlow = "hsl(185, 100%, 86%)";
let colorDemonicSkin = "hsl(0, 0%, 17%)";
let colorDemonicHighlight = "#444";
let colorDemonicShadow = "hsl(0, 0%, 8%)";
let colorDemonicHair = '#000';
let colorDemonicGlow = "hsl(359, 86%, 40%)";
let colorDemonicGlowBright = "#f00";
let colorBackgroundLight = "#3c29a0";

//set to a color string/false if you want. I decided I preferred it as a single color.
let lostTailBackface = true;

let isaacCanvas = document.querySelector("#isaac-zdog");
let lostCanvas = document.querySelector("#lost-zdog");
let azazelCanvas = document.querySelector("#azazel-zdog");
let isaacShadowCanvasBack = document.querySelector("#isaacShadowBack");
let isaacShadowCanvasFront = document.querySelector("#isaacShadowFront");
let azazelShadowCanvasBack = document.querySelector("#azazelShadowBack");
let azazelShadowCanvasFront = document.querySelector("#azazelShadowFront");
let characters = document.querySelectorAll(".character");
let charactersContainer = document.querySelector("#charactersContainer");
let characterWidth;
let characterHeight;

let turnHead;
let turnUpperBody;
let mouseTimeout;
let touchTimeout;


particlesJS("lost-particles", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: false,
        value_area: 400
      }
    },
    color: {
      value: colorLight
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 0.24,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.6,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 100,
        size: 3.5,
        duration: 0.5,
        opacity: 1.25,
        speed: 1
      },
    }
  },
  retina_detect: true
});

particlesJS("azazel-particles", {
  particles: {
    number: {
      value: 35,
      density: {
        enable: false,
        
      }
    },
    color: {
      value: colorDemonicGlowBright
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 0.24,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.6,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 100,
        size: 3.5,
        duration: 0.5,
        opacity: 1.25,
        speed: 1
      },
    }
  },
  retina_detect: true
});


let isaac = new Zdog.Illustration({
  element: "#isaac-zdog",
  resize: true,
  onResize: function(width, height) {
    this.zoom = Math.min(width, height) / sceneSize;
  },
  dragRotate: true,
  onDragStart: function() {
    if (mouseTimeout) {
      clearTimeout(mouseTimeout);
    }
  }
});

//head
let headAnchor = new Zdog.Anchor({
  addTo: isaac,
  translate: { y: -42 }
});

let headGroup = new Zdog.Group({
  addTo: headAnchor
});

let head = new Zdog.Shape({
  addTo: headGroup,
  stroke: 228,
  color: colorSkinShadow,
  path: [{ x: -4.5 }, { x: 4.5 }]
});

let headHighlight = new Zdog.Shape({
  addTo: headGroup,
  stroke: 216,
  color: colorSkin,
  translate: { x: -4.5 }
});

//eyes
let eyeAnchor = new Zdog.Anchor({
  addTo: headAnchor,
  translate: { x: -66, y: -30, z: 84 },
  rotate: { y: Zdog.TAU / 11 }
});

let eyeGroup = new Zdog.Group({
  addTo: eyeAnchor
});

let eyeShadow = new Zdog.Shape({
  addTo: eyeGroup,
  fill: true,
  stroke: 0,
  color: colorSkinShadow,
  scale: 1.15,
  path: [
    { x: 0, y: 0, z: 3 },
    {
      bezier: [
        { x: 24, y: 0, z: 3 },
        { x: 36, y: 21, z: 0 },
        { x: 36, y: 36, z: 0 }
      ]
    },
    {
      bezier: [
        { x: 36, y: 51, z: 0 },
        { x: 24, y: 63, z: 3 },
        { x: 0, y: 63, z: 3 }
      ]
    },
    {
      bezier: [
        { x: -24, y: 63, z: 3 },
        { x: -36, y: 51, z: 0 },
        { x: -36, y: 36, z: 0 }
      ]
    },
    {
      bezier: [
        { x: -36, y: 21, z: 0 },
        { x: -24, y: 0, z: 3 },
        { x: 0, y: 0, z: 3 }
      ]
    }
  ]
});

let eye = new Zdog.Shape({
  addTo: eyeGroup,
  fill: true,
  stroke: 3,
  color: colorDark,
  translate: { y: 6 },
  path: [
    { x: 0, y: 0, z: 3 },
    {
      bezier: [
        { x: 24, y: 0, z: 3 },
        { x: 36, y: 21, z: 0 },
        { x: 36, y: 36, z: 0 }
      ]
    },
    {
      bezier: [
        { x: 36, y: 51, z: 0 },
        { x: 24, y: 63, z: 3 },
        { x: 0, y: 63, z: 3 }
      ]
    },
    {
      bezier: [
        { x: -24, y: 63, z: 3 },
        { x: -36, y: 51, z: 0 },
        { x: -36, y: 36, z: 0 }
      ]
    },
    {
      bezier: [
        { x: -36, y: 21, z: 0 },
        { x: -24, y: 0, z: 3 },
        { x: 0, y: 0, z: 3 }
      ]
    }
  ]
});

let eyeHighlight = eye.copy({
  addTo: eye,
  fill: true,
  color: colorLight,
  scale: 0.4,
  translate: { x: -9, y: 9, z: 3 }
});

let tearDrop = new Zdog.Shape({
  addTo: eyeGroup,
  fill: false,
  stroke: 7,
  color: colorTears,
  translate: { y: 63 },
  path: [
    { x: -18, y: 3, z: 0 },
    {
      arc: [{ x: -18, y: -3, z: 6 }, { x: 0, y: 0, z: 6 }]
    },
    {
      arc: [{ x: 18, y: -3, z: 6 }, { x: 18, y: 3, z: 0 }]
    },
    {
      arc: [{ x: 18, y: 6, z: 6 }, { x: 0, y: 6, z: 6 }]
    },
    {
      arc: [{ x: -18, y: 6, z: 6 }, { x: -18, y: 3, z: 0 }]
    }
  ]
});

let tearTrail = new Zdog.Shape({
  addTo: eyeAnchor,
  fill: true,
  stroke: 0,
  color: colorTears,
  translate: { y: 63 },
  path: [
    { x: 0, y: 0, z: 0 },
    { x: 18, y: 0, z: 0 },
    {
      arc: [{ x: 18, y: 45, z: 0 }, { x: 18, y: 70, z: -60 }]
    },
    {
      bezier: [
        { x: 18, y: 80, z: -80 },
        { x: 18, y: 80, z: -100 },
        { x: 0, y: 80, z: -100 }
      ]
    },
    {
      bezier: [
        { x: -18, y: 80, z: -100 },
        { x: -18, y: 80, z: -80 },
        { x: -18, y: 70, z: -60 }
      ]
    },
    {
      arc: [{ x: -18, y: 45, z: 0 }, { x: -18, y: 0, z: 0 }]
    },
    { x: 0, y: 0, z: 0 }
  ]
});

let eyeLeft = eyeAnchor.copyGraph({
  translate: { x: 66, y: -30, z: 84 },
  rotate: { y: Zdog.TAU / -11 }
});

//mouth
let mouthAnchor = new Zdog.Anchor({
  addTo: headAnchor,
  translate: { y: 36, z: 96 },
  rotate: { x: Zdog.TAU / -45 }
});

let mouthGroup = new Zdog.Group({
  addTo: mouthAnchor
});

let mouthShadow = new Zdog.Shape({
  addTo: mouthGroup,
  stroke: 3,
  fill: true,
  color: colorSkinShadow,
  scale: 1.1,
  translate: {y: -5},
  path: [
    { x: 0, y: 0 },
    {
      bezier: [
        { x: 18, y: 0, z: 0 },
        { x: 30, y: 21, z: -6 },
        { x: 30, y: 30, z: -6 }
      ]
    },
    {
      bezier: [
        { x: 30, y: 51, z: -6 },
        { x: 24, y: 33, z: -3 },
        { x: 0, y: 33, z: -3 }
      ]
    },
    {
      bezier: [
        { x: -24, y: 33, z: -3 },
        { x: -30, y: 51, z: -6 },
        { x: -30, y: 30, z: -6 }
      ]
    },
    {
      bezier: [
        { x: -30, y: 21, z: -6 },
        { x: -18, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 }
      ]
    }
  ]
});

let mouth = new Zdog.Shape({
  addTo: mouthGroup,
  stroke: 0,
  fill: true,
  color: colorFlesh,
  path: [
    { x: 0, y: 0 },
    {
      bezier: [
        { x: 18, y: 0, z: 0 },
        { x: 30, y: 21, z: -6 },
        { x: 30, y: 30, z: -6 }
      ]
    },
    {
      bezier: [
        { x: 30, y: 51, z: -6 },
        { x: 24, y: 33, z: -3 },
        { x: 0, y: 33, z: -3 }
      ]
    },
    {
      bezier: [
        { x: -24, y: 33, z: -3 },
        { x: -30, y: 51, z: -6 },
        { x: -30, y: 30, z: -6 }
      ]
    },
    {
      bezier: [
        { x: -30, y: 21, z: -6 },
        { x: -18, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 }
      ]
    }
  ]
});

let teeth = new Zdog.Shape({
  addTo: mouthGroup,
  stroke: 7,
  fill: false,
  color: colorLight,
  translate: { y: 25, z: -6 },
  path: [
    { x: 0, y: 0, z: 0 },
    {
      bezier: [
        { x: 24, y: 0, z: 0 },
        { x: 24, y: 10, z: -7 },
        { x: 24, y: 10, z: -7 }
      ]
    },
    { x: 26, y: 13, z: -8 },
    {
      bezier: [
        { x: 26, y: 13, z: -7 },
        { x: 16, y: 5, z: 0 },
        { x: 0, y: 5, z: 0 }
      ]
    },
    {
      bezier: [
        { x: -16, y: 5, z: 0 },
        { x: -26, y: 13, z: -7 },
        { x: -26, y: 13, z: -8 }
      ]
    },
    { x: -24, y: 10, z: -7 },
    {
      bezier: [
        { x: -24, y: 10, z: -7 },
        { x: -24, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 }
      ]
    }
  ]
});

let lipGroup = new Zdog.Group({
  addTo: mouthAnchor
})

let lipGroupLeft = new Zdog.Group({
  addTo: mouthAnchor
})

let lipShadow = new Zdog.Shape({
  addTo: lipGroup,
  stroke: 7,
  fill: false,
  translate: { y: 8, z: -4 },
  color: colorSkinShadow,
  rotate: { x: Zdog.TAU / -45 },
  path: [
    { x: -33, y: 30, z: -6 },
    {
      bezier: [
        { x: -35, y: 40, z: -6 },
        { x: -30, y: 40, z: -4 },
        { x: -30, y: 40, z: -4 }
      ]
    },
  ],
  closed: false
});

let lipShadowMiddle = new Zdog.Shape({
  addTo: lipGroup,
  stroke: 7,
  fill: false,
  translate: { y: 8, z: -4 },
  color: colorSkinShadow,
  rotate: { x: Zdog.TAU / -45 },
  path: [
    { x: -30, y: 40, z: -4 },
    {
      bezier: [
        { x: -25, y: 41, z: -1 },
        { x: -10, y: 33, z: 3 },
        { x: 0, y: 33, z: 3 }
      ]
    },
    {
      bezier: [
        { x: 10, y: 33, z: 3 },
        { x: 25, y: 41, z: -1 },
        { x: 30, y: 40, z: -4 }
      ]
    },
  ],
  closed: false
});

let lipShadowMiddleLeft = lipShadowMiddle.copy({
  addTo: lipGroupLeft,
});

let lipShadowLeft = lipShadow.copy({
  addTo: lipGroupLeft,
  path: [
    { x: 33, y: 30, z: -6 },
    {
      bezier: [
        { x: 35, y: 40, z: -6 },
        { x: 30, y: 40, z: -4 },
        { x: 30, y: 40, z: -4 }
      ]
    }
  ],
  closed: false
});



let lip = lipShadow.copy({
  addTo: lipGroup,
  stroke: 7,
  fill: false,
  translate: { y: 4, z: -1 },
  color: colorSkinHighlight,
  path: [
    { x: -33, y: 30, z: -6 },
    {
      bezier: [
        { x: -35, y: 40, z: -6 },
        { x: -30, y: 40, z: -4 },
        { x: -30, y: 40, z: -4 }
      ]
    },
  ],
  closed: false
});


let lipMiddle = lipShadow.copy({
  addTo: lipGroup,
  stroke: 7,
  fill: false,
  translate: { y: 4, z: -1 },
  color: colorSkinHighlight,
  path: [
    { x: -30, y: 40, z: -4 },
    {
      bezier: [
        { x: -25, y: 41, z: -1 },
        { x: -10, y: 33, z: 3 },
        { x: 0, y: 33, z: 3 }
      ]
    },
    {
      bezier: [
        { x: 10, y: 33, z: 3 },
        { x: 25, y: 41, z: -1 },
        { x: 30, y: 40, z: -4 }
      ]
    },
  ],
  closed: false
});


let lipMiddleLeft = lipMiddle.copy({
  addTo: lipGroupLeft,
});


let lipLeft = lip.copy({
  addTo: lipGroupLeft,
  path: [
    { x: 33, y: 30, z: -6 },
    {
      bezier: [
        { x: 35, y: 40, z: -6 },
        { x: 30, y: 40, z: -4 },
        { x: 30, y: 40, z: -4 }
      ]
    }
  ],
  closed: false
});

//body
let bodyAnchor = new Zdog.Anchor({
  addTo: isaac,
  translate: { y: 81 }
});

let bodyGroup = new Zdog.Group({
  addTo: bodyAnchor
});

//upper body
let armGroup = new Zdog.Group({
  addTo: bodyAnchor,
  translate: { z: -6 },
  rotate: { x: Zdog.TAU / 16 }
});

let arm = new Zdog.Shape({
  addTo: armGroup,
  stroke: 30,
  color: colorSkinShadow,
  path: [
    { x: -35, y: -6, z: 0 },
    {
      bezier: [
        { x: -33, y: -6, z: 0 },
        { x: -45, y: -6, z: 0 },
        { x: -54, y: 30, z: 0 }
      ]
    }
  ],
  closed: false
});

let armHighlight = arm.copy({
  stroke: 27,
  color: colorSkin
});

let armLeft = armGroup.copyGraph({
  rotate: { x: Zdog.TAU / 16, y: Zdog.TAU / 2 }
});

armLeft.children[1].stroke = 21;
armLeft.children[1].translate = { x: 1, y: 1 };

let bodyUpperGroup = new Zdog.Group({
  addTo: bodyGroup
});

let bodyUpper = new Zdog.Shape({
  addTo: bodyUpperGroup,
  stroke: 63,
  fill: true,
  color: colorSkinShadow,
  translate: { y: 6 }
});

let bodyUpperHighlight = bodyUpper.copy({
  stroke: 57,
  color: colorSkin,
  translate: { x: -3 }
});

//lower body
let bodyLowerGroup = new Zdog.Group({
  addTo: bodyGroup,
  translate: { y: 30 }
});

let bodyLower = new Zdog.Shape({
  addTo: bodyLowerGroup,
  stroke: 69,
  fill: true,
  color: colorSkinShadow,
  translate: { y: 6 },
  path: [{ x: -4.5 }, { x: 4.5 }]
});

let bodyLowerHighlight = bodyLower.copy({
  stroke: 66,
  color: colorSkin,
  translate: { x: -3, y: 4.5 },
  path: [{ x: -4.5 }, { x: 4.5 }]
});

let legGroup = new Zdog.Group({
  addTo: isaac,
  translate: { y: 141, z: -3 }
});

let leg = new Zdog.Shape({
  addTo: legGroup,
  stroke: 28,
  color: colorSkinShadow,
  translate: { y: 6 },
  path: [
    { x: -21, y: -6, z: 0 },
    {
      bezier: [
        { x: -18, y: -6, z: 0 },
        { x: -24, y: -6, z: 0 },
        { x: -24, y: 24, z: 0 }
      ]
    }
  ],
  closed: false
});

let legHighlight = leg.copy({
  stroke: 24,
  color: colorSkin
});

let footGroup = new Zdog.Group({
  addTo: legGroup,
  translate: { x: -25, y: 42, z: 4 },
  rotate: { x: Zdog.TAU / 4 }
});

let foot = new Zdog.Hemisphere({
  addTo: footGroup,
  stroke: 5,
  diameter: 23,
  color: colorSkinShadow,
  backface: colorSkinShadow
});

let footHighlight = foot.copy({
  diameter: 20,
  color: colorSkin,
  backface: colorSkin,
  translate: { y: -2, z: 2 }
});

let legLeft = legGroup.copyGraph({
  rotate: { y: Zdog.TAU / 2 }
});

legLeft.children[1].stroke = 20;
legLeft.children[1].translate = { x: 1, y: 9 };
legLeft.children[2].translate = { x: -25, y: 42, z: -4 };
legLeft.children[2].rotate = { x: Zdog.TAU / 4 };
legLeft.children[2].children[1].stroke = 2;
legLeft.children[2].children[1].translate = { x: 1, y: 2, z: 2 };

let buttCheekGroup = new Zdog.Group({
  addTo: bodyAnchor,
  translate: { x: 14, y: 49, z: -19 },
  rotate: { x: Zdog.TAU / 1.75 }
});

let buttCheek = new Zdog.Hemisphere({
  addTo: buttCheekGroup,
  diameter: 32,
  stroke: 6,
  fill: true,
  color: colorSkinShadow,
  backface: colorSkin
});

let buttCheekHighlight = buttCheek.copy({
  diameter: 29,
  color: colorSkin,
  translate: { x: 3 }
});

let buttCheekLeft = buttCheekGroup.copyGraph({
  translate: { x: -14, y: 49, z: -19 }
});

buttCheekLeft.children[1].translate = { x: -3 };

let lost = isaac.copyGraph({
  element: "#lost-zdog",
  resize: true,
  dragRotate: true,
  onResize: function(width, height) {
    this.zoom = Math.min(width, height) / sceneSize;
  },
  onDragStart: function(e) {
    if (mouseTimeout) {
      clearTimeout(mouseTimeout);
    }
    document.querySelector("#sceneShadowGhostly").style.cssText = "opacity: 1;";
    document.querySelector("#sceneShadow").style.cssText = "opacity: 0;";
    if (window.innerWidth < window.innerHeight*0.8) {
      document.querySelector("#scene").style.cssText =
      "background-color: " +
      "#8c0161" +
      ";";
    } else {
      document.querySelector("#scene").style.cssText =
      "background-color: " +
      "#8c0161" +
      ";  transform: translate(-65%,0); width: 150%;";
    }
  },
  onDragMove: function(e) {
    bubbleParticles(pJSDom[0], e);
  },
  onDragEnd: function() {
    document.querySelector("#sceneShadowGhostly").style.cssText = "opacity: 0;";
    document.querySelector("#sceneShadow").style.cssText = "opacity: 1;";
    document.querySelector("#scene").style.cssText =
      "background-color: " + colorBackgroundLight + ";";
  }
});

let lostTailAnchor = new Zdog.Anchor({
  addTo: lost,
  translate: { z: -10 }
});

let lostTailGroup = new Zdog.Group({
  addTo: lostTailAnchor,
})

let lostTail = new Zdog.Shape({
  addTo: lostTailGroup,
  color: colorGhostlyGlow,
  stroke: 50,
  translate: { x: -57, y: 35, z: -35 },
  front: {x: -100, y: 54, z: 100},
  backface: lostTailBackface,
  path: [
    { x: 1, y: -20, z: 54 },
    {
      bezier: [
        { x: 1, y: 6, z: 54 },
        { x: 24, y: 12, z: 77 },
        { x: 54, y: 18, z: 77 }
      ]
    },
  ],
  closed: false
});

let lostTail2 = lostTail.copy({
  front: {x: 100, y: 54, z: 100},
  path: [
    { x: 54, y: 18, z: 77 },
    {
      bezier: [
        { x: 77, y: 24, z: 77 },
        { x: 96, y: 30, z: 58 },
        { x: 96, y: 36, z: 35 }
      ]
    },
  ],
});

let lostTail3 = lostTail.copy({
  front: {x: 100, y: 54, z: -100},
  path: [
    { x: 96, y: 36, z: 35 },
    {
      bezier: [
        { x: 96, y: 42, z: 16 },
        { x: 81, y: 48, z: 1 },
        { x: 62, y: 54, z: 1 }
      ]
    },
  ],
});

let lostTail4 = lostTail.copy({
  front: {x: -100, y: 54, z: -100},
  path: [
    { x: 62, y: 54, z: 1 },
    {
      bezier: [
        { x: 47, y: 60, z: 1 },
        { x: 35, y: 66, z: 13 },
        { x: 35, y: 72, z: 28 }
      ]
    },
  ],
});

let lostTail5 = lostTail.copy({
  path: [
    { x: 35, y: 72, z: 28 },
    {
      bezier: [
        { x: 35, y: 78, z: 40 },
        { x: 45, y: 84, z: 50 },
        { x: 57, y: 90, z: 50 }
      ]
    },
  ],
});

let lostTail6 = lostTail.copy({
  front: {x: 100, y: 54, z: 100},
  path: [
    { x: 57, y: 90, z: 50 },
     {
      bezier: [
        { x: 66, y: 96, z: 50 },
        { x: 74, y: 102, z: 42 },
        { x: 74, y: 108, z: 32 }
      ]
    },
  ],
});


lost.children[1].children[0].visible = false;
lost.children[1].children[1].visible = false;
lost.children[1].children[2].visible = false;
lost.children[1].children[3].visible = false;
lost.children[1].children[4].visible = false;
lost.children[2].visible = false;
lost.children[3].visible = false;

lost.children[0].children[0].children[0].color = colorGhostlyGlow;
lost.children[0].children[0].children[1].color = colorLight;
lost.children[0].children[1].children[0].children[0].color = colorGhostlyGlow;
lost.children[0].children[2].children[0].children[0].color = colorGhostlyGlow;
lost.children[0].children[3].children[0].children[0].color = colorGhostlyGlow;
lost.children[0].children[3].children[0].children[1].color = colorDark;
lost.children[0].children[3].children[1].children[0].color = colorGhostlyGlow;
lost.children[0].children[3].children[1].children[1].color = colorGhostlyGlow;
lost.children[0].children[3].children[1].children[2].color = colorLight;
lost.children[0].children[3].children[1].children[3].color = colorLight;
lost.children[0].children[3].children[2].children[0].color = colorGhostlyGlow;
lost.children[0].children[3].children[2].children[1].color = colorGhostlyGlow;
lost.children[0].children[3].children[2].children[2].color = colorLight;
lost.children[0].children[3].children[2].children[3].color = colorLight;


let azazel = isaac.copyGraph({
  element: "#azazel-zdog",
  resize: true,
  dragRotate: true,
  translate: { y: -10 },
  onResize: function(width, height) {
    this.zoom = Math.min(width, height) / sceneSize;
  },
  onDragStart: function(e) {
    if (mouseTimeout) {
      clearTimeout(mouseTimeout);
    }
    if (window.innerWidth < window.innerHeight*0.8) {
      document.querySelector("#scene").style.cssText =
      "background-color: " +
      colorDemonicGlowBright +
      ";";
    } else {
      document.querySelector("#scene").style.cssText =
      "background-color: " +
      colorDemonicGlowBright +
      "; transform: translate(-38%,0); width: 150%;";
    }
  }, 
  onDragMove: function(e) {
    bubbleParticles(pJSDom[1], e);
  },
  onDragEnd: function() {
    document.querySelector("#scene").style.cssText =
      "background-color: " + colorBackgroundLight + ";";
  }
});

let azazelHairBack = new Zdog.Hemisphere({
  addTo: azazel.children[0].children[0],
  stroke: 0,
  diameter: 237,
  color: colorDemonicHair,
  backface: colorDemonicSkin,
  translate: { x: 0, y: 0, z: 0 },
  rotate: { x: Zdog.TAU / 2.5 }
});

let azazelHairCurtain = new Zdog.Shape({
  addTo: azazel.children[0],
  stroke: 10,
  fill: true,
  color: colorDemonicHair,
  translate: { x: 0, y: -115 },
  path: [
    { x: 10, y: 0, z: 50 },
    {
      bezier: [
        { x: 40, y: 60, z: 150 },
        { x: -90, y: 50, z: 80 },
        { x: -120, y: 110, z: 60 }
      ]
    },
    {
      bezier: [
        { x: -130, y: 80, z: 50 },
        { x: -100, y: -20, z: -20 },
        { x: 10, y: 0, z: 50 }
      ]
    }
  ],
  closed: false
});

let azazelHairCurtainMiddle = new Zdog.Shape({
  addTo: azazel.children[0],
  stroke: 10,
  fill: true,
  color: colorDemonicHair,
  translate: { x: 0, y: -115 },
  path: [
    { x: 16, y: 25, z: 70 },
    {
      bezier: [
        { x: 14, y: 60, z: 150 },
        { x: -40, y: 100, z: 100 },
        { x: -30, y: 80, z: 110 }
      ]
    },
    {
      bezier: [
        { x: -10, y: 50, z: 110 },
        { x: -15, y: 45, z: 100 },
        { x: -15, y: 25, z: 70 }
      ]
    },
    {
      bezier: [
        { x: -15, y: 5, z: 50 },
        { x: 16, y: 5, z: 50 },
        { x: 16, y: 25, z: 70 }
      ]
    }
  ],
  closed: false
});

let azazelHairCurtainLeft = new Zdog.Shape({
  addTo: azazel.children[0],
  stroke: 10,
  fill: true,
  color: colorDemonicHair,
  translate: { x: 0, y: -115 },
  path: [
    { x: 10, y: 0, z: 50 },
    {
      bezier: [
        { x: 10, y: 30, z: 100 },
        { x: 90, y: 50, z: 60 },
        { x: 120, y: 110, z: 40 }
      ]
    },
    {
      bezier: [
        { x: 130, y: 80, z: 50 },
        { x: 100, y: -20, z: -20 },
        { x: 10, y: 0, z: 50 }
      ]
    }
  ],
  closed: false
});

let azazelHairSide = new Zdog.Shape({
  addTo: azazel.children[0],
  stroke: 10,
  fill: true,
  color: colorDemonicHair,
  translate: { x: 0, y: -115 },
  path: [
    { x: -110, y: 70, z: 30 },
    {
      bezier: [
        { x: -115, y: 70, z: 30 },
        { x: -120, y: 160, z: 50 },
        { x: -110, y: 170, z: 0 }
      ]
    },

    { x: -115, y: 140, z: 5 },
    { x: -100, y: 190, z: -40 },
    {
      bezier: [
        { x: -120, y: 150, z: -50 },
        { x: -130, y: 90, z: 30 },
        { x: -110, y: 70, z: 30 }
      ]
    }
  ],
  closed: false
});

let azazelHairSideLeft = azazelHairSide.copy({
  path: [
    { x: 110, y: 70, z: 30 },
    {
      bezier: [
        { x: 115, y: 70, z: 30 },
        { x: 120, y: 160, z: 50 },
        { x: 110, y: 170, z: 0 }
      ]
    },
    { x: 115, y: 140, z: 5 },
    { x: 100, y: 190, z: -40 },
    {
      bezier: [
        { x: 120, y: 150, z: -50 },
        { x: 130, y: 90, z: 30 },
        { x: 110, y: 70, z: 30 }
      ]
    }
  ]
});

let azazelHairFlick = new Zdog.Shape({
  addTo: azazel.children[0],
  stroke: 10,
  fill: true,
  color: colorDemonicHair,
  translate: { x: 0, y: -110 },
  path: [
    { x: -90, y: 75, z: 70 },
    {
      bezier: [
        { x: -100, y: 90, z: 60 },
        { x: -140, y: 100, z: 50 },
        { x: -120, y: 200, z: 50 }
      ]
    },
    {
      bezier: [
        { x: -125, y: 200, z: 50 },
        { x: -125, y: 190, z: 35 },
        { x: -135, y: 165, z: 35 }
      ]
    },
    { x: -145, y: 175, z: 15 },
    {
      bezier: [
        { x: -150, y: 160, z: 15 },
        { x: -140, y: 90, z: 40 },
        { x: -130, y: 95, z: 40 }
      ]
    },
    {
      bezier: [
        { x: -145, y: 90, z: 40 },
        { x: -150, y: 100, z: 30 },
        { x: -150, y: 100, z: 30 }
      ]
    },
    {
      bezier: [
        { x: -150, y: 80, z: 30 },
        { x: -110, y: 50, z: 30 },
        { x: -110, y: 50, z: 30 }
      ]
    }
  ],
  closed: false
});

let azazelHairFlickMiddle = new Zdog.Shape({
  addTo: azazel.children[0],
  stroke: 10,
  fill: false,
  color: colorDemonicHair,
  translate: { x: 0, y: -115 },
  path: [
    { x: -10, y: 0, z: 30 },
    {
      bezier: [
        { x: -10, y: 0, z: 30 },
        { x: -30, y: 0, z: 10 },
        { x: -50, y: -10, z: 10 }
      ]
    }
  ],
  closed: false
});

let azazelHairFlickLeft = new Zdog.Shape({
  addTo: azazel.children[0],
  stroke: 10,
  fill: true,
  color: colorDemonicHair,
  translate: { x: 0, y: -110 },
  path: [
    { x: 95, y: 65, z: 52 },
    {
      bezier: [
        { x: 115, y: 100, z: 45 },
        { x: 140, y: 100, z: 50 },
        { x: 120, y: 190, z: 50 }
      ]
    },
    {
      bezier: [
        { x: 125, y: 190, z: 40 },
        { x: 125, y: 190, z: 50 },
        { x: 135, y: 155, z: 35 }
      ]
    },
    { x: 140, y: 185, z: 25 },
    {
      bezier: [
        { x: 140, y: 170, z: 10 },
        { x: 150, y: 140, z: 30 },
        { x: 110, y: 70, z: 30 }
      ]
    }
  ],
  closed: false
});

let azazelHairFlickLeft2 = new Zdog.Shape({
  addTo: azazel.children[0],
  stroke: 15,
  fill: false,
  color: colorDemonicHair,
  translate: { x: 0, y: -110 },
  path: [
    { x: 115, y: 80, z: 20 },
    {
      bezier: [
        { x: 130, y: 100, z: 10 },
        { x: 130, y: 100, z: 0 },
        { x: 140, y: 100, z: -10 }
      ]
    }
  ],
  closed: false
});

let azazelHornAnchor = new Zdog.Anchor({
  addTo: azazel.children[0],
  translate: { x: -110, y: -65 },
  rotate: { x: Zdog.TAU / 4, y: Zdog.TAU / 7 }
});

let azazelHornGroup1 = new Zdog.Group({
  addTo: azazelHornAnchor
});

let azazelHorn1 = new Zdog.Ellipse({
  addTo: azazelHornGroup1,
  stroke: 35,
  fill: true,
  diameter: 35,
  color: colorDark
});

let azazelHornHighlight1 = azazelHorn1.copy({
  stroke: 4,
  fill: true,
  diameter: 12,
  color: colorDemonicSkin,
  translate: { x: -10, y: 20, z: 8 }
});

let azazelHornGroup2 = azazelHornGroup1.copyGraph({
  translate: { z: 23 },
  scale: 0.9,
  rotate: { y: Zdog.TAU / -23 }
});
azazelHornGroup2.children[0].stroke = 25;

let azazelHornAnchorLeft = azazelHornAnchor.copyGraph({
  translate: { x: 110, y: -65 },
  rotate: { x: Zdog.TAU / 4, y: Zdog.TAU / -7 }
});
azazelHornAnchorLeft.children[1].rotate.y = Zdog.TAU / 23;

let azazelHornGroup3 = azazelHornGroup2.copyGraph({
  addTo: azazelHornAnchorLeft,
  translate: { x: -6, z: 38 },
  scale: 0.8,
  rotate: { y: Zdog.TAU / 9 }
});
azazelHornGroup3.children[0].stroke = 23;

let azazelHornGroup4 = azazelHornGroup2.copyGraph({
  addTo: azazelHornAnchorLeft,
  translate: { x: -16, z: 49 },
  scale: 0.7,
  rotate: { y: Zdog.TAU / 5.3 }
});
azazelHornGroup4.children[0].stroke = 18;

let azazelHornGroup5 = azazelHornGroup2.copyGraph({
  addTo: azazelHornAnchorLeft,
  translate: { x: -29, z: 54 },
  scale: 0.5,
  rotate: { y: Zdog.TAU / 4 }
});
azazelHornGroup5.children[0].stroke = 17;

let azazelHornGroup6 = azazelHornGroup2.copyGraph({
  addTo: azazelHornAnchorLeft,
  translate: { x: -41, z: 54 },
  scale: 0.4,
  rotate: { y: Zdog.TAU / 3.5 }
});
azazelHornGroup6.children[0].stroke = 12;

let azazelHornGroup7 = new Zdog.Cone({
  addTo: azazelHornAnchorLeft,
  translate: { x: -47, z: 52 },
  rotate: { y: Zdog.TAU / 3 }
});

let azazelHorn7 = new Zdog.Cone({
  addTo: azazelHornGroup7,
  diameter: 10,
  length: 15,
  stroke: 12,
  color: colorDark
});

let azazelHornHighlight7 = azazelHorn7.copy({
  stroke: 4,
  fill: true,
  diameter: 2,
  length: 5,
  color: colorDemonicSkin,
  translate: { x: -2, y: 5, z: 6 }
});

let azazelWingGroup = new Zdog.Group({
  addTo: azazel.children[1],
  rotate: { x: Zdog.TAU / -18, y: Zdog.TAU / 4.7 }
});

let azazelWingMembrane = new Zdog.Shape({
  addTo: azazelWingGroup,
  stroke: 1,
  fill: true,
  color: colorDemonicShadow,
  path: [
    { x: -35, y: 0, z: 0 },
    {
      bezier: [
        { x: -12, y: 0, z: 0 },
        { x: -12, y: 15, z: 0 },
        { x: -35, y: 0, z: 0 }
      ]
    },
    {
      bezier: [
        { x: -40, y: 0, z: 0 },
        { x: -110, y: -20, z: 0 },
        { x: -110, y: -70, z: 0 }
      ]
    },
    {
      bezier: [
        { x: -120, y: -70, z: -10 },
        { x: -190, y: 10, z: -10 },
        { x: -190, y: 45, z: 0 }
      ]
    },
    {
      bezier: [
        { x: -180, y: 30, z: -10 },
        { x: -150, y: 20, z: -10 },
        { x: -140, y: 30, z: 0 }
      ]
    },
    {
      bezier: [
        { x: -130, y: 25, z: -10 },
        { x: -110, y: 10, z: -10 },
        { x: -90, y: 15, z: 0 }
      ]
    },
    {
      bezier: [
        { x: -70, y: 0, z: -10 },
        { x: -30, y: 10, z: -10 },
        { x: -30, y: 10, z: 0 }
      ]
    }
  ],
  closed: false
});

let azazelWingArm = new Zdog.Shape({
  addTo: azazelWingGroup,
  stroke: 12,
  fill: false,
  color: colorDemonicHighlight,
  path: [
    { x: -35, y: 0, z: 0 },
    {
      bezier: [
        { x: -12, y: 0, z: 0 },
        { x: -12, y: 15, z: 0 },
        { x: -35, y: 0, z: 0 }
      ]
    },
    {
      bezier: [
        { x: -40, y: 0, z: 0 },
        { x: -110, y: -20, z: 0 },
        { x: -110, y: -70, z: 0 }
      ]
    },
    {
      bezier: [
        { x: -120, y: -70, z: -10 },
        { x: -190, y: 10, z: -10 },
        { x: -190, y: 40, z: 0 }
      ]
    }
  ],
  closed: false
});

let azazelWingFinger = azazelWingArm.copy({
  stroke: 10,
  path: [
    { x: -110, y: -70, z: 0 },
    {
      bezier: [
        { x: -120, y: -70, z: -10 },
        { x: -140, y: 10, z: -10 },
        { x: -140, y: 30, z: 0 }
      ]
    }
  ]
});

let azazelWingFinger2 = azazelWingArm.copy({
  stroke: 10,
  path: [
    { x: -110, y: -70, z: 0 },
    {
      bezier: [
        { x: -110, y: -20, z: -10 },
        { x: -90, y: 15, z: -5 },
        { x: -90, y: 15, z: 0 }
      ]
    }
  ]
});

let azazelWingGroupLeft = new Zdog.Group({
  addTo: azazel.children[1],
  rotate: { x: Zdog.TAU / -18, y: Zdog.TAU / -4.7 }
});

let azazelWingMembraneLeft = new Zdog.Shape({
  addTo: azazelWingGroupLeft,
  stroke: 1,
  fill: true,
  color: colorDemonicShadow,
  path: [
    { x: 35, y: 0, z: 0 },
    {
      bezier: [
        { x: 12, y: 0, z: 0 },
        { x: 12, y: 15, z: 0 },
        { x: 35, y: 0, z: 0 }
      ]
    },
    {
      bezier: [
        { x: 40, y: 0, z: 0 },
        { x: 110, y: -20, z: 0 },
        { x: 110, y: -70, z: 0 }
      ]
    },
    {
      bezier: [
        { x: 120, y: -70, z: -10 },
        { x: 190, y: 10, z: -10 },
        { x: 190, y: 45, z: 0 }
      ]
    },
    {
      bezier: [
        { x: 180, y: 30, z: -10 },
        { x: 150, y: 20, z: -10 },
        { x: 140, y: 30, z: 0 }
      ]
    },
    {
      bezier: [
        { x: 130, y: 25, z: -10 },
        { x: 110, y: 10, z: -10 },
        { x: 90, y: 15, z: 0 }
      ]
    },
    {
      bezier: [
        { x: 70, y: 0, z: -10 },
        { x: 30, y: 10, z: -10 },
        { x: 30, y: 10, z: 0 }
      ]
    }
  ],
  closed: false
});

let azazelWingArmLeft = new Zdog.Shape({
  addTo: azazelWingGroupLeft,
  stroke: 12,
  fill: false,
  color: colorDemonicHighlight,
  path: [
    { x: 35, y: 0, z: 0 },
    {
      bezier: [
        { x: 12, y: 0, z: 0 },
        { x: 12, y: 15, z: 0 },
        { x: 35, y: 0, z: 0 }
      ]
    },
    {
      bezier: [
        { x: 40, y: 0, z: 0 },
        { x: 110, y: -20, z: 0 },
        { x: 110, y: -70, z: 0 }
      ]
    },
    {
      bezier: [
        { x: 120, y: -70, z: -10 },
        { x: 190, y: 10, z: -10 },
        { x: 190, y: 40, z: 0 }
      ]
    }
  ],
  closed: false
});

let azazelWingFingerLeft = azazelWingArmLeft.copy({
  stroke: 10,
  path: [
    { x: 110, y: -70, z: 0 },
    {
      bezier: [
        { x: 120, y: -70, z: -10 },
        { x: 140, y: 10, z: -10 },
        { x: 140, y: 30, z: 0 }
      ]
    }
  ]
});

let azazelWingFinger2Left = azazelWingArmLeft.copy({
  stroke: 10,
  path: [
    { x: 110, y: -70, z: 0 },
    {
      bezier: [
        { x: 110, y: -20, z: -10 },
        { x: 90, y: 15, z: -5 },
        { x: 90, y: 15, z: 0 }
      ]
    }
  ]
});

azazel.children[0].children[0].children[0].color = colorDemonicShadow;
azazel.children[0].children[0].children[1].color = colorDemonicSkin;
azazel.children[0].children[1].children[0].children[0].color = colorDemonicShadow;
azazel.children[0].children[2].children[0].children[0].color = colorDemonicShadow;
azazel.children[0].children[3].children[0].children[0].color = colorDemonicShadow;
azazel.children[0].children[1].children[0].children[1].color = colorDemonicGlow;
azazel.children[0].children[2].children[0].children[1].color = colorDemonicGlow;
azazel.children[0].children[1].children[0].children[2].visible = false;
azazel.children[0].children[2].children[0].children[2].visible = false;
azazel.children[0].children[1].children[1].visible = false;
azazel.children[0].children[2].children[1].visible = false;
azazel.children[0].children[3].children[0].children[1].color = colorDark;
azazel.children[0].children[3].children[0].children[2].color = "#c0cccc";
azazel.children[0].children[3].children[1].children[0].color = colorDemonicShadow;
azazel.children[0].children[3].children[1].children[1].color = colorDemonicShadow;
azazel.children[0].children[3].children[1].children[2].color = colorDemonicHighlight;
azazel.children[0].children[3].children[1].children[3].color = colorDemonicHighlight;
azazel.children[0].children[3].children[2].children[0].color = colorDemonicShadow;
azazel.children[0].children[3].children[2].children[1].color = colorDemonicShadow;
azazel.children[0].children[3].children[2].children[2].color = colorDemonicHighlight;
azazel.children[0].children[3].children[2].children[3].color = colorDemonicHighlight;

azazel.children[1].children[0].children[0].children[0].color = colorDemonicShadow;
azazel.children[1].children[0].children[0].children[1].color = colorDemonicSkin;
azazel.children[1].children[0].children[1].children[0].color = colorDemonicShadow;
azazel.children[1].children[0].children[1].children[1].color = colorDemonicSkin;

azazel.children[1].children[1].children[0].color = colorDemonicShadow;
azazel.children[1].children[1].children[1].color = colorDemonicSkin;
azazel.children[1].children[2].children[0].color = colorDemonicShadow;
azazel.children[1].children[2].children[1].color = colorDemonicSkin;
azazel.children[1].children[3].children[0].color = colorDemonicShadow;
azazel.children[1].children[3].children[0].backface = colorDemonicShadow;
azazel.children[1].children[3].children[1].color = colorDemonicSkin;
azazel.children[1].children[3].children[1].backface = colorDemonicSkin;
azazel.children[1].children[4].children[0].color = colorDemonicShadow;
azazel.children[1].children[4].children[0].backface = colorDemonicShadow;
azazel.children[1].children[4].children[1].color = colorDemonicSkin;
azazel.children[1].children[4].children[1].backface = colorDemonicSkin;

azazel.children[2].children[0].color = colorDemonicShadow;
azazel.children[2].children[1].color = colorDemonicSkin;
azazel.children[2].children[2].children[0].color = colorDemonicShadow;
azazel.children[2].children[2].children[0].backface = colorDemonicShadow;
azazel.children[2].children[2].children[1].color = colorDemonicSkin;
azazel.children[2].children[2].children[1].backface = colorDemonicSkin;
azazel.children[3].children[0].color = colorDemonicShadow;
azazel.children[3].children[1].color = colorDemonicSkin;
azazel.children[3].children[2].children[0].color = colorDemonicShadow;
azazel.children[3].children[2].children[0].backface = colorDemonicShadow;
azazel.children[3].children[2].children[1].color = colorDemonicSkin;
azazel.children[3].children[2].children[1].backface = colorDemonicSkin;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function resetPositions(character) {
  TweenLite.to(character.children[0].rotate, 0.25, {
    x: 0,
    y: 0,
    ease: Sine.easeOut
  });
  TweenLite.to(character.children[1].rotate, 0.25, {
    x: 0,
    y: 0,
    ease: Sine.easeOut
  });
  TweenLite.to(character.rotate, 0.25, { x: 0, y: 0, ease: Sine.easeOut });
}

function resetAll() {
  resetPositions(azazel);
  resetPositions(isaac);
  resetPositions(lost);
  lookAround(isaac);
}

function watchPlayer(canvas, character, x, y) {
  characterX = canvas.getBoundingClientRect().left + canvas.offsetWidth / 2;
  characterY = canvas.getBoundingClientRect().top + canvas.offsetHeight / 2;
  characterRotationX = -(x - characterX) / Zdog.TAU;
  characterRotationY = -(y - characterY) / Zdog.TAU;

  TweenMax.to(character.children[0].rotate, 0.1, {
    x: characterRotationY / 150,
    y: characterRotationX / 250
  });

  TweenMax.to(character.children[1].rotate, 0.1, {
    x: characterRotationY / 900,
    y: characterRotationX / 500
  });
}

function lookAround(character) {
  let randomX = random(-3, 3) / Zdog.TAU;
  let randomY = random(-5, 5) / Zdog.TAU;
  let randomDuration = random(0.25, 1);
  let randomDelay = random(0, 3);

  turnHead = TweenLite.to(character.children[0].rotate, randomDuration, {
    x: randomX,
    y: randomY,
    delay: randomDelay,
    ease: Sine.easeOut
  });

  turnUpperBody = TweenLite.to(character.children[1].rotate, randomDuration, {
    x: randomX / 6,
    y: randomY / 2,
    delay: randomDelay,
    ease: Sine.easeOut,
    onComplete: lookAround,
    onCompleteParams: [character]
  });
}

function blink(characterEyeRight, characterEyeLeft) {
  randomDelay = random(2, 10);

  TweenMax.to([characterEyeRight.translate, characterEyeLeft.translate], 0.07, {
    y: 31.5,
    repeat: 1,
    yoyo: true,
    delay: randomDelay
  });

  TweenMax.to([characterEyeRight.scale, characterEyeLeft.scale], 0.07, {
    y: 0,
    repeat: 1,
    yoyo: true,
    delay: randomDelay,
    onComplete: blink,
    onCompleteParams: [characterEyeRight, characterEyeLeft]
  });
}

function sway(characterPart, multiplier) {
  randomRotate = random(1, 5) * multiplier;

  TweenMax.to(characterPart.rotate, 0.75, {
    z: Zdog.TAU / randomRotate,
    repeat: 1,
    yoyo: true,
    ease: Sine.easeInOut,
    onComplete: sway,
    onCompleteParams: [characterPart, multiplier]
  });
}

sway(azazel.children[0].children[5], 20);
sway(azazel.children[0].children[9], 70);
sway(azazel.children[0].children[11], -70);
sway(azazel.children[1].children[1], 50);
sway(azazel.children[1].children[2], 50);
sway(azazel.children[2], 50);
sway(azazel.children[3], 50);

TweenMax.to(
  [
    eyeHighlight.translate,
    eyeLeft.children[0].children[1].children[0].translate,
    azazel.children[0].children[1].children[0].children[1].children[0]
      .translate,
    azazel.children[0].children[2].children[0].children[1].children[0]
      .translate,
    lost.children[0].children[1].children[0].children[1].children[0].translate,
    lost.children[0].children[2].children[0].children[1].children[0].translate
  ],
  0.17,
  {
    x: eyeHighlight.translate.x - 0.7,
    y: eyeHighlight.translate.y + 0.7,
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
    yoyoEase: Sine.easeInOut
  }
);

//azazel wing flap animation
TweenMax.to(
  [
    azazel.children[1].children[5].rotate,
    azazel.children[1].children[6].rotate
  ],
  0.75,
  {
    y: 0,
    repeat: -1,
    yoyo: true,
    delay: 0.75,
    ease: Expo.easeInOut,
    yoyoEase: Sine.easeInOut
  }
);
TweenMax.to(
  [
    azazel.children[1].children[5].translate,
    azazel.children[1].children[6].translate
  ],
  0.75,
  {
    z: -20,
    repeat: -1,
    yoyo: true,
    delay: 0.75,
    ease: Expo.easeInOut,
    yoyoEase: Sine.easeInOut
  }
);

//azazel flying animation
TweenMax.to(azazel.translate, 0.75, {
  y: -20,
  repeat: -1,
  yoyo: true,
  delay: 0.75,
  ease: Sine.easeInOut,
  yoyoEase: Sine.easeInOut
});

//lost floating animation
TweenMax.to(lost.translate, 2, {
  y: -20,
  repeat: -1,
  yoyo: true,
  delay: 0,
  ease: Sine.easeInOut,
  yoyoEase: Sine.easeInOut
});

//isaac breathing animation
TweenMax.to(isaac.children[1].children[0].scale, 0.5, {
  x: 0.7,
  y: 0.97,
  repeat: -1,
  yoyo: true,
  delay: 0,
  ease: Sine.easeInOut,
  yoyoEase: Sine.easeInOut
});

lookAround(isaac);
blink(
  azazel.children[0].children[1].children[0],
  azazel.children[0].children[2].children[0]
);
blink(
  isaac.children[0].children[1].children[0],
  isaac.children[0].children[2].children[0]
);
blink(
  lost.children[0].children[1].children[0],
  lost.children[0].children[2].children[0]
);

function bubbleParticles(pJSDom, e) {
  let pos_x = e.offsetX || e.clientX,
    pos_y = e.offsetY || e.clientY;

  pJSDom.pJS.interactivity.mouse.pos_x = pos_x;
  pJSDom.pJS.interactivity.mouse.pos_y = pos_y;

  if (pJSDom.pJS.tmp.retina) {
    pJSDom.pJS.interactivity.mouse.pos_x *= pJSDom.pJS.canvas.pxratio;
    pJSDom.pJS.interactivity.mouse.pos_y *= pJSDom.pJS.canvas.pxratio;
  }
  
  pJSDom.pJS.interactivity.status = "mousemove";
}

document.querySelector("body").addEventListener("mousemove", function(e) {
  turnHead.kill();
  turnUpperBody.kill();

  watchPlayer(isaacCanvas, isaac, e.clientX, e.clientY);
  watchPlayer(lostCanvas, lost, e.clientX, e.clientY);
  watchPlayer(azazelCanvas, azazel, e.clientX, e.clientY);

  if (mouseTimeout) {
    clearTimeout(mouseTimeout);
  }
  mouseTimeout = setTimeout(resetAll, 2000);
});

document.querySelector("body").addEventListener("touchmove", function(e) {
  turnHead.kill();
  turnUpperBody.kill();

  let touch = e.changedTouches[0];

  watchPlayer(isaacCanvas, isaac, touch.pageX, touch.pageY);
  watchPlayer(lostCanvas, lost, touch.pageX, touch.pageY);
  watchPlayer(azazelCanvas, azazel, touch.pageX, touch.pageY);

  if (touchTimeout) {
    clearTimeout(touchTimeout);
  }
  touchTimeout = setTimeout(resetAll, 2000);
});

document.querySelector("body").addEventListener("mouseleave", function(e) {
  if (mouseTimeout) {
    clearTimeout(mouseTimeout);
  }
  resetAll();
});

lostCanvas.addEventListener("mousemove", function(e) {
  bubbleParticles(pJSDom[0], e);
});

lostCanvas.addEventListener("mouseleave", function(e) {
  pJSDom[0].pJS.interactivity.status = "mouseleave";
});

azazelCanvas.addEventListener("mousemove", function(e) {
  bubbleParticles(pJSDom[1], e);
});

azazelCanvas.addEventListener("mouseleave", function(e) {
  pJSDom[1].pJS.interactivity.status = "mouseleave";
});


//sigh, due to issues with the vh unit on mobile, there doesn't seem to be a nice way to resize and keep aspect with CSS alone (padding hack won't work here, and other solutions are ugly/fragile). May as well use the JS solution on desktop too now I'm using it (keeping the CSS as a fallback though of course).
function resizeCharacters() {
  if (window.innerWidth < window.innerHeight*0.8) {
    characterWidth = Math.min((window.innerHeight/3)*0.8, window.innerWidth*0.8);
    characterHeight = Math.min(window.innerHeight/3, window.innerWidth);
    charactersContainer.style.cssText = "width: " + (window.innerHeight/3)*0.8 + "px;";
  } else {
    characterWidth = Math.min(window.innerWidth/3, window.innerHeight*0.8);
    characterHeight = Math.min((window.innerWidth/3)/0.8, window.innerHeight);
    charactersContainer.style.cssText = "width: 100%;";
  }
  for (let i = 0; i < characters.length; i++) {
    characters[i].style.cssText = "width: " + characterWidth + "px; height: " + characterHeight + "px; max-width: initial; max-height: initial;";
  }
  
  /*
    lost.setMeasuredSize();
  lost.zoom = Math.min(lost.width, lost.height) / sceneSize;
  isaac.setMeasuredSize();
  isaac.zoom = Math.min(isaac.width, isaac.height) / sceneSize;
  azazel.setMeasuredSize();
  azazel.zoom = Math.min(azazel.width, azazel.height) / sceneSize;
  */
  
  lost.setMeasuredSize();
  lost.onResize(characterWidth, characterHeight);
  isaac.setMeasuredSize();
  isaac.onResize(characterWidth, characterHeight);
  azazel.setMeasuredSize();
  azazel.onResize(characterWidth, characterHeight);
  
  isaacShadowCanvasBack.width = isaacCanvas.width * 2;
  isaacShadowCanvasBack.height = isaacCanvas.height * 2;
  azazelShadowCanvasBack.width = azazelCanvas.width * 2;
  azazelShadowCanvasBack.height = azazelCanvas.height * 2;
  
  isaacShadowCanvasFront.width = isaacCanvas.width * 2;
  isaacShadowCanvasFront.height = isaacCanvas.height * 2;
  azazelShadowCanvasFront.width = azazelCanvas.width * 2;
  azazelShadowCanvasFront.height = azazelCanvas.height * 2;

  pJSDom[0].pJS.tmp.obj.size_value = characterWidth/133;
  pJSDom[0].pJS.tmp.obj.move_speed = characterWidth/250;
  pJSDom[0].pJS.tmp.obj.mode_bubble_distance = characterWidth/4;
  pJSDom[0].pJS.tmp.obj.mode_bubble_size = characterWidth/114;
  pJSDom[0].pJS.fn.particlesRefresh();
  
  pJSDom[1].pJS.tmp.obj.size_value = characterWidth/133;
  pJSDom[1].pJS.tmp.obj.move_speed = characterWidth/250;
  pJSDom[1].pJS.tmp.obj.mode_bubble_distance = characterWidth/4;
  pJSDom[1].pJS.tmp.obj.mode_bubble_size = characterWidth/114;
  pJSDom[1].pJS.fn.particlesRefresh();
}
resizeCharacters();
window.onresize = resizeCharacters;

/*
function drawCharacterShadows(characterCanvas, characterShadowCanvas) {
    let context = characterShadowCanvas.getContext('2d');
  
    context.clearRect(0, 0, characterShadowCanvas.width, characterShadowCanvas.height);
  
    context.save();
    context.scale(1, -.4);
    context.transform(1, 0, -.4, 1, characterShadowCanvas.width/2, (characterShadowCanvas.height/2)/-.4);
    context.filter = 'blur(' + characterShadowCanvas.width/200 + 'px) brightness(0) opacity(.1)';
    context.drawImage(characterCanvas, -characterShadowCanvas.width/2.07, -characterShadowCanvas.height/1.1);
    context.restore();
  
    context.save();
    context.scale(1, .2);
    context.transform(1, 0, -.6, 1, characterShadowCanvas.width/2, (characterShadowCanvas.height/2)/.2);
    context.filter = 'blur(' + characterShadowCanvas.width/266 + 'px) brightness(0) opacity(.3)';
    context.drawImage(characterCanvas, characterShadowCanvas.width/2.25, characterShadowCanvas.height/2);
    context.restore();  
}
*/

function drawCharacterShadows(canvasCharacter, canvasCharacterShadowBack, canvasCharacterShadowFront) {
    let ctxCharacterShadowBack = canvasCharacterShadowBack.getContext('2d');
    let ctxCharacterShadowFront = canvasCharacterShadowFront.getContext('2d');

    ctxCharacterShadowBack.clearRect(0, 0, canvasCharacterShadowBack.width, canvasCharacterShadowBack.height);
    ctxCharacterShadowFront.clearRect(0, 0, canvasCharacterShadowFront.width, canvasCharacterShadowFront.height);
  
    ctxCharacterShadowBack.save();
    ctxCharacterShadowBack.fillRect(0, 0, canvasCharacterShadowBack.width, canvasCharacterShadowBack.height);
    ctxCharacterShadowBack.scale(1, .2);
    ctxCharacterShadowBack.transform(1, 0, -.6, 1, canvasCharacterShadowBack.width/2, (canvasCharacterShadowBack.height/2)/.2);
    ctxCharacterShadowBack.globalCompositeOperation = "destination-in";
    ctxCharacterShadowBack.drawImage(canvasCharacter, canvasCharacterShadowBack.width/2.25, canvasCharacterShadowBack.height/2);
    ctxCharacterShadowBack.restore();
  
    ctxCharacterShadowFront.save();
    ctxCharacterShadowFront.fillRect(0, 0, canvasCharacterShadowFront.width, canvasCharacterShadowFront.height);
    ctxCharacterShadowFront.scale(1, -.4);
    ctxCharacterShadowFront.transform(1, 0, -.4, 1, canvasCharacterShadowFront.width/2, (canvasCharacterShadowFront.height/2)/-.4);
    ctxCharacterShadowFront.globalCompositeOperation = "destination-in";
    ctxCharacterShadowFront.drawImage(canvasCharacter, -canvasCharacterShadowFront.width/2.07, -canvasCharacterShadowFront.height/1.1);
    ctxCharacterShadowFront.restore();  
}


function animate() {
  isaac.updateRenderGraph();
  lost.updateRenderGraph();
  azazel.updateRenderGraph();
  lostTailAnchor.rotate.y += 0.07;
  drawCharacterShadows(isaacCanvas, isaacShadowCanvasBack, isaacShadowCanvasFront);
  drawCharacterShadows(azazelCanvas, azazelShadowCanvasBack, azazelShadowCanvasFront);
  requestAnimationFrame(animate);
}
animate();