import React, { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

const LineReducer = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // テキスト処理
    let processed = input;
    
    // 1. 連続する改行（2つ以上）を1つの改行に置換
    processed = processed.replace(/\n{2,}/g, '\n');
    
    // 2. 各行の末尾の空白を削除
    processed = processed.split('\n').map(line => line.trimEnd()).join('\n');
    
    // 3. 文章全体の先頭と末尾の改行を削除
    processed = processed.replace(/^\n+/, '').replace(/\n+$/, '');
    
    setOutput(processed);
  }, [input]);

  const handleClear = () => {
    setInput('');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('コピーに失敗しました:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">line-reducer</h1>
          <p className="text-gray-600 mb-6">改行整理ツール</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-semibold text-gray-700">入力</label>
                <span className="text-sm text-gray-500">{input.length} 文字</span>
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-96 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="ここにテキストを貼り付けてください..."
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-semibold text-gray-700">出力（整理後）</label>
                <span className="text-sm text-gray-500">{output.length} 文字</span>
              </div>
              <textarea
                value={output}
                readOnly
                className="w-full h-96 p-3 border border-gray-300 rounded-lg bg-gray-50 resize-none"
                placeholder="整理されたテキストがここに表示されます..."
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleClear}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
            >
              クリア
            </button>
            <button
              onClick={handleCopy}
              disabled={!output}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {copied ? (
                <>
                  <Check size={18} />
                  コピーしました！
                </>
              ) : (
                <>
                  <Copy size={18} />
                  コピー
                </>
              )}
            </button>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
            <h2 className="font-semibold text-blue-900 mb-2">使い方</h2>
            <p className="text-blue-800 text-sm text-left">
              OneNoteや他のアプリケーションから貼り付けた文章の余分な改行を自動的に整理します。
              連続する改行を1つにまとめ、行末の不要な空白を削除し、文章全体をすっきりさせます。
            </p>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <a
              href="https://github.com/twtwtw-gj/line-reducer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineReducer;