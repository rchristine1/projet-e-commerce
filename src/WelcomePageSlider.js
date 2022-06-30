import React from 'react';
export default function Slider() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://th.bing.com/th/id/R.ee0b8a90c8ec8f038d58f160211936e8?rik=3CWsg8y4vgK6%2fw&pid=ImgRaw&r=0" 
            className="d-block w-100" height="300px" alt="S'évader vers l'horizon" />
        </div>
        <div className="carousel-item">
          <img src="https://th.bing.com/th/id/R.ab1c3ef3557cc15b0947a1221deea2f1?rik=NNgDaeta3u%2bKtQ&riu=http%3a%2f%2fs1.1zoom.me%2fbig3%2f218%2f430121-Kycb.jpg&ehk=gW%2bPS0PCSapMRZKTnugLNd6RKY1HWAbh%2bI%2ba7g9SciA%3d&risl=&pid=ImgRaw&r=0" 
          className="d-block w-100" height="300px" alt="Toujours plus loin" />
        </div>
        <div className="carousel-item">
          <img src="https://th.bing.com/th/id/R.775207ea4c11bae41f92e357cf8fe982?rik=fzh1zKkJx%2bNukw&riu=http%3a%2f%2fimages.toucharger.com%2fimg%2fgraphiques%2ffonds-d-ecran%2fnature-paysages%2fcoucher-de-soleil%2fcoucher-de-soleil.74111.jpg&ehk=8HbQkernJ16n8a7YLNihDeOB9xksGQzaJdK8TyFS3FQ%3d&risl=&pid=ImgRaw&r=0" 
            className="d-block w-100" height="300px" alt="Ciel" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}