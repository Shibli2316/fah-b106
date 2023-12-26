// A mock function to mimic making an async request for data
export function fetchAllProducts(amount = 1) {
  return new Promise( async (resolve) => {
      const response = await fetch('http://localhost:8080/products');
      const data = await response.json();
      resolve({data});
    }
  );
}


export function fetchProductsByFilters(filter) {

  // filter object
  let queryString ='';
  for (let key in filter){
    queryString+=`${key}=${filter[key]}&`
  }
<<<<<<< HEAD

  for(let key in sort){
    queryString+=`${key}=${sort[key]}&`
  }
  
  for(let key in pagination){
    queryString+=`${key}=${pagination[key]}&`
  }

=======
>>>>>>> parent of 720994d (updated filters and products)
  return new Promise( async (resolve) => {
      const response = await fetch('http://localhost:8080/products?'+queryString);
      const data = await response.json();
      resolve({data});
    }
  );
}
