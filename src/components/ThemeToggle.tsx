import { Moon02Icon, Sun01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { useTheme } from "@/contexts/theme.context";

import { Button } from "./ui/button";

export default function ThemeToggle() {
    const { theme, handleThemeToggle } = useTheme();
    const isDark = theme === "dark";
    return (
        <Button className="z-1000 inline-block cursor-pointer bg-transparent hover:bg-transparent">
            <span onClick={handleThemeToggle}>
                {!isDark && (
                    <HugeiconsIcon
                        icon={Moon02Icon}
                        strokeWidth={1.5}
                        className="size-[1.3rem] text-foreground/70"
                    />
                )}
                {isDark && <HugeiconsIcon icon={Sun01Icon} className="size-6 text-foreground/70" />}
            </span>
        </Button>
    );
}
