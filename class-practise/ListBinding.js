class ListBinding {
    // keep a physical referrence to ul element
    constructor (element) {
        this.listElement = element;
        this.textList = [];
    }   

    // makes an <li></li> element/tags
    static createListItem(text) {
        const li = document.createElement("li");

        li.textContent = text;

        return li;
    }

    update () {
        // remove all existing <li> element/tags
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }

        // fill <ul>/<ol> with <li>

        for (const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }

    add (text) {
        this.textList.push(text);
        this.update();
    }

    remove (index) {
        this.textList.splice(index, 1);
        this.update(); 
    }
     
}