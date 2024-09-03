document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('daftar-produk');
    const productForm = document.getElementById('form-produk');

    // Dummy data produk
    const products = [
        { name: 'Eternal Sunshine - Ariana Grande (Vinyl)', price: 300000, description: 'Dapatkan vinyl album Eternal Sunshine dari Ariana Grande dengan musik berkualitas tinggi!', image: 'ESvinyl.jpg' },
        { name: 'American Dreams - 21 Savage Album Vinyl', price: 450000, description: 'Dengarkan lagu-lagu dari album American Dreams oleh 21 Savage dengan kualitas yang nyaman di telinga Anda!', image: 'AmericanDreams.jpg' },
    ];

    // Fungsi untuk me-render produk ke halaman
    function renderProducts() {
        productList.innerHTML = '';
        products.forEach((product, _) => {
            const productCard = document.createElement('div');
            productCard.classList.add('col-md-4');
            productCard.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <img src="${product.image}" alt="${product.name}" class="card-img-top" />
                        <h5 class="card-title">${product.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Rp ${(product.price).toLocaleString('id-ID')}</h6>
                        <p class="card-text">${product.description}</p>
                    </div>
                </div>
            `;
            productList.appendChild(productCard);
        });
    }

    // A D D  N E W  P R O D U C T
    productForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const productName = document.getElementById('product-name').value;
        const productPrice = parseInt(document.getElementById('product-price').value);
        const productDescription = document.getElementById('product-description').value;
        const productImageFile = document.getElementById('product-image').files[0];

        if (productImageFile) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const newProduct = {
                    name: productName,
                    price: productPrice,
                    description: productDescription,
                    image: e.target.result // Menyimpan Data URL dari gambar yang diunggah
                };

                products.push(newProduct);
                renderProducts(); // Me-render produk setelah ditambahkan

                productForm.reset(); // Mereset form setelah submit
            };

            reader.readAsDataURL(productImageFile); // Membaca gambar sebagai Data URL
        } else {
            alert('Please upload an image.');
        }
    });

    renderProducts(); // Render awal
});
