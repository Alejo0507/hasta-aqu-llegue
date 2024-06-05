import { calcularImc } from "./calcularIMC"
const botonimc=document.getElementById('botonimc')

botonimc.addEventListener('click', ()=>{
    document.querySelector('#IMC').innerHTML = `
  <div>
    <imc-calcular></imc-calcular>
  </div>
    
 ` 


})

class imc extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});

        this.shadowRoot.innerHTML=`
        <style>
        .modal{
            border-radius:10px;
            gap:10px;
            width:100%;
            padding:20px;
            background-color:#252525;
            display:flex;
            justify-content:center;
            flex-direction:column;
            align-items:center;
        }

        h1, h4 {
            color:white;
        }
        .calcularimc{
            
        }
        button{
            border-radius: 10px;
            padding: 10px;
            border: 1px solid;
            transition:0.5s ease;
        }
        button:hover{
            color: #fff;
            transform: scale(1.1);
            background-color: #252525;
        }
       
    
       </style>
    
    <div class="modal">
    <img id="modal-image" />
    <h1>CALCULAR IMC</h1>
    <input type="text" name="" id="peso" placeholder="Peso en Kg">
    <input type="number" name="" id="altura" placeholder="Altura en Mts">
    <button id="calcularimc">Calcular</button>
    <button id="volver">volver a calcular</button>
    <div id="resultado"></div>
    
    </div>
        
        
        
        
        `

    }
    connectedCallback() {
        

           
            this.shadowRoot.getElementById('calcularimc').addEventListener('click',()=>this.addRow())
            this.shadowRoot.getElementById('volver').addEventListener('click',()=>this.again())

    
     
        
        }
        addRow(){
            const peso =this.shadowRoot.getElementById('peso').value.trim();
            const altura =this.shadowRoot.getElementById('altura').value.trim();
           console.log(peso)
            const total=calcularImc(peso,altura)
           if(total<25){
                this.shadowRoot.querySelector('#resultado').innerHTML=`
                <h4>Normal</h4>
                <img src="/public/bajo.png" alt="">
                <h4>IMC =${total}</h4>
                `

            }else if((total<30) &&(total>=25)){
                this.shadowRoot.querySelector('#resultado').innerHTML=`
                <h4>Sobrepeso</h4>
                <img src="/public/normal.png" alt="">
                <h4>IMC =${total}</h4>
                `

            }else if((total<35) &&(total>=30)){
                this.shadowRoot.querySelector('#resultado').innerHTML=`
                <h4>Obesidad 1</h4>
                <img src="/public/sobrepeso.png" alt="">
                <h4>IMC =${total}</h4>
                `

            }else if((total<40) &&(total>=35)){
                this.shadowRoot.querySelector('#resultado').innerHTML=`
                <h4>Obesidad 2</h4>
                <img src="/public/obesidad 1.png" alt="">
                <h4>IMC =${total}</h4>
                `

            }else{
                this.shadowRoot.querySelector('#resultado').innerHTML=`
                <h4>Obesidad 3</h4>
                <img src="/public/obesidad 2.png" alt="">
                <h4>IMC =${total}</h4>
                `
            }
               
                
        }
        again(){
            document.querySelector('#IMC').innerHTML = `
            <div>
                <imc-calcular></imc-calcular>
            </div>

                ` 
        }
   
}
customElements.define('imc-calcular',imc)






