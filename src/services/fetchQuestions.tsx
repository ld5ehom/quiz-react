import axios from "axios";
import { IQuestion } from "../types";

// Base API URL for Open Trivia Database
// Open Trivia DB 기본 API 엔드포인트
const baseURL = "https://opentdb.com/api.php?amount=";

// Fetch quiz question list from external API
// 외부 API(Open Trivia DB)에서 퀴즈 문제 목록을 가져오는 함수
export const getQuestionList = async (
    amount: number,
    difficulty: string
): Promise<IQuestion[]> => {
    try {
        // Send GET request with amount, difficulty, and boolean type
        // 문제 개수, 난이도, true/false 타입을 포함하여 GET 요청 전송
        const response = await axios.get(
            `${baseURL}+${amount}&difficulty=${difficulty}&type=boolean`
        );

        // Return quiz question results
        // 퀴즈 문제 결과 배열 반환
        return response.data.results;
    } catch (error) {
        // Handle API request errors
        // API 요청 중 발생한 오류 처리
        throw new Error(`Error fetching the questions.${error}`);
    }
};
