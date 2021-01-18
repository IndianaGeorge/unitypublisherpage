import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import ArticleList from './components/ArticleList';

const getFileList = r=>r.keys().map(key=>r(key).default);

const fileList = getFileList(require.context('./Articles', true, /\.md$/))
  .sort()
  .reverse();

function App() {
  const [post, setPost] = useState('');
  const loadArticle = async ()=>{
    const response = await fetch(fileList[0]);
    const text = await response.text();
    setPost(text);
  }
  useEffect(() => {
    loadArticle();
  },[]);
  return (
    <div className="App">
      <ReactMarkdown>{post}</ReactMarkdown>
      <ArticleList />
    </div>
  );
}

export default App;
