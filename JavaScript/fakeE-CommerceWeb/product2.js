async function getProduct() {
    try{
        const res= await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        const productsList = document.getElementById("productRow");

        data.forEach(element => {
            const d = document.createElement("div");
            d.classList.add("row", "p-2", "col-12");

            d.innerHTML=`
                <div class="card rounded shadow p-3 d-flex row gap-4">
                    <div class="col-3 p-2 h-100">
                        <div class="rounded-start-3 h-100">
                            <img src=${element.image} alt=${element.title} class="w-100 h-100 object-fit-contain rounded">
                        </div>
                    </div>
                    <div class="col-9 p-4 h-100">
                        <div class="h-100 w-100 p-2">
                            <div class="fw-bold fs-2">${element.title}</div>
                            <div class="fw-semibold fs-5">${element.rating.rate}/5 (${element.rating.count})</div>
                            <div class="fw-semibold fs-5">₹${element.price*100}</div>
                            <div class="mb-2">
                                ${element.description}
                            </div>
                            <div class="d-flex justify-content-start gap-3 mt-5">
                                <button class="btn btn-outline-primary">Add to Cart</button>
                                <button class="btn btn-secondary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
            productsList.appendChild(d);
        });
    }catch(error){
        console.log(error.message);
    }
}
getProduct();