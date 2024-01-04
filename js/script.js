let btnTranslate = document.getElementById('btnTranslate')
let textTranslate = document.getElementById('textTranslate')
let text = document.getElementById('text')
let listWords = document.getElementById('listWords')

// function that translates the text
const changeText = async (wordToTranslate) =>{
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
        // the word gets stored into localstorage
        localStorage.setItem('wordSpanish',wordToTranslate)
        //the wordgets loaded in the table
        loadWordsIntoTable()
        //the joke loads
        loadJoke(result.data.translatedText)
    } catch (error) {
        console.error(error);
    }
}

//loads the joke using the word
const loadJoke = async (wordSearch) =>{
    try {
        const response = await fetch(`https://icanhazdadjoke.com/search?term=${wordSearch}`,{
       
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
            console.log(result.results[0].joke)
            //Object made
            myJoke = new Dadjoke();
            //setter
            myJoke.phrase = result.results[0].joke
            //Show object
            console.log(myJoke)
            //getter
            showResult(myJoke.phrase);
    } catch (error) {
        console.log(error);
    }

}

//shows the result on screen
const showResult = (event) =>{
    text.textContent = event
}

//gets the value of the input and the api calls begin
const translateInput = () =>{
    let translation = textTranslate.value 
    // console.log(translation)
    changeText(translation)
}

//the word gets loaded on the list
const loadWordsIntoTable = () =>{
    // puts the localStorage on a variable
    let wordCopy = localStorage.getItem('wordSpanish')
    
    //creates a li element

    const fragment = document.createDocumentFragment()
    
    let listElement = document.createElement('LI')
    listElement.textContent = wordCopy
    fragment.appendChild(listElement)
    
    //appends the list
    listWords.appendChild(fragment)

}

//listener
btnTranslate.addEventListener("click",translateInput)