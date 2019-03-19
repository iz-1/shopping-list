$(function(){

    $('form').submit(function(event){
        event.preventDefault();
        //$('h1').text("button");
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
    });    

    $('ul').on('click', 'button', function(event){
        event.stopPropagation();

        let pressedButton = $(this).find('.button-label').text();

        if(pressedButton === "check")
        {
            let shopitemObj = $(this).parent().prev();
            //$(this).addClass("selected"); // change button

            shopitemObj.hasClass("shopping-item__checked") ?
            shopitemObj.removeClass("shopping-item__checked") :
            shopitemObj.addClass("shopping-item__checked");
        }else if(pressedButton === "delete")
        {
            let listItem = $(this).parent().parent();
            listItem.remove();
        }         
    });
})