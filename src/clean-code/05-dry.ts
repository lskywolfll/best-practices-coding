
type Size = ''|'S'|'M'|'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}
    
    toString(){
        // if(this.name.length <= 0) throw Error('name is empty');
        // if(this.price <= 0) throw Error('price is empty');
        // if(this.size.length <= 0) throw Error('size is empty');

        for (const key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                const value = this[key];
                if(!value){
                    throw Error(`${key} is empty`);
                }
            }
        }

        return `${this.name} (${this.price}), ${this.size}`;
    }

}

(() => {
    const bluePants = new Product('Blue Large Pants', -1, 'M');
    console.log(bluePants.toString());
})();