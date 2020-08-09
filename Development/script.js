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
            let x = document.querySelector('.itemsList');
            let l1 = document.createElement('li');//Update needs too be done
            x.appendChild(l1);
            l1.classList.add('item');
            let b1 = document.createElement("button");
            let b2 = document.createElement("button");
            b1.createTextNode('&#10060;');
            b2.createTextNode('&#x270E;');
            let sp1 = document.createElement("span");
            let sp2 = document.createElement("span");
            let y = document.createTextNode(element.item_name);
            l1.appendChild(y);
            l1.appendChild(sp1);
            l1.appendChild(sp2);
            
        })
    }
}





function addItem(e) {
    e.preventDefault();
    count++;
    let myObj = {
        ID : 'itemNumber' + count,
        Name : document.getElementById('Items').value
    };
    
    let todoListApp = new todoListItems(myObj.ID, myObj.Name);
    todoListApp.storeData();
    todoListApp.creationListItems();
    todoListApp.displayListItem();

}