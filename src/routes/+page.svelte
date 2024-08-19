<script>
// @ts-nocheck

    import { onMount } from 'svelte';
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzPRqoTLuz28So_EIGaInyVozQFMdUNXjon5gYjI2czBMqilNed27pSVzSUTj6fvVwodA/exec';
    let form;
    let msg;
  
    onMount(() => {
      form = document.forms['submit-to-google-sheet'];
      msg = document.getElementById("msg");
  
      form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            msg.innerHTML = "Message sent successfully!";
            form.reset();
            setTimeout(() => {
              msg.innerHTML = "";
              submitButton.disabled = false; 
            }, 5000);
          })
          .catch(error => console.error('Error!', error.message));
          submitButton.disabled = false; 
      });
    });
  </script>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<div id = "header">
    <div class = "container"> 
        <nav>
            <ul>
                <li><a href ="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contancts</a></li>                    
            </ul>
        </nav>
        
        <div class = "header-text">
            <p>BACKEND DEVELOPER</p>
            <h1>Hi, I'm <span>Qodirzoda Anushervon</span><br>from Innopolis University</h1>
        </div>
</div>
<!-- -----------about --->

<div id= "about">
    <div class = "container">
        <div class = "row">
            <div class = "about-col-1">
                <h1 class = "sub-title">About me</h1>
                <p>Hello! My name is Anushervon. I am 2nd year student of Innopolis
                    University. I am interested in backend technologies. Have experience
                    working with C/C++, Python(Django), MySql, PostgreSQL, Git, Dart(Flutter).
                    Also experienced using rpc using gRPC and also worked with ZeroMQ.
                </p>
            </div>
        </div>
    </div>
</div>
<div id = "portfolio">
    <div class="container">
        <h1 class = "sub-title"> My Work</h1>
        <div class="work-list">
            <div class="work">
                <nav class = "projects">
                    <ul>
                        <li><a href = "/parser">Telegram-parser</a></li>
                        <li><a href = "/clicker">Cryptoclicker</a></li>
                        <li><a href = "/vibechecker">Vibechecker</a></li>
                        <li><a href ="/quizcraft">QuizCraft</a></li>
                       <li> <a href="https://github.com/TheAnushervon">And more projects</a></li> 
                    </ul>
               </nav>
            </div>
        </div>
    </div>
</div>
<!-- -------------------Contact---------- -->

<div id = "contact">
    <div class = "container">
        <div class = "row">
            <div class = "contact-left">
                <h1 class = "sub-title" style = "color: red;">Contact Me</h1>
                <p><i class="fa-solid fa-square-phone"></i> +7 937 042 2187</p>
                <div class = "social-icons">
                    <a href ="https://t.me/the_anushervon"><i class="fa-brands fa-telegram"></i></a>
                    <a href ="mailto:anushervon4j@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                    <a href = "https://github.com/TheAnushervon"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div class = "contact-right">
                <form name = "submit-to-google-sheet">
                    <input type = "text" name = "Name" placeholder = "Your name" required>
                    <input type = "email" name = "Email" placeholder="Your email" required>
                    <textarea name = "Message" rows = "6" placeholder="Your Message"></textarea>
                    <button type = "submit" class="btn btn2">Submit</button>
                </form>
                <span id = "msg"></span>
            </div>
        </div>
    </div>
    <div class = "copyright">
        <p style = "color:white">© 2024 Anushervon Qodirzoda. All rights reserved.</p>
    </div>
</div>
</div>

<style>
    .btn{  background-color: red; /* Example background color */
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;}

    .btn:active {
    background-color: red; /* Darker background color when pressed */
    transform: translateY(2px); /* Slightly move the button down to give a pressed effect */
  }
</style>