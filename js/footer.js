const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="img/light-logo.png" alt="" class="logo">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">Shoes</a></li>
                    <li><a href="#" class="footer-link">causuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">Shoes</a></li>
                    <li><a href="#" class="footer-link">causuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">about company</p>
        <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita dolorem distinctio
            ex harum voluptas maxime quidem eaque consectetur rerum dolor, iusto blanditiis. Voluptate magnam maxime
            earum. Eius, eveniet. Corporis minus, libero rem iste quae odio reprehenderit officia nesciunt! Maxime,
            qui repellat odio ex quod praesentium voluptas quam nemo fugit alias suscipit eius magnam, iste non.
            Assumenda perferendis vel a, ea consequuntur explicabo non veniam. Corrupti suscipit quo adipisci illo
            quasi vel maiores quas, unde odit ea commodi error autem quod nihil magni repudiandae architecto,
            excepturi sed sint reprehenderit quam, culpa sunt itaque? Accusantium, molestias iure? Nesciunt repellat
            eaque omnis?</p>
            <p class="info">support emails - help@clothing.com,
                customersupport@clothing.com
            </p>
            <p class="info">telephone - 180 00 00 001, 180 00 00 02</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & sevices</a>
                    <a href="#" class="social-link">privacy page</a>
                </div>
                <div>
                    <a href="#" class="social-link">instagram</a>
                    <a href="#" class="social-link">Twitter</a>
                    <a href="#" class="social-link">facebook</a>
                </div>
            </div>
            <p class="footer-credit">Clothing, Best apparels online store</p>`;
}

createFooter();