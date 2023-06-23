import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/Modals.css";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import {useSelector } from 'react-redux';

const Modals = ({ show, handleClose , setSelectedImage}) => {

  const accessToken  = useSelector((state) => state.authToken);
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  
  const [changePrompt, setChangePrompt] = useState("");
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const translateAndGenerateImages = async () => {
    try {
      // Step 1: Translate the string
      const translationResponse = await axios.post(
        'http://localhost:3000/novels/translate',
        {
          string: prompt,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken.accessToken}`,
          }
        }
      );
      const translatedString = translationResponse.data.string;
  
      // Step 2: Generate images based on the translated string
      const imageResponse = await openai.createImage({
        prompt: translatedString,
        n: 1,
        size: "256x256",
      });
      const generatedImages = imageResponse.data.data.map(item => item.url);
  
      // Step 3: Perform any further actions with the translated string and generated images
      // For example, you can update states, display the images, etc.
      setChangePrompt(translatedString);
      setResults(generatedImages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    handleClose();     
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>그림 선택하기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>문장을 입력해주세요.</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setPrompt(e.target.value)}              
              autoFocus
            />
          </Form.Group>
          <Form.Group>
          <Button variant="primary" onClick={translateAndGenerateImages}>
          완료
        </Button>
        </Form.Group>
          <Form.Group
            className="mb-3"            
          >
            <br />
        {results.length > 0 ? (
          <div>
            {results.map((result, index) => (
              <img
                key={index}
                className='resultImg'                
                src={result}
                alt={`결과 ${index}`}
                onClick={() => handleImageClick(result)}
              />
            ))}
            <br /><br />
            <div className='notion'>↑↑↑ 위의 그림 중에 하나를 클릭해주세요</div> 
            
          </div>
        ) : (
          <></>
        )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modals;