var shoppingFormEl = $("#shopping-form");
var shoppingListEl = $("#shopping-list");

function handleFormSubmit(event) {
    event.preventDefault();

    var shoppingItem = $('input[name="shopping-input"]').val();

    if (!shoppingItem) {
        console.log("No shopping item filled out in form!");
        return;
    }
    //here shoppingItem has the item name

    var shoppingListItemEl = $(
        //this line below creates element with css class attributes
        '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
    );
    //add text to our list element
    shoppingListItemEl.text(shoppingItem);

    // add delete button to remove shopping list item
    shoppingListItemEl.append(
        //button is inside list item since we appended it to list item
        //neither is displayed yet
        '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
    );

    // print to the page
    //this finally appends created list item to ul shopping list thus showing up
    shoppingListEl.append(shoppingListItemEl);

    // clear the form input element
    $('input[name="shopping-input"]').val("");
}

// TODO: Create a function to handle removing a list item
//when `.delete-item-btn` is clicked

function deleteItem(event) {
    //since the button is inside the list item
    //we can delete the parent of that delete button!!!
    //so it deletes that particular list item

    var btnClicked = $(event.target);

    btnClicked.parent("li").remove();
}

// TODO: Use event delegation and add an event listener
//to `shoppingListEl` to listen for a click event on any
//element with a class of `.delete-item-btn` and execute the
// function created above

shoppingListEl.on("click", deleteItem);

shoppingFormEl.on("submit", handleFormSubmit);
