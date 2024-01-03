let btnTranslate = document.getElementById('btnTranslate')
let textTranslate = document.getElementById('textTranslate')
let text = document.getElementById('text')
let listWords = document.getElementById('listWords')

let arrayWords = [];

const traducirTexto = async (wordToTranslate) =>{
    try {
        const response = await fetch('https://text-translator2.p.rapidapi.com/translate', optionsText = {
    method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'b30d4270e1msh380f183148f4235p16466cjsnd19a79f41908',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	},
	body: new URLSearchParams({
		source_language: 'es',
		target_language: 'en',
		text: wordToTranslate
	})
        });

        const result = await response.json();
        // console.log(result.data.translatedText);
        localStorage.setItem('palabra',wordToTranslate)
        cargarPalabrasTabla()
        cargarChiste(result.data.translatedText)
    } catch (error) {
        console.error(error);
    }
}


const cargarChiste = async (wordSearch) =>{
    try {
        const response = await fetch(`https://icanhazdadjoke.com/search`,{
       
       method: 'GET',
       headers: {
           'Accept': 'application/json'
       },
       searchParams: {
           term: wordSearch,
           limit: 1
       }
})     
        const result = await response.json();
        //para cuando se acaben las pruebas
        if(response.status == 429){
            text.textContent = 'Se ha consumido la cuota diaria'
        }else{
            console.log(result.results[0].joke)
            //Object made
            myJoke = new Dadjoke();
            myJoke.phrase = result.results[0].joke
            //Show object
            console.log(myJoke)
            mostrarResultado(myJoke.phrase);
        }
    } catch (error) {
        console.log(error);
    }

}

const mostrarResultado = (event) =>{
    text.textContent = event
}

const translateInput = () =>{
    let translation = textTranslate.value 
    // console.log(translation)
    traducirTexto(translation)
}

const cargarPalabrasTabla = () =>{
    // puts the localStorage on a variable
    let palabraCopiar = localStorage.getItem('palabra')
    
    //creates a list

    const fragment = document.createDocumentFragment()
    
    let listElement = document.createElement('LI')
    listElement.textContent = palabraCopiar
    fragment.appendChild(listElement)
    
    //appends the list
    listWords.appendChild(fragment)

}

btnTranslate.addEventListener("click",translateInput)