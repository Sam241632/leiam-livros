var motivos = [
    " deixam voce criativo",
    "te passam conhecimento",
    "te divertem",
    "voce fica disciplinado",
      ""
  ];
  
  var imagens = [ "https://m.media-amazon.com/images/I/41qjYPfAgcL.jpg",
    "https://m.media-amazon.com/images/I/81ALgAW3gHL._AC_UF1000,1000_QL80_.jpg",
    "https://cdn.kobo.com/book-images/1e5b9941-bbe5-4137-9709-5f87270608b8/1200/1200/False/la-sombra-de-la-serpiente-las-cronicas-de-los-kane-3.jpg","https://cdn10.bigcommerce.com/s-uocl08iaab/products/494/images/789/O_Poder_do_Hbito__21234.1661091948.500.750.png?c=2",         "https://img.travessa.com.br/livro/GR/22/22f5986d-0147-4669-aa24-86f8c8be20a7.jpg"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }
  
  