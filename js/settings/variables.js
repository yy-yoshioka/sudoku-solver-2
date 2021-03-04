// box1
const X11 = document.getElementById('X11');
const X12 = document.getElementById('X12');
const X13 = document.getElementById('X13');
const X21 = document.getElementById('X21');
const X22 = document.getElementById('X22');
const X23 = document.getElementById('X23');
const X31 = document.getElementById('X31');
const X32 = document.getElementById('X32');
const X33 = document.getElementById('X33');

// box2
const X41 = document.getElementById('X41');
const X42 = document.getElementById('X42');
const X43 = document.getElementById('X43');
const X51 = document.getElementById('X51');
const X52 = document.getElementById('X52');
const X53 = document.getElementById('X53');
const X61 = document.getElementById('X61');
const X62 = document.getElementById('X62');
const X63 = document.getElementById('X63');

// box3
const X71 = document.getElementById('X71');
const X72 = document.getElementById('X72');
const X73 = document.getElementById('X73');
const X81 = document.getElementById('X81');
const X82 = document.getElementById('X82');
const X83 = document.getElementById('X83');
const X91 = document.getElementById('X91');
const X92 = document.getElementById('X92');
const X93 = document.getElementById('X93');

// box4
const X14 = document.getElementById('X14');
const X15 = document.getElementById('X15');
const X16 = document.getElementById('X16');
const X24 = document.getElementById('X24');
const X25 = document.getElementById('X25');
const X26 = document.getElementById('X26');
const X34 = document.getElementById('X34');
const X35 = document.getElementById('X35');
const X36 = document.getElementById('X36');

// box5
const X44 = document.getElementById('X44');
const X45 = document.getElementById('X45');
const X46 = document.getElementById('X46');
const X54 = document.getElementById('X54');
const X55 = document.getElementById('X55');
const X56 = document.getElementById('X56');
const X64 = document.getElementById('X64');
const X65 = document.getElementById('X65');
const X66 = document.getElementById('X66');

// box6
const X74 = document.getElementById('X74');
const X75 = document.getElementById('X75');
const X76 = document.getElementById('X76');
const X84 = document.getElementById('X84');
const X85 = document.getElementById('X85');
const X86 = document.getElementById('X86');
const X94 = document.getElementById('X94');
const X95 = document.getElementById('X95');
const X96 = document.getElementById('X96');

// box7
const X17 = document.getElementById('X17');
const X18 = document.getElementById('X18');
const X19 = document.getElementById('X19');
const X27 = document.getElementById('X27');
const X28 = document.getElementById('X28');
const X29 = document.getElementById('X29');
const X37 = document.getElementById('X37');
const X38 = document.getElementById('X38');
const X39 = document.getElementById('X39');

// box8
const X47 = document.getElementById('X47');
const X48 = document.getElementById('X48');
const X49 = document.getElementById('X49');
const X57 = document.getElementById('X57');
const X58 = document.getElementById('X58');
const X59 = document.getElementById('X59');
const X67 = document.getElementById('X67');
const X68 = document.getElementById('X68');
const X69 = document.getElementById('X69');

// box9
const X77 = document.getElementById('X77');
const X78 = document.getElementById('X78');
const X79 = document.getElementById('X79');
const X87 = document.getElementById('X87');
const X88 = document.getElementById('X88');
const X89 = document.getElementById('X89');
const X97 = document.getElementById('X97');
const X98 = document.getElementById('X98');
const X99 = document.getElementById('X99');

const arr = [
  // box1
  {
    id: '',
    box: 1,
    cell: X11,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 1,
    cell: X12,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 1,
    cell: X13,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 1,
    cell: X21,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 1,
    cell: X22,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 1,
    cell: X23,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 1,
    cell: X31,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 1,
    cell: X32,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 1,
    cell: X33,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  // box2
  {
    id: '',
    box: 2,
    cell: X41,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 2,
    cell: X42,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 2,
    cell: X43,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 2,
    cell: X51,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 2,
    cell: X52,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 2,
    cell: X53,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 2,
    cell: X61,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 2,
    cell: X62,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 2,
    cell: X63,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  // box3
  {
    id: '',
    box: 3,
    cell: X71,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 3,
    cell: X72,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 3,
    cell: X73,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 3,
    cell: X81,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 3,
    cell: X82,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 3,
    cell: X83,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 3,
    cell: X91,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 3,
    cell: X92,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 3,
    cell: X93,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  // box4

  {
    id: '',
    box: 4,
    cell: X14,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 4,
    cell: X15,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 4,
    cell: X16,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 4,
    cell: X24,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 4,
    cell: X25,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 4,
    cell: X26,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 4,
    cell: X34,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 4,
    cell: X35,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 4,
    cell: X36,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  // box5
  {
    id: '',
    box: 5,
    cell: X44,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 5,
    cell: X45,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 5,
    cell: X46,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 5,
    cell: X54,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 5,
    cell: X55,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 5,
    cell: X56,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 5,
    cell: X64,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 5,
    cell: X65,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 5,
    cell: X66,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  // box6
  {
    id: '',
    box: 6,
    cell: X74,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 6,
    cell: X75,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 6,
    cell: X76,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 6,
    cell: X84,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 6,
    cell: X85,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 6,
    cell: X86,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 6,
    cell: X94,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 6,
    cell: X95,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 6,
    cell: X96,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },

  // box7

  {
    id: '',
    box: 7,
    cell: X17,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 7,
    cell: X18,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 7,
    cell: X19,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 7,
    cell: X27,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 7,
    cell: X28,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 7,
    cell: X29,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 7,
    cell: X37,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 7,
    cell: X38,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 7,
    cell: X39,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  // box8
  {
    id: '',
    box: 8,
    cell: X47,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 8,
    cell: X48,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 8,
    cell: X49,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 8,
    cell: X57,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 8,
    cell: X58,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 8,
    cell: X59,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 8,
    cell: X67,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 8,
    cell: X68,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 8,
    cell: X69,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  // box9
  {
    id: '',
    box: 9,
    cell: X77,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 9,
    cell: X78,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 9,
    cell: X79,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 9,
    cell: X87,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 9,
    cell: X88,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 9,
    cell: X89,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 9,
    cell: X97,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 9,
    cell: X98,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: '',
    box: 9,
    cell: X99,
    row: '',
    col: '',
    value: '',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
];

const cellArr = arr.map((el) => {
  // add rowNum && colNum
  let rowNum = +el.cell.id[1];
  let colNum = +el.cell.id[2];
  el.row = rowNum;
  el.col = colNum;
  // add Id
  let cellNum = el.cell.id;
  let idNum = cellNum.substring(1);
  el.id = idNum;

  if (el.cell.lastChild.innerHTML !== '') {
    let number = +el.cell.lastChild.innerHTML;
    el.options = [];
    el.options = [number];

    el.value = number;
  }
  return el;
});

let boxArr = [
  {
    box: 1,
    arr: [],
  },
  {
    box: 2,
    arr: [],
  },
  {
    box: 3,
    arr: [],
  },
  {
    box: 4,
    arr: [],
  },
  {
    box: 5,
    arr: [],
  },
  {
    box: 6,
    arr: [],
  },
  {
    box: 7,
    arr: [],
  },
  {
    box: 8,
    arr: [],
  },
  {
    box: 9,
    arr: [],
  },
];
let rowArr = [
  {
    row: 1,
    arr: [],
  },
  {
    row: 2,
    arr: [],
  },
  {
    row: 3,
    arr: [],
  },
  {
    row: 4,
    arr: [],
  },
  {
    row: 5,
    arr: [],
  },
  {
    row: 6,
    arr: [],
  },
  {
    row: 7,
    arr: [],
  },
  {
    row: 8,
    arr: [],
  },
  {
    row: 9,
    arr: [],
  },
];

const colArr = [
  {
    col: 1,
    arr: [],
  },
  {
    col: 2,
    arr: [],
  },
  {
    col: 3,
    arr: [],
  },
  {
    col: 4,
    arr: [],
  },
  {
    col: 5,
    arr: [],
  },
  {
    col: 6,
    arr: [],
  },
  {
    col: 7,
    arr: [],
  },
  {
    col: 8,
    arr: [],
  },
  {
    col: 9,
    arr: [],
  },
];

const concatArr = [
  {
    box: 1,
    arr: [],
  },
  {
    box: 2,
    arr: [],
  },
  {
    box: 3,
    arr: [],
  },
  {
    box: 4,
    arr: [],
  },
  {
    box: 5,
    arr: [],
  },
  {
    box: 6,
    arr: [],
  },
  {
    box: 7,
    arr: [],
  },
  {
    box: 8,
    arr: [],
  },
  {
    box: 9,
    arr: [],
  },
];

let resBoxArr = [
  {
    box: 1,
    arr: [],
  },
  {
    box: 2,
    arr: [],
  },
  {
    box: 3,
    arr: [],
  },
  {
    box: 4,
    arr: [],
  },
  {
    box: 5,
    arr: [],
  },
  {
    box: 6,
    arr: [],
  },
  {
    box: 7,
    arr: [],
  },
  {
    box: 8,
    arr: [],
  },
  {
    box: 9,
    arr: [],
  },
];

let resRowArr = [
  {
    row: 1,
    arr: [],
  },
  {
    row: 2,
    arr: [],
  },
  {
    row: 3,
    arr: [],
  },
  {
    row: 4,
    arr: [],
  },
  {
    row: 5,
    arr: [],
  },
  {
    row: 6,
    arr: [],
  },
  {
    row: 7,
    arr: [],
  },
  {
    row: 8,
    arr: [],
  },
  {
    row: 9,
    arr: [],
  },
];

let resColArr = [
  {
    col: 1,
    arr: [],
  },
  {
    col: 2,
    arr: [],
  },
  {
    col: 3,
    arr: [],
  },
  {
    col: 4,
    arr: [],
  },
  {
    col: 5,
    arr: [],
  },
  {
    col: 6,
    arr: [],
  },
  {
    col: 7,
    arr: [],
  },
  {
    col: 8,
    arr: [],
  },
  {
    col: 9,
    arr: [],
  },
];

export {
  cellArr,
  boxArr,
  colArr,
  rowArr,
  concatArr,
  resBoxArr,
  resRowArr,
  resColArr,
  X11,
};
