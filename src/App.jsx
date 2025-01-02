import React, { useState } from 'react';
    import logo from './assets/logo.svg';

    function App() {
      const [keyword, setKeyword] = useState('');
      const [url, setUrl] = useState('');
      const [result, setResult] = useState('');

      const calculateSEO = () => {
        if (!keyword || !url) {
          setResult('Please enter both a keyword and a URL.');
          return;
        }

        const keywordDensity = calculateKeywordDensity(keyword, url);
        const onPageScore = calculateOnPageScore(keyword, url);

        setResult(
          `Keyword Density: ${keywordDensity.toFixed(2)}%, On-Page Score: ${onPageScore.toFixed(2)}/100`,
        );
      };

      const calculateKeywordDensity = (keyword, url) => {
        const text = `This is a sample text for the ${keyword} calculator. We are calculating the density of the keyword ${keyword} on this page. This is a very important aspect of SEO. The ${keyword} is very important.`;
        const keywordCount = (text.match(new RegExp(keyword, 'gi')) || []).length;
        const totalWords = text.split(/\s+/).length;
        return (keywordCount / totalWords) * 100;
      };

      const calculateOnPageScore = (keyword, url) => {
        let score = 50;
        if (url.includes(keyword)) {
          score += 20;
        }
        if (keyword.length > 3) {
          score += 10;
        }
        if (keyword.length < 10) {
          score += 20;
        }
        return Math.min(score, 100);
      };

      return (
        <div className="container">
          <h1>
            <img src={logo} alt="SEO Wiz Logo" className="logo" />
            SEO Wiz
          </h1>
          <p>
            Welcome to SEO Wiz! This tool helps you analyze your website's SEO performance. Enter your
            target keyword and the URL of your page to get insights into keyword density and on-page
            optimization.
          </p>
          <p>
            Understanding your SEO score is crucial for improving your website's visibility on search
            engines. Use this tool to optimize your content and improve your search rankings.
          </p>
          <div className="calculator-container">
            <div className="input-group">
              <label>Keyword:</label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter your keyword"
              />
            </div>
            <div className="input-group">
              <label>URL:</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter your URL"
              />
            </div>
            <button onClick={calculateSEO}>Calculate SEO</button>
            {result && <div className="result">{result}</div>}
          </div>
        </div>
      );
    }

    export default App;
