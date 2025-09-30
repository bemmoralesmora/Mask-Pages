import "./home.css";

export function Home() {
  return (
    <section className="home">
      {/* Header con búsqueda */}
      <header className="home-header">
        <div className="search-container">
          <span className="search-icon">{/* Icono de búsqueda */}</span>
          <input
            type="text"
            placeholder="Search for books"
            className="search-input"
          />
        </div>
        <button className="search-button">search</button>
        <div className="cart-icon">
          {/* Icono de carrito */}
          <span className="cart-badge">0</span>
        </div>
      </header>

      {/* Categorías */}
      <nav className="categories">
        <div className="category-item">
          <div className="category-icon">{/* Icono All */}</div>
          <span className="category-label">All</span>
        </div>
        <div className="category-item">
          <div className="category-icon">{/* Icono eBooks */}</div>
          <span className="category-label">eBooks</span>
        </div>
        <div className="category-item">
          <div className="category-icon">{/* Icono Plays */}</div>
          <span className="category-label">Plays</span>
        </div>
        <div className="category-item">
          <div className="category-icon">{/* Icono Bestsellers */}</div>
          <span className="category-label">Bestsellers</span>
        </div>
        <div className="category-item">
          <div className="category-icon">{/* Icono Audiobooks */}</div>
          <span className="category-label">Audiobooks</span>
        </div>
        <div className="category-item">
          <div className="category-icon">{/* Icono Fiction */}</div>
          <span className="category-label">Fiction</span>
        </div>
        <div className="category-item">
          <div className="category-icon">{/* Icono Romance */}</div>
          <span className="category-label">Romance</span>
        </div>
        <div className="category-item">
          <div className="category-icon">{/* Icono Fantasy */}</div>
          <span className="category-label">Fantasy</span>
        </div>
        <div className="category-item">
          <div className="category-icon">{/* Icono Manga */}</div>
          <span className="category-label">Manga</span>
        </div>
        <div className="category-item">
          <div className="category-icon">{/* Icono Crime */}</div>
          <span className="category-label">Crime</span>
        </div>
      </nav>

      {/* Sección Popular */}
      <div className="section-header">
        <h2 className="section-title">Popular</h2>
        <div className="section-actions">
          <button className="view-all">View All</button>
          <button className="nav-arrow">{/* Flecha izquierda */}</button>
          <button className="nav-arrow">{/* Flecha derecha */}</button>
        </div>
      </div>

      {/* Carrusel de libros populares */}
      <div className="books-carousel">
        <div className="book-card">
          <div className="book-cover">
            {/* Imagen: Fairy Tale - Stephen King */}
          </div>
          <div className="book-rating">
            <span className="star">⭐</span>
            <span className="rating-text">4.5</span>
          </div>
          <h3 className="book-title">Fairy Tale</h3>
          <p className="book-author">Stephen King</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            {/* Imagen: Never After - Stephanie Garber */}
          </div>
          <div className="book-rating">
            <span className="star">⭐</span>
            <span className="rating-text">4.7</span>
          </div>
          <h3 className="book-title">Never After</h3>
          <p className="book-author">Stephanie Garber</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            {/* Imagen: Ikigai and the Sun - Kazuo Ishiguro */}
          </div>
          <div className="book-rating">
            <span className="star">⭐</span>
            <span className="rating-text">4.3</span>
          </div>
          <h3 className="book-title">Ikigai and the Sun</h3>
          <p className="book-author">Kazuo Ishiguro</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            {/* Imagen: Mist and Fury - Sarah J. Maas */}
          </div>
          <div className="book-rating">
            <span className="star">⭐</span>
            <span className="rating-text">4.8</span>
          </div>
          <h3 className="book-title">Mist and Fury</h3>
          <p className="book-author">Sarah J. Maas</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            {/* Imagen: Homme - Maggie O'Farrell */}
          </div>
          <div className="book-rating">
            <span className="star">⭐</span>
            <span className="rating-text">4.6</span>
          </div>
          <h3 className="book-title">Homme</h3>
          <p className="book-author">Maggie O'Farrell</p>
        </div>
      </div>

      {/* Sección de listas */}
      <div className="lists-section">
        <div className="list-card bestsellers">
          <div className="list-illustration">
            {/* Ilustración de libros apilados */}
          </div>
          <div className="list-content">
            <h3 className="list-title">
              2022 year 50 most popular Bestsellers
            </h3>
            <p className="list-description">
              List of the most interesting books of the year based on customers
              and critics reviews
            </p>
            <button className="view-button">View All</button>
          </div>
        </div>

        <div className="mini-lists">
          <div className="mini-list-item">
            <div className="mini-list-icon">
              {/* Icono libros para niños */}
            </div>
            <div className="mini-list-text">
              <h4>Top 50 books for kids</h4>
              <p>Picture books, board books, novels for youngsters</p>
            </div>
          </div>

          <div className="mini-list-item">
            <div className="mini-list-icon">{/* Icono libros clásicos */}</div>
            <div className="mini-list-text">
              <h4>Top 50 classic books</h4>
              <p>Explore the most influential books of classic literature</p>
            </div>
          </div>

          <div className="mini-list-item">
            <div className="mini-list-icon">{/* Icono libros sci-fi */}</div>
            <div className="mini-list-text">
              <h4>Top 50 Sci-fi books</h4>
              <p>Discover the best Sci-fi books from dystopian to space</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
