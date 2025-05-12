
interface Food {
    name : string;
    price : number; 
}

interface FoodCategory extends Food {
    FoodType : string
}

interface FoodCOuntry extends Food{
    Country : string
}

function getFood(SweetPotato: FoodCategory){
    SweetPotato.FoodType = 'Veg'
}