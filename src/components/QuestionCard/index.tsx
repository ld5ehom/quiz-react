import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import AppButton from "../AppButton";

// Props for rendering a quiz question card
// 퀴즈 문제 카드 렌더링을 위한 props 정의
interface QuestionCardProps {
    question: string;
    category: string;
    totalQuestions?: number;
    questionNumber?: number;
    checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// QuestionCard component
// 퀴즈 진행 상태, 카테고리, 문제 내용, 선택 버튼을 렌더링하는 컴포넌트
const QuestionCard = ({
    question,
    checkAnswer,
    category,
    totalQuestions,
    questionNumber,
}: QuestionCardProps) => {
    return (
        <Box bg="white" w="100%">
            <Box
                mb={6}
                fontSize="md"
                fontWeight="bold"
                textTransform="uppercase"
            >
                Your progress: {questionNumber}/{totalQuestions}
            </Box>

            <Box fontSize="sm" mb={1}>
                {category}
            </Box>

            <Heading as="h1" size="lg">
                <p dangerouslySetInnerHTML={{ __html: question }} />
            </Heading>

            <Flex direction="column">
                <Box w="100%" mt={4} mb={4}>
                    <AppButton
                        colorScheme="purple"
                        variant="outline"
                        onClick={checkAnswer}
                        value="True"
                        width="full"
                    />
                </Box>

                <Spacer />

                <Box w="100%" mb={4}>
                    <AppButton
                        colorScheme="purple"
                        variant="outline"
                        onClick={checkAnswer}
                        value="False"
                        width="full"
                    />
                </Box>
            </Flex>
        </Box>
    );
};

export default QuestionCard;
