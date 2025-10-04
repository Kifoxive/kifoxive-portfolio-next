import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { Copy } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface CopyCellProps {
  text: string;
  maxLength?: number;
}

export const CopyCell: React.FC<CopyCellProps> = ({ text, maxLength = 40 }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Clipboard error", err);
    }
  };

  const truncatedText =
    text.length > maxLength ? text.slice(0, maxLength) + "…" : text;

  return (
    <div className="flex items-center gap-2">
      <span className="max-w-[200px] truncate" title={text}>
        {truncatedText}
      </span>
      <Tooltip
        key={copied ? "copied" : "default"} // 💡 це змушує Tooltip перемонтуватися
        closeDelay={0} // Миттєве закриття
        content={copied ? t("copy.tooltip.copied") : t("copy.tooltip.default")}
      >
        <Button isIconOnly size="sm" variant="light" onPress={handleCopy}>
          <Copy className="w-4 h-4" />
        </Button>
      </Tooltip>
    </div>
  );
};
