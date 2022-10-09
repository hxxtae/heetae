/**
 * Baekjoon Tier String Format
 * @param { number } tier - 티어 번호
 * @returns { string } 티어 명
 */
export function rankFormat(tier = 0) {
  let mainTire = '';
  if (tier < 1) {
    return 'Unrated';
  }

  mainTire = mainTireFilter(tier, 1, 5) ? 'Bronze' : 
    mainTireFilter(tier, 6, 10) ? 'Silver' : 
      mainTireFilter(tier, 11, 15) ? 'Gold' : 
        mainTireFilter(tier, 16, 20) ? 'Platinum' :
          mainTireFilter(tier, 21, 25) ? 'Diamond' :
            mainTireFilter(tier, 26, 30) ? 'Ruby' : '❔';
  
  let subTire = tier % 5 || 5;
  subTire = subTireFilter(subTire, 1) ? 'V' :
    subTireFilter(subTire, 2) ? 'IV' :
      subTireFilter(subTire, 3) ? 'III' :
        subTireFilter(subTire, 4) ? 'II' :
          subTireFilter(subTire, 5) ? 'I' : '❔';
  
  return mainTire.concat(subTire);
}

function mainTireFilter(tier, start, end) {
  return (tier >= start) && (tier <= end);
}

function subTireFilter(subTire, num) {
  return subTire === num;
}
