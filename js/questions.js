//как обратиться к свойству style?

const EFFECTS = {
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const EFFECTS_FILTER = {
  [EFFECTS.MARVIN]: {
    style: 'invert',
    unit: '%'
  },
  [EFFECTS.PHOBOS]: {
    style: 'blur',
    unit: 'px'
  },
  [EFFECTS.HEAT]: {
    style: 'brightness',
    unit: ''
  }
};
