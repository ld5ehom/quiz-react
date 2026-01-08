import { Spinner } from "@chakra-ui/react";

// Loading spinner props
// 로딩 상태 표시를 위한 Spinner props 정의
interface AppSpinnerProps {
    size?: "sm" | "md" | "lg" | "xl";
    color?: string;
}

// AppSpinner component
// Chakra UI Spinner를 래핑한 공통 로딩 컴포넌트
const AppSpinner = ({ size = "lg", color }: AppSpinnerProps) => {
    return <Spinner size={size} color={color} />;
};

export default AppSpinner;
