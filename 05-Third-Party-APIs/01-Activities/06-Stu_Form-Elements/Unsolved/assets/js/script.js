var shoppingFormEl = $("#shopping-form");
var shoppingListEl = $("#shopping-list");
var inputText = $("#shopping-input");
// TODO: Create a function to handle the form submission event that captures the form's
//`<input>` value and prints it to the `shoppingListEl` as a `<li>`

function handleFormSubmit(event) {
    event.preventDefault();
    var listItem = $("<li>");
    if (!inputText.val()) {
        console.log("No shopping items fill out.");
        return;
    }
    listItem.text(inputText.val());

    shoppingListEl.append(listItem);

    //clear input
    inputText.val("");
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on("submit", handleFormSubmit);
