import React, { SyntheticEvent } from "react";
import { useState } from "react";
import { Button } from "../../common/Button";
import getAnswerFromOpenAi from "../../langchain";

export default function ChatBox() {
  const [ques, setQues] = useState("");
  const [res, setRes] = useState("");
  const handleChangeQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQues(e.target.value);
  }

  const handleOnQues = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    getAnswerFromOpenAi(ques).then((res) => {
      setRes(res.toString());
    });
  }
  
  return (
    <div>
      <form onSubmit={handleOnQues}>
        <h6>
          <label htmlFor="question">Question:</label>
        </h6>
        <input value={ques} type="text" id="question" name="question" onChange={handleChangeQuestion}/>
        <Button name="submit">Submit</Button>
      </form>
      {res && (
        <div>
          <h6>Response:</h6>
          <p>{res}</p>
        </div>
      )}
    </div>
  );
}