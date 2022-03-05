class Menu {
    constructor(){
        this.restaurant = [];
     
    }
    start(){
        let selection = this.showMainMenuOptions();


        while (selection != 0){
            switch (selection){
                case '1':
                    this.addRestaurant();
                    break;
                case '2':
                    this.viewRestaurants();
                    break;
                case '3':
                    this.deleteRestaurant();
                    break;
    
                    default:
                        selection = 0;


            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

    showMainMenuOptions(){
        return prompt(`
            0) Exit
            1) Add new restaurant
            2) View restaurants
            3) Delete restaurant
            
        `);
    }

    addRestaurant(){
        let name = prompt('Enter name for new restaurant.');
        this.restaurant.push(new Restaurant(name));
    } 
        
    viewRestaurants(){
        let restString = '';
        for(let i = 0; i < this.restaurant.length; i++){
            restString += i + ') ' + this.restaurant[i].name + '\n';
        }
            alert(restString);
    }

    deleteRestaurant(){
        let index = prompt('Enter the index of the restaurant you would like to delete:');
        if (index > -1 && index < this.restaurant.length){
            this.restaurant.splice(index, 1);
        }
    }
    
}

class Restaurant{
    constructor(name){
        this.name = name;
     
    }
}
  

let menu = new Menu();
menu.start();