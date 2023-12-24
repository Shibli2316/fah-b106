// A mock function to mimic making an async request for data
export function fetchAllProducts(amount = 1) {
  return new Promise( async (resolve) => {
      const response = await fetch('http://localhost:8080/products');
      const data = await response.json();
      resolve({data});
    }
  );
}


export function fetchProductsByFilters(filter, sort) {

  // filter object
  let queryString ='';
  for (let key in filter){
    const categoryValue = filter[key];
    if(categoryValue.length){
      const lastCategoryvalue = categoryValue[categoryValue.length-1]
      queryString+=`${key}=${lastCategoryvalue}&`
    }
  }

  for(let key in sort){
    queryString+=`${key}=${sort[key]}&`
  }

  return new Promise( async (resolve) => {
      const response = await fetch('http://localhost:8080/products?'+queryString);
      const data = await response.json();
      resolve({data});
    }
  );
}