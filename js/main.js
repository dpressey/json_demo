var books = [{
	title: "The Gunslinger",
	author : "Stephen King",
	year: "1981"
},{
	title: "Moby Dick",
	author : "Jules Verne",
	year: "1920" 

},{
	title: "Hercule Poirot",
	author : "Agatha Christie",
	year: "1890"
}];


// serailizing the javascript object into a json object
var srlzBks = JSON.stringify(books);

// parsing the json object
var prsBks = JSON.parse(srlzBks);

(function(){
	// output the converted javascript object
	console.log(srlzBks); 
	// [{"title":"The Gunslinger","author":"Stephen King","year":"1981"},{"title":"Moby Dick","author":"Jules Verne","year":"1920"},{"title":"Hercule Poirot","author":"Agatha Christie","year":"1890"}] 

	// output the parsed json object
	console.log(prsBks);
}) (); 