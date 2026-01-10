import { Box, Heading } from "@chakra-ui/react";
import AppButton from "../AppButton";

// Props for QuestionCard
// 퀴즈 카드 컴포넌트 props 정의
interface QuestionCardProps {
    question: string;
    category: string;
    questionNumber: number;
    totalQuestions: number;
    checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// QuestionCard component
// 진행도, 카테고리, 문제, O/X 버튼을 렌더링
const QuestionCard = ({
    question,
    category,
    questionNumber,
    totalQuestions,
    checkAnswer,
}: QuestionCardProps) => {
    return (
        <Box>
            {/* Progress indicator */}
            {/* 진행 상태 표시 */}
            <Box
                fontSize="sm"
                fontWeight="bold"
                mb={2}
                textTransform="uppercase"
            >
                Your Progress: {questionNumber + 1}/{totalQuestions}
            </Box>

            {/* Category */}
            {/* 문제 카테고리 */}
            <Box fontSize="sm" mb={2}>
                {category}
            </Box>

            {/* Question */}
            {/* 문제 내용 */}
            <Heading size="lg" mb={6}>
                <Box as="span" dangerouslySetInnerHTML={{ __html: question }} />
            </Heading>

            {/* Answer buttons */}
            {/* O / X 버튼 */}
            <Box mb={3}>
                <AppButton
                    colorScheme="purple"
                    variant="solid"
                    onClick={checkAnswer}
                    value="True"
                    width="full"
                />
            </Box>

            <Box mb={6}>
                <AppButton
                    colorScheme="purple"
                    variant="solid"
                    onClick={checkAnswer}
                    value="False"
                    width="full"
                />
            </Box>
        </Box>
    );
};

export default QuestionCard;
