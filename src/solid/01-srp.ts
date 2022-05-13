(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        //injeccion de dependencias
        constructor(private productService: ProductService, private mailerService: Mailer){}
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }
    
        notifyClients(correo: string) {
            this.mailerService.sendEmail([correo], "to-clients");
        }
    
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    
    }

    class Mailer{
        private masterEmail: string = "rene@google.com";

        sendEmail(emailList: string[], template: 'to-clients'|'to-admins'){
            console.log('Enviando correo a los clientes', template);
            console.log("emails: ", emailList);
            console.log("masterEmail: ", this.masterEmail);
        }
    }

    class ProductService {
        
        getProduct(id: number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }
    
    class CartBloc{

        private itemInCart: number[] = [];
        
        addToCart(productId: number){
            this.itemInCart.push(productId);
        }
    }

    const mailService = new Mailer();
    const productService = new ProductService();
    const productBloc = new ProductBloc(productService, mailService);
    const cartBloc = new CartBloc();
    const idProduct = 10;

    productBloc.loadProduct(idProduct);
    productBloc.saveProduct({ id: idProduct, name: 'OLED TV' });
    productBloc.notifyClients("josesito@gmail.com");
    cartBloc.addToCart(idProduct);








})();