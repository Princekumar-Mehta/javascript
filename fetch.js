fetch("https://openlibrary.org/works/OL45804W.json")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((response) => {
    console.log(response);
  });
