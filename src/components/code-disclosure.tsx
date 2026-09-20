"use client";

import { useState } from "react";

type CodeDisclosureProps = {
  code: string;
  downloadHref: string;
  filename: string;
};

export function CodeDisclosure({ code, downloadHref, filename }: CodeDisclosureProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <details className="code-disclosure">
      <summary>View code <span aria-hidden="true">+</span></summary>
      <div className="code-disclosure__toolbar">
        <span>{filename}</span>
        <div>
          <button type="button" onClick={copyCode}>{copied ? "Copied" : "Copy"}</button>
          <a href={downloadHref} download={filename}>Download</a>
        </div>
      </div>
      <pre><code>{code}</code></pre>
    </details>
  );
}
