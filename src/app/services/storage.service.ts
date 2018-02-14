export class StorageService {

    setItem(itemsArr){
        localStorage.setItem("items", JSON.stringify(itemsArr));
    }

    getData(){
        return localStorage.getItem("items");
    }
}