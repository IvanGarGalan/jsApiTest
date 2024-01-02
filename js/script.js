// const url = 'https://dad-jokes7.p.rapidapi.com/dad-jokes/search?text=dad';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b30d4270e1msh380f183148f4235p16466cjsnd19a79f41908',
// 		'X-RapidAPI-Host': 'dad-jokes7.p.rapidapi.com'
// 	}
// };

// const urlText = 'https://text-translator2.p.rapidapi.com/translate';
// const optionsText = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': 'b30d4270e1msh380f183148f4235p16466cjsnd19a79f41908',
// 		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
// 	},
// 	body: new URLSearchParams({
// 		source_language: 'en',
// 		target_language: 'id',
// 		text: 'What is your name?'
// 	})
// };

// const cargarTexto = async () =>{
//     try {
//         const response = await fetch(urlText, optionsText);
//         const result = await response.json();
//         console.log(result.data.translatedText);
//     } catch (error) {
//         console.error(error);
//     }
// }



// const cargarChiste = async () =>{
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result.data.translatedText);
//     } catch (error) {
//         console.error(error);
//     }

// }



// document.addEventListener("DOMContentLoaded",cargarDatos)
// document.addEventListener("DOMContentLoaded",cargarTexto) 