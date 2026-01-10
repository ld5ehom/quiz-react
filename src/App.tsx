import { useEffect, useState, MouseEvent } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { IQuestion, IUserAnswer } from "./types";
import { getQuestionList } from "./services/fetchQuestions";
import { Difficulty, totalQuestions } from "./constants";
import AppSpinner from "./components/Spinner";
import AppButton from "./components/AppButton";
import QuestionCard from "./components/QuestionCard";

// Main application component
// 퀴즈 앱 전체 흐름을 제어하는 메인 컴포넌트
function App() {
    const [startQuiz, setStartQuiz] = useState(false);
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [userAnswer, setUserAnswer] = useState<IUserAnswer[]>([]);
    const [loading, setLoading] = useState(true);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    // Fetch quiz questions on mount
    // 초기 렌더링 시 퀴즈 데이터 요청
    useEffect(() => {
        const fetchQuestions = async () => {
            const data = await getQuestionList(totalQuestions, Difficulty.EASY);
            setQuestions(data);
            setLoading(false);
        };

        fetchQuestions();
    }, []);

    // Start quiz
    // 퀴즈 시작
    const startQuizGame = (): void => {
        setStartQuiz(true);
    };

    // Check answer
    // 사용자가 선택한 답변 검증
    const checkAnswer = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if (gameOver) return;

        const chosenAnswer = e.currentTarget.innerText;
        const correct =
            questions[questionNumber].correct_answer === chosenAnswer;

        if (correct) setScore((prev) => prev + 1);

        const answerObject: IUserAnswer = {
            question: questions[questionNumber].question,
            answer: chosenAnswer,
            correct,
            correctAnswer: questions[questionNumber].correct_answer,
        };

        setUserAnswer((prev) => [...prev, answerObject]);
    };

    // Move to next question
    // 다음 문제로 이동
    const nextQuestion = (): void => {
        const next = questionNumber + 1;
        if (next === totalQuestions) setGameOver(true);
        else setQuestionNumber(next);
    };

    // Restart quiz
    // 퀴즈 재시작
    const replayQuiz = (): void => {
        setStartQuiz(false);
        setGameOver(false);
        setQuestionNumber(0);
        setScore(0);
        setUserAnswer([]);
    };

    return (
        <Box
            as="main"
            minH="100vh"
            w="100%"
            bg="#1a1a1a"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            {/* Centered container */}
            {/* 화면 기준 완전 중앙 컨테이너 */}
            <Box w="100%" maxW="560px" mx="auto">
                {loading && (
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <AppSpinner size="lg" color="purple" />
                    </Box>
                )}

                {!loading && !startQuiz && !gameOver && (
                    <Box bg="white" color="black" p="6" rounded="md">
                        <Heading size="lg" mb={4}>
                            Quiz App
                        </Heading>
                        <Box mb={6}>
                            You will be asked {totalQuestions} true or false
                            questions.
                        </Box>
                        <AppButton
                            colorScheme="purple"
                            variant="solid"
                            onClick={startQuizGame}
                            value="Start Quiz Game"
                        />
                    </Box>
                )}

                {!loading && startQuiz && !gameOver && (
                    <Box bg="white" color="black" p="6" rounded="md">
                        <QuestionCard
                            question={questions[questionNumber].question}
                            category={questions[questionNumber].category}
                            questionNumber={questionNumber}
                            totalQuestions={totalQuestions}
                            checkAnswer={checkAnswer}
                        />

                        <AppButton
                            disabled={userAnswer.length !== questionNumber + 1}
                            colorScheme="purple"
                            variant="solid"
                            onClick={nextQuestion}
                            value="Next Question"
                            width="full"
                        />
                    </Box>
                )}

                {gameOver && (
                    <Box bg="white" color="black" p="6" rounded="md">
                        <Heading size="xl" mb={2}>
                            Game Over
                        </Heading>
                        <Box mb={6}>
                            Your score is {score} / {totalQuestions}
                        </Box>

                        <AppButton
                            colorScheme="purple"
                            variant="solid"
                            onClick={replayQuiz}
                            value="Replay Quiz"
                            width="full"
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default App;
