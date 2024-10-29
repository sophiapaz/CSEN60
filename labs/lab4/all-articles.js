// Tags
const searchTags = [];

// Individual elements
let parentElement = null;
const tagLists = Array.from(document.querySelectorAll("article .tags"));

// Search Functions

/*
  The initialize search funcrion is first checking if the parent element is equal to null.
  If it is null, it will return an error that no one has typed anything into the parent
  element. If the parent element is not null, it will add a tag for the website to search
  for the articles
*/
function initializeSearch(newParentElement) {
  const params = new URLSearchParams(window.location.search);
  if (newParentElement === null) {
    console.error(
      "Cannot insert tags, parent element is null",
      params.getAll("tag")
    );
    return;
  }

  parentElement = newParentElement;
  for (const tag of params.getAll("tag")) {
    addSearchTerm(tag);
  }
}

/*
  The hideArticles function first checks if the length of the user's search has any charaters. If 
  the search tag's length is zero, it will reveal all the articles since "hidden" is removed from the class list.
  The second for loop is adding/pushing the tags searched by the user into an array. This leads to the code I wrote
  where the function will iterate through all the articles to check if it matches the tags the user has search. It 
  will add hidden if it does not match and it will reveal the article if it does match the tag
*/
function hideArticles() {
  if (searchTags.length === 0) {
    for (const article of document.querySelectorAll("article")) {
      article.classList.remove("hidden");
    }
    return;
  }

  const articlesWithTags = [];
  for (const tag of searchTags) {
    articlesWithTags.push(...findArticlesWithTag(tag));
  }

  /**
   * use querySelectorAll to select all articles
   * iterate over them in a for loop
   * check if articlesWithTags array does not include the current article being iterated over,
   * then add "hidden" to that article's classList
   * else, remove "hidden" from that article's classList
   */
  // write your code here
  for (const article of document.querySelectorAll("article")) {
    if(!articlesWithTags.includes(article)) { 
      article.classList.add("hidden");
    } else {
      article.classList.remove("hidden");
    }
  }
}

/**
 * Creates a clickable tag button for a given search term (text). When clicked,
 * the button will remove the corresponding tag from both the DOM and the searchTags array.
 * This function also calls hideArticles to update the articles displayed after removal.
 * 
 * The code I wrote creates a button using the tag the user discovered. Once the user clicks
 * the button, it will remove the button from the search area. 
 */
function createTag(text) {
  /**
   * create a new element called button
   * add the class "tag" to its classList
   * set the button's textContent property to text (the passed in argument)
   */
  // write your code here
  const button = document.createElement("button");
  button.classList.add("tag");
  button.textContent = text;

  function remove() {
    button.remove();
    const index = searchTags.indexOf(text);
    if (index !== -1) {
      searchTags.splice(index, 1);
    }

    hideArticles();
  }

  /**
   * add a click event listener to the button, and set the listener to the remove function.
   * return the button element 
   */
  // write your code here
  button.addEventListener("click", remove);
  return button;
}


/*
 The findArticlesWithTag function creates an empty array called articles first iterates through the article's
 tages to see and checks if the content of the tag matches with what the user inputed. If it does, it will add
 to the empty articles array and break the loop to avoid adding the same article again. The sanitizedPhrase checks 
 if the user inputted a phrase with lowercase or uppercase letters. It will then lowercase the tag to make the comparison
 easier. 
*/
function findArticlesWithTag(phrase) {
  const articles = [];
  const sanitizedPhrase = phrase.toLowerCase().trim();
  for (const tl of tagLists) {
    const tags = Array.from(tl.querySelectorAll("li"));
    for (const tag of tags) {
      if (tag.textContent.toLowerCase().trim() === sanitizedPhrase) {
        articles.push(tl.parentElement);
        break;
      }
    }
  }

  return articles;
}

/*
  The addSearchTerm function will use the text from the createTag function (creates button) and add (append child)it to the
  parent element. It will then push the text to the searchTags's array and call the hide articles function
  to see what should be hidden or revealed.
*/
function addSearchTerm(text) {
  parentElement.appendChild(createTag(text));
  searchTags.push(text);
  hideArticles();
}

// Handlers

/*
  The onSearch function is checking if the button pressed was the enter key. If the enter key was pressed,
  it will trigger the addSearchTerm to put the input value to a button and reset the search bar to be empty.
*/

function onSearch(event) {
  const input = event.currentTarget;
  /**
   * If event.key equals "Enter":
   * call addSearchTerm and pass the input element's value
   * set input value to an empty string
   */
  // write your code here
  if (event.key === "Enter") {
    addSearchTerm(input.value);
    input.value = "";
  }
}

// Main function
/*
  The main function will call on the initialize search function to look at what the user
  has search. Basically, it will begin the program.
*/
function main() {
  initializeSearch(document.querySelector("#searched-tags"));

  document
    .querySelector("input[type=search]")
    .addEventListener("keypress", onSearch);
}

// Execute main function
main();

/**
 * Order of execution for each event:
 * Pressing Enter: 
 * Clicking to Remove a Tag: 
 * Loading the Page: 
 */