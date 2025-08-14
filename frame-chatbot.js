<style>
#popup-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:9998}
#popup-container{background:#fff;padding:20px;border-radius:10px;max-width:400px;width:90%;box-shadow:0 2px 10px rgba(0,0,0,.3);font-family:Arial,sans-serif;text-align:center}
#popup-container h2{margin-top:0;font-size:20px}
#popup-container button{margin-top:15px;padding:10px 20px;border:none;border-radius:5px;background:#ff4b5c;color:#fff;font-size:16px;cursor:pointer}
#popup-container button:hover{background:#e04353}
</style>

<div id="popup-overlay" style="display:none;">
  <div id="popup-container">
    <h2>Seja bem-vindo(a) à Frame</h2>
    <p>Escolha uma opção para continuar:</p>
    <button onclick="handleOption('criador')">Sou Criador(a)/Anunciante</button>
    <button onclick="handleOption('cliente')">Sou Cliente/Contratante</button>
  </div>
</div>

<script>
function showPopup(){document.getElementById('popup-overlay').style.display='flex';}
function closePopup(){document.getElementById('popup-overlay').style.display='none';}

function handleOption(option){
  if(option==='criador'){
    window.open('https://frameag.com/login','_blank');
  } else if(option==='cliente'){
    alert('Você selecionou Cliente/Contratante. Continue navegando!');
  }
  closePopup();
}

window.addEventListener('load',()=>{setTimeout(showPopup,1000);});
</script>