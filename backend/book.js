async function fetchbook(url){
    try{
        const response= await fetch(url)
        const result= await response.json()
        // console.log(result)
        console.log(result.results.list_name)
    }
    catch(error){
        console.log(error);
    }
}
fetchbook("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=XLn4VoWL3PXMaQk2sPjds4qQqW7NCdWt")