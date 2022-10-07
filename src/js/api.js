import 'regenerator-runtime/runtime';

const BAEKJOON_API_PATH = 'https://solved.ac/api/v3/user/problem_stats?handle=fkdlxmfkdl1';

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
 * Response
 * @return { Promise<number> } solved - 푼 문제 수
 */
const baekjoonApi = async () => {
  const data = await fetch(BAEKJOON_API_PATH, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());

  return data.reduce((prev, curr) => prev + curr['solved'], 0);
};

const paintCount = async () => {
  const data = await baekjoonApi();
  const result = data ? data : '❔';
  document.querySelector('.algorithm-count span').append(result);
}

paintCount();
