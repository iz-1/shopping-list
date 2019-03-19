function addItem()
{
    let shopItem = $('#shopping-list-entry').val();
    if(shopItem != "")
        $('ul').append(`<li>
        <span class="shopping-item">${shopItem}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
            <span class="button-label">delete</span>
        </button>
        </div>
        </li>`)
}

$(function(){

    $('#shopping-list-entry').keyup(function(event){
        if(event.which()== 13)
            addItem();
    });

    $('form').submit(function(event){
        event.preventDefault();
        addItem();
    });    

    $('ul').on('click', 'button', function(event){
        event.stopPropagation();

        let buttonText = $(this).find('.button-label').text();

        if(buttonText === "check") {
            let shopitemObj = $(this).parent().prev();
            shopitemObj.hasClass("shopping-item__checked") ?
            shopitemObj.removeClass("shopping-item__checked") :
            shopitemObj.addClass("shopping-item__checked");
        } else if(buttonText === "delete") {
            $(this).parent().parent().remove();
        }         
    });
})