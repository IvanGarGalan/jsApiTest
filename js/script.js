let btnTranslate = document.getElementById('btnTranslate')
let textTranslate = document.getElementById('textTranslate')
let text = document.getElementById('text')

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
        cargarChiste(result.data.translatedText)
    } catch (error) {
        console.error(error);
    }
}



const cargarChiste = async (wordSearch) =>{
    try {
        const response = await fetch(`https://dad-jokes7.p.rapidapi.com/dad-jokes/search?text=${wordSearch}`, options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b30d4270e1msh380f183148f4235p16466cjsnd19a79f41908',
                'X-RapidAPI-Host': 'dad-jokes7.p.rapidapi.com'
            }
        });
        const result = await response.json();
        //para cuando se acaben las pruebas
        if(response.status == 429){
            text.textContent = 'Se ha consumido la cuota diaria'
        }else{
            mostrarResultado(result);
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



btnTranslate.addEventListener("click",translateInput)