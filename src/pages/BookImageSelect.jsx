import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from '../styles/BookImageSelect.module.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const BookImageSelect = () => {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const navigate = useNavigate();
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const generateImages = async () => {        
    const res = await openai.createImage({
      prompt: prompt,
      n: 4,
      size: "256x256",
    });
    setResults(res.data.data.map(item => item.url));
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);  
    navigate('/writeChapter', { state: { selectedImage: image } });
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>책 표지 선택하기</h1>
        <div className={styles.basic}>
          <h4>책 표지 그림으로 만들고 싶은 문장을 입력해주세요</h4>
          <input
            className={styles.bookname}
            type="text"
            onChange={(e) => setPrompt(e.target.value)}
          />
          <br />
          <br />
          <Button variant="dark" onClick={generateImages}>
            입력완료
          </Button>
        </div>
        <br />
        {results.length > 0 ? (
          <div>
            {results.map((result, index) => (
              <img
                key={index}
                className={`${styles.resultImg} ${selectedImage === result ? styles.selected : ''}`}
                src={result}
                alt={`결과 ${index}`}
                onClick={() => handleImageClick(result)}
              />
            ))}           
          </div>
        ) : (
          <></>
        )}
        <br />
      </div>
    </div>
  );
};

export default BookImageSelect;