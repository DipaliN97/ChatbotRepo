import image from './img/cute_robot.jpg';
import './App.css';
import { useState} from 'react';
import './options.js';


function App() {

  const defaultvalue = 0;
  const [counter, setCounter] = useState(defaultvalue);
  const [messageList, setMessageList] = useState([]);
  
  
  const handleInput = () => {
    
    const botMessage = document.querySelector('#message1');
    const humanMessage = document.querySelector('#message2');
    for(let i in messageList){
      console.log("The array elemens",i)
    }
    setMessageList(messageList => [...messageList, words]); 


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
    let bye = ['Bye|bye|Goodbye|goodbye|See you later|see you later|See you|see you']
    let words3 = new RegExp(bye);
    if(words3.test(document.querySelector('#input').value)){
      const status = document.querySelector('.status');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Bye, have a nice day';
        document.querySelector('#input').value = '';
      }, 2000);
      setTimeout(() => {
        status.innerHTML = 'Not active';
        status.style.color = 'red';
      }, 5000);
     
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
                {messageList.map((message,i) => (
                  <>
                  <li>
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
