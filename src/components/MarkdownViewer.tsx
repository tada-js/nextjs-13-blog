'use client';

import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

interface Props {
  content: string;
}

const MarkdownViewer = ({ content }: Props) => {
  return (
    <ReactMarkdown
      className="prose max-w-none lg:prose-xl"
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              language={match[1]}
              PreTag="div"
              style={coldarkDark}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
export default MarkdownViewer;
