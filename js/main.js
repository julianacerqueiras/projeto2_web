// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
        apiKey: "AIzaSyAVJxUH0KvXHNocgGgzw4hFlD4vG6THkAQ",
        authDomain: "descobreai-c6ad6.firebaseapp.com",
        databaseURL: "https://descobreai-c6ad6.firebaseio.com",
        projectId: "descobreai-c6ad6",
        storageBucket: "descobreai-c6ad6.appspot.com",
        messagingSenderId: "201791219422",
        appId: "1:201791219422:web:720b5b8c7971270f82c44f",
        measurementId: "G-BM1XCTJKJ6"
    
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('descobreai-c6ad6').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Salvar menssagem
    saveMessage(name, email, message);
  
    // Mostrar alerta
    document.querySelector('.alert').style.display = 'block';
  
    // Esconder alerta após 3seg
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Limpar formulario
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }