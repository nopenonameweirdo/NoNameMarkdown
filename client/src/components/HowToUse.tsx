import { cn } from "@/lib/utils";

const HowToUse = () => {
  return (
    <div className={cn(
      "border border-border rounded-md p-6",
      "min-h-[calc(100vh-220px)] bg-background overflow-y-auto",
      "prose prose-sm prose-invert max-w-none"
    )}>
      <h1>How to Use Nonamemarkdown</h1>
      
      <h2>Introduction</h2>
      <p>
        Nonamemarkdown is a simple, distraction-free markdown editor. 
        It allows you to write markdown text and see the rendered preview in real-time.
        Your content is automatically saved to your browser's local storage.
      </p>

      <h2>Basic Usage</h2>
      <p>
        The editor has three tabs:
      </p>
      <ul>
        <li><strong>Text</strong>: Write your markdown text here.</li>
        <li><strong>Preview</strong>: See how your markdown renders in real-time.</li>
        <li><strong>How</strong>: This help page.</li>
      </ul>

      <h2>Markdown Reference</h2>
      
      <h3>Headers</h3>
      <pre><code>
{`# Header 1
## Header 2
### Header 3`}
      </code></pre>

      <h3>Emphasis</h3>
      <pre><code>
{`*Italic text*
**Bold text**
~~Strikethrough~~`}
      </code></pre>

      <h3>Lists</h3>
      <pre><code>
{`Unordered list:
- Item 1
- Item 2
  - Nested item

Ordered list:
1. First item
2. Second item`}
      </code></pre>

      <h3>Links and Images</h3>
      <pre><code>
{`[Link text](https://example.com)

![Alt text](https://example.com/image.jpg)`}
      </code></pre>

      <h3>Code</h3>
      <pre><code>
{`Inline \`code\` in text

\`\`\`javascript
// Code block
function hello() {
  console.log("Hello world!");
}
\`\`\``}
      </code></pre>

      <h3>Blockquotes</h3>
      <pre><code>
{`> This is a blockquote
> It can span multiple lines`}
      </code></pre>

      <h3>Tables</h3>
      <pre><code>
{`| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |`}
      </code></pre>

      <h2>Auto-saving</h2>
      <p>
        Your text is automatically saved to your browser's local storage.
        When you return to Nonamemarkdown, your last edit will be restored.
      </p>

      <h2>Credits</h2>
      <p>
        Nonamemarkdown was created by{" "}
        <a 
          href="https://github.com/nopenonameweirdo" 
          target="_blank"
          rel="noopener noreferrer"
        >
          nopenonameweirdo
        </a>
      </p>
    </div>
  );
};

export default HowToUse;