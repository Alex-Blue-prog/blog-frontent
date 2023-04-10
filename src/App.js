import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>

      <div style={{marginTop: "-20px"}}>
        
        <div className="post">
          <div className="image">
            <img src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" alt="" />
          </div>
          <div className="texts">
            <h2>Full-house battery backup coming later this year</h2>
            <p className="info">
              <a className="author" href="">Dawid Paszko</a>
              <time>2023-01-06 16:45</time>
            </p>
            <p className="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima doloribus libero perspiciatis animi dolor quasi.</p>
          </div>
        </div>
        
        <div className="post">
          <div className="image">
            <img src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" alt="" />
          </div>
          <div className="texts">
            <h2>Full-house battery backup coming later this year</h2>
            <p className="info">
              <a className="author" href="">Dawid Paszko</a>
              <time>2023-01-06 16:45</time>
            </p>
            <p className="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima doloribus libero perspiciatis animi dolor quasi.</p>
          </div>
        </div>

        <div className="post">
          <div className="image">
            <img src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" alt="" />
          </div>
          <div className="texts">
            <h2>Full-house battery backup coming later this year</h2>
            <p className="info">
              <a className="author" href="">Dawid Paszko</a>
              <time>2023-01-06 16:45</time>
            </p>
            <p className="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima doloribus libero perspiciatis animi dolor quasi.</p>
          </div>
        </div>

      </div>


    </main>
  );
}

export default App;
