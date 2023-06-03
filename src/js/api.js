/*
----------------------------
  현재 사용하지 않음 
----------------------------
*/

import 'regenerator-runtime/runtime';
import { rankFormat } from './util';

const BAEKJOON_EXAM_PATH = 'https://solved.ac/api/v3/user/problem_stats?handle=fkdlxmfkdl1';
const BAEKJOON_USER_PATH = 'https://solved.ac/api/v3/search/user?query=fkdlxmfkdl1&page=1';

/**
 * Response object (사용자가 푼 문제 개수 수준별로 가져오기)
 * @typedef { Object } ResponseObject
 * @property { number } level - 난이도
 * @property { number } total - 문제 수
 * @property { number } solved - 푼 문제 수
 * @property { number } partial - 부분 성공한 문제 수
 * @property { number } tried - 시도해본 문제 수
 * @property { number } exp - 난이도 획득 경험치 합
 */

/**
 * Response 1
 * @return { Promise<number> } solved - 푼 문제 수
 */
const baekjoonExamApi = async () => {
  const data = await fetch(BAEKJOON_EXAM_PATH, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());

  return data.reduce((prev, curr) => prev + curr['solved'], 0);
};

/**
 * Response 2
 * @returns { Promise<any> } userObject - 사용자 검색 데이터
 */
const baekjoonUserApi = async () => {
  const data = await fetch(BAEKJOON_USER_PATH, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then((response) => response.json())
    .catch((e) => console.error(`백준 API요청 에러: ${e.message}`));
  
  const { count, items } = data;
  return items[0];
}

const paintData = async () => {
  const user = await baekjoonUserApi();
  if (user?.constructor !== Object || Object.keys(user)?.length < 1) {
    throw new Error("'user' is not an Object");
  }
  const { solvedCount, tier } = user;
  document.querySelector('.algorithm-count span').append(solvedCount || '❔');
  document.querySelector('.algorithm-level span').append(rankFormat(tier) || '❔');
}

