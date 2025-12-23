async function getProduct() {
    try{
        const res= await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        const productsList = document.getElementById("productRow");

        data.forEach(element => {
            const d = document.createElement("div");
            d.classList.add("col-4", "p-2");

            d.innerHTML=`
                <div class="card  rounded shadow p-3">
                    <div class="rounded-top-3 h-50">
                        <img src=${element.image} alt=${element.title} class="w-100 h-100 object-fit-contain rounded">
                    </div>
                    <div class="h-50 p-2">
                        <div class="fw-bold fs-5">${element.title.length>50?element.title.slice(0,45)+"...":element.title}</div>
                        <div class="fw-semibold fs-5">${element.rating.rate}/5 (${element.rating.count})</div>
                        <div class="fw-semibold fs-5">₹${element.price*100}</div>
                        <div class="mb-2">
                            ${element.description.slice(0,50)}...
                        </div>
                        <div class="mt-2 d-flex justify-content-center gap-3">
                            <button class="btn btn-outline-primary">Add to Cart</button>
                            <button class="btn btn-secondary">Buy Now</button>
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