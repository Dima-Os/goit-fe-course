'use strict';
const formatString = function (string) {
  return string.length <= 40 ? string : string.slice(0, 40) + ' ...';
};

/*Just to separate tasks of homework*/
const cutStringFirstRef = document.querySelector('.cut-string-first');
cutStringFirstRef.addEventListener('click', () => {
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
});
const cutStringSecondRef = document.querySelector('.cut-string-second');
cutStringSecondRef.addEventListener('click', () => {
  console.log(
    formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'),
  );
});
const cutStringThirdRef = document.querySelector('.cut-string-third');
cutStringThirdRef.addEventListener('click', () => {
  console.log(formatString('Curabitur ligula sapien.'));
});
const cutStringFourthRef = document.querySelector('.cut-string-fourth');
cutStringFourthRef.addEventListener('click', () => {
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
});
