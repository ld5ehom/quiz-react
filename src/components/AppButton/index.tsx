import { Button, ButtonProps } from "@chakra-ui/react";

// Reusable button component for quiz actions
// 퀴즈 앱 전반에서 사용하는 공통 버튼 컴포넌트
interface AppButtonProps {
    value: string;
    colorScheme?: ButtonProps["colorScheme"];
    variant?: ButtonProps["variant"];
    className?: string;
    disabled?: boolean;
    width?: ButtonProps["w"];
    onClick?: ButtonProps["onClick"];
}

// AppButton component
// Chakra UI Button를 래핑한 공통 버튼 컴포넌트
const AppButton = ({
    value,
    onClick,
    colorScheme,
    variant,
    className,
    disabled,
    width,
}: AppButtonProps) => {
    return (
        <Button
            onClick={onClick}
            colorScheme={colorScheme}
            variant={variant}
            className={className}
            disabled={disabled}
            w={width}
        >
            {value}
        </Button>
    );
};

export default AppButton;
