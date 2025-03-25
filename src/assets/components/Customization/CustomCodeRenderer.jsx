// components/CustomCodeRenderer.js
import React from "react";
import { Highlight, themes } from "prism-react-renderer";

// تم اختصاصی با رنگ‌های خاکستری-قرمز
const projectDiscoveryTheme = {
  plain: {
    color: "#e0e0e0", // متن اصلی (سفید/خاکستری روشن)
    backgroundColor: "#1a1a1a", // پس‌زمینه تاریک
  },
  styles: [
    // توکن‌های عمومی
    {
      types: ["keyword", "tag", "builtin"],
      style: {
        color: "#ff4d4d", // قرمز پررنگ (برای CVE/کلمات کلیدی)
        fontWeight: "bold",
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#6bff6b", // سبز روشن (برای مقادیر)
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#808080", // خاکستری (برای کامنت‌ها)
        fontStyle: "italic",
      },
    },
    // هایلایت اختصاصی برای CVE (اضافه شده به کد)
    {
      types: ["cve-highlight"], // نوع سفارشی
      style: {
        color: "#ff0000",
        backgroundColor: "#330000",
        padding: "2px 4px",
        borderRadius: "3px",
      },
    },
  ],
};

const CustomCodeRenderer = ({ code, language }) => {
  return (
    <Highlight code={code} language={language} theme={projectDiscoveryTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: "20px", borderRadius: "8px" }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => {
                const { style: tokenStyle, ...restTokenProps } = getTokenProps({ token, key });
                
                // هایلایت CVE با یک کلاس سفارشی
                const isCVE = token.content.includes("CVE-");
                const customStyle = isCVE
                  ? {
                      ...tokenStyle,
                      color: "#ff4d4d",
                      fontWeight: "bold",
                      backgroundColor: "#330000",
                    }
                  : tokenStyle;

                return (
                  <span
                    key={key}
                    {...restTokenProps}
                    style={customStyle}
                  />
                );
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
export default CustomCodeRenderer
