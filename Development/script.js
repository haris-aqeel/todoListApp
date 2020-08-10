var count = 0;
var allItems = [];

class todoListItems{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    storeData(){
        allItems.push({
            item_id : this.id,
            item_name : this.name
        })
    }

    creationListItems() {
        
        
    }

    displayListItem() {
        

        allItems.forEach((element)=> {

        let selectedUnorderedList = document.querySelector('.listOfItems');
        selectedUnorderedList.insertAdjacentHTML('afterbegin', "<li class='individualItem' id ="+element.item_id+">"+ element.item_name +"<span class='icons '><button class= 'cross' onclick='singleItemActions("+element.item_id+")'>&#10060;</button><button>&#x270E;</button></span></li>");
           
        })
    }

    removeAllElements(){
        let selectedUnorderedList = document.querySelector('.listOfItems');
        selectedUnorderedList.remove();
    }

   

}





function addItem(e) {
    e.preventDefault();
    count++;
    var myObj = {
        ID : 'itemNumber' + count,
        Name : document.getElementById('Items').value
    };
    
    window.todoListApp = new todoListItems(myObj.ID, myObj.Name);
    todoListApp.storeData();
    todoListApp.displayListItem();
}

function singleItemActions(x){
    //Cross
    
        let lengthOfAllItems = allItems.length;
        for (let i = 0; i< lengthOfAllItems; i++){
            new1Id = allItems[i].item_id;
            new2Id=  x.id;
             if(new1Id == new2Id){
                 allItems.splice(i, 1);
                 i --;
                 break;
             }
        }
        window.todoListApp.removeAllElements();   
        window.todoListApp.displayListItem();
}