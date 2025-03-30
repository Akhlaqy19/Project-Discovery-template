/**
 * CustomCodeRenderer Component
 * 
 * A React component that renders YAML code with syntax highlighting and line numbers.
 * Uses react-syntax-highlighter for code highlighting with a custom VSCode-like theme.
 * 
 * @component
 * @param {Object} props
 * @param {string} props.yamlTemplate - The YAML code to be rendered
 * @returns {JSX.Element} A styled code block with syntax highlighting
 * 
 * @example
 * ```jsx
 * <CustomCodeRenderer yamlTemplate={yamlString} />
 * ```
 */

// components/CustomCodeRenderer.js
import React from "react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CustomCodeRenderer = ({ yamlTemplate }) => {
  /**
   * Custom theme configuration for syntax highlighting
   * Extends the VSCode dark theme (vs2015) with custom colors
   * 
   * Color scheme:
   * - White (#FFFFFF): Properties, attributes, and variable names
   * - Blue (#60A5FA): Strings, keywords, and built-in functions
   * - Green (#6A9955): Comments
   * - Yellow (#DCDCAA): Symbols
   */
  const customStyle = {
    ...vs2015,
    'code[class*="language-"]': {
      background: "transparent",
      fontSize: "14px",
      lineHeight: "24px",
      fontFamily:
        "GeistMono, ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace",
    },
    // Syntax highlighting colors
    "hljs-punctuation": {
      color: "#FFFFFF",
    },
    "hljs-keyword": {
      color: "#60A5FA",
    },
    "hljs-literal": {
      color: "#60A5FA",
    },
    "hljs-string": {
      color: "#60A5FA",
    },
    "hljs-number": {
      color: "#60A5FA",
    },
    "hljs-comment": {
      color: "#6A9955",
    },
    "hljs-selector-tag": {
      color: "#FFFFFF",
    },
    "hljs-title": {
      color: "#FFFFFF",
    },
    "hljs-section": {
      color: "#FFFFFF",
    },
    "hljs-link": {
      color: "#60A5FA",
    },
    "hljs-name": {
      color: "#FFFFFF",
    },
    "hljs-type": {
      color: "#FFFFFF",
    },
    "hljs-attr": {
      color: "#FFFFFF",
    },
    "hljs-attribute": {
      color: "#FFFFFF",
    },
    "hljs-symbol": {
      color: "#DCDCAA",
    },
    "hljs-bullet": {
      color: "#C9D3EE",
    },
    "hljs-built_in": {
      color: "#60A5FA",
    },
    "hljs-addition": {
      color: "#60A5FA",
    },
    "hljs-variable": {
      color: "#FFFFFF",
    },
    "hljs-template-tag": {
      color: "#FFFFFF",
    },
    "hljs-template-variable": {
      color: "#60A5FA",
    },
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      <div className="relative">
        <SyntaxHighlighter
          language="yaml"
          style={customStyle}
          customStyle={{
            background: "transparent",
            padding: "0 0",
            margin: 0,
          }}
          showLineNumbers={true}
          wrapLines={true}
          lineNumberStyle={{
            minWidth: "2rem",
            color: "#464A4D",
            display: "table-cell",
          }}
        >
          {yamlTemplate}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CustomCodeRenderer;
