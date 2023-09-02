document.addEventListener('DOMContentLoaded', (event)=>{
    event.preventDefault();
    const Name = document.getElementById('name'); 
    var name = prompt("Enter your name: ");
      while(name =="" || name== null){
        name = prompt("Enter your name: ");
      }	
      Name.textContent = name;
     
    
        function CheckAnswer(){
          const SelectedAnswerQ1 = document.querySelector('input[name="q1"]:Checked').value;
            const SelectedAnswerQ2 = document.querySelector('input[name="q2"]:Checked').value;
            const SelectedAnswerQ3 = document.querySelector('input[name="q3"]:Checked').value;
            const CorrectAnswer1 = document.getElementById("Q1b").value;
            const CorrectAnswer2 = document.getElementById("Q2a").value;
            const CorrectAnswer3 = document.getElementById("Q3a").value;
            const result1 = document.getElementById("resultQ1");
            const result2 = document.getElementById("resultQ2");
            const result3 = document.getElementById("resultQ3");
            
    
           
    if(SelectedAnswerQ1 ===CorrectAnswer1){
        result1.textContent = "1. correct";
    }else{
        result1.textContent = `1. Incorrect, ${CorrectAnswer1}`;
    }
    
    if(SelectedAnswerQ2 ===CorrectAnswer2){
        result2.textContent = "2. correct";
    }else{
        result2.textContent = `2. Incorrect, ${CorrectAnswer2}`;
    }
    
    if(SelectedAnswerQ3 ===CorrectAnswer3){
        result3.textContent = "3. correct";
    }else{
        result3.textContent = `3. Incorrect, ${CorrectAnswer3}`;
    }
    clearInterval(intervalId);
     
        }
    
     document.querySelector("button").onclick = CheckAnswer;
        
    
      
      
    
      let timerDisplay = document.getElementById('timer');
    
        function updateTimerDisplay() {
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            
            const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            timerDisplay.textContent = formattedTime;
        }
    
        let totalSeconds = 0;
        let intervalId = null;
      
       if (!intervalId) {
                totalSeconds = 120; 
    
                
                startTimer();
            }
    
        function startTimer() {
            intervalId = setInterval(() => {
                totalSeconds--;
                if (totalSeconds <= 0) {
                    clearInterval(intervalId);
                    intervalId = null;
                  alert("TIME UP!!!");
                 document.querySelector("button").disabled = true;
            
                    
                    
    
            
      
                }
                updateTimerDisplay();
            }, 1000);
        }
    }
    );