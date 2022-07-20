import image from './img/cute_robot.jpg';
import './App.css';
import { useState} from 'react';



function App() {

  const defaultvalue = 0;
  const [counter, setCounter] = useState(defaultvalue);
  const [messageList, setMessageList] = useState([]);
  const handleInput = () => {
    const botMessage = document.querySelector('.bot-message');
    console.log(botMessage)
    const humanMessage = document.querySelector('.human-message');
    
    setMessageList([...messageList,{...botMessage,...humanMessage}]);
    for(let i in messageList){
      console.log("The array elemens",i)
    }
    //const [messageList,setMessageList] = useState([]);
    //const [botmessageList ,setMessageList] = useState([]);
    //const [humanMessageList , sethumanMessageList]= useState[]);

    let badwords =['|bad|stupid|useless|bitch|crazy|nonsense'] //adding the bad words
    let words = new RegExp(badwords);
    if(words.test(document.querySelector('#input').value)){ // if the input contains bad words
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Please do not use bad words'; // display this message
        document.querySelector('#input').value = '';
        
      }, 2000); 
    }
  
    let welcome = ['Sup|sup|Hello|Hi|hello|hi|Yo|Halla|yello|yelow']
    let words2 = new RegExp(welcome);
    if(words2.test(document.querySelector('#input').value)){
      const status = document.querySelector('.status');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Hello There how are you doing today?';
        status.innerHTML = 'Active';
        status.style.color = 'green';
        document.querySelector('#input').value = '';
        
      }, 2000);
      
    }
    let how = ['How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you']
    let words3 = new RegExp(how);
    if(words3.test(document.querySelector('#input').value)){
      const status = document.querySelector('.status');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'I am fine, thank you';
        status.innerHTML = 'Active';
        status.style.color = 'green';
        document.querySelector('#input').value = '';
      }, 2000);
    }
    let color =['color|RGB meaning|color types|types of color']
    let words4 = new RegExp(color);
    if(words4.test(document.querySelector('#input').value)){
      const status = document.querySelector('.status');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 
        status.innerHTML = 'Active';
        status.style.color = 'green';
        document.querySelector('#input').value = '';
      },2000);
    }
    let good = ["That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice"]
    let words5 = new RegExp(good);
    if(words5.test(document.querySelector('#input').value)){
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = '😁';
        document.querySelector('#input').value = '';
      }, 1000);
    }
    let response = ["I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|Good|good|I'm good|i'm good|great|Great"]
    let words6 = new RegExp(response);
    if(words6.test(document.querySelector('#input').value)){
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'That is good';
        document.querySelector('#input').value = '';
      }, 2000);
    }
    let thanks = ['Thanks|thanks|thank you|thank you very much|thank you very much']
    let words7 = new RegExp(thanks);
    if(words7.test(document.querySelector('#input').value)){
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'You are welcome';
        document.querySelector('#input').value = '';
      }, 2000);
    }
    let bye = ['Bye|bye|Goodbye|goodbye|See you later|see you later|See you|see you']
    let words8 = new RegExp(bye);
    if(words8.test(document.querySelector('#input').value)){
      const status = document.querySelector('.status');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Bye, have a nice day';
        document.querySelectorAll('#input').value = '';
      }, 2000);
      setTimeout(() => {
        status.innerHTML = 'Not active';
        status.style.color = 'red';
      }, 5000);
      
      console.log("response from bot",botMessage);
      console.log("response from human",humanMessage);
     
    }
    
  
    
    
    humanMessage.innerHTML = document.querySelector('#input').value; // display the input
    
   
  }
 
  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
       
          <div className="header">
          <div className='close-button'>&#10060;</div>
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="right">
            
              <div className="name">ChatBot</div>
              <div className='status' style={{ color: "green"}}>Active</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
            <div className="bot-message1" id='message'>Tobi started</div>

              <div className="messages">
              <ul style={{ listStyle: "none" }}>
                {messageList.map((message) => (
                  <>
                  <li key='id'>
                <div className="bot-message" id='message1'>{message.botMessage}</div>
                <div className="human-message" id='message2'>{message.humanMessage}</div>
            
                  </li>
                   </>
                 ))}
                </ul>
  
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
                <div className="input">
                  <input type="text" id='input' placeholder='Enter your message' onClick = {() => setCounter(counter+1)} />
                  <p>{counter}</p>

                </div>
                <div className="btn">
                  <button onClick={handleInput}>
                    <i className="fas fa-paper-plane"></i>
                    Send
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
