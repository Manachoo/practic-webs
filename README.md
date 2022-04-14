# practic-webs
templates created for practice

    <div class="grid__container">
      <div class="services__container">
        <div class="services__content">
          <img src="https://picsum.photos/600/400" alt="" class="grid__item" />
          <span class="button button__flex services__button">
            View More
            <i class="uil uil-arrow-right button_icon"></i>
          </span>
          <div class="services__modal">
            <div class="services__modal_content">
              <div class="imagen">
                <img
                  src="https://picsum.photos/600/400"
                  alt=""
                  class="grid__item"
                />
              </div>
              <h4 class="services__modal_title">asdasd</h4>
              <p>asjdasdasdasdasd</p>
              <i class="uil uil-times services__modal_close"></i>
            </div>
          </div>
          <div class="services__modal">
            <div class="services__modal_content">
              <div class="imagen">
                <img
                  src="https://picsum.photos/600/400"
                  alt=""
                  class="grid__item"
                />
              </div>
              <h4 class="services__modal_title">asdasd</h4>
              <p>asjdasdasdasdasd</p>
              <i class="uil uil-times services__modal_close"></i>
            </div>
          </div>
          <div class="services__modal">
            <div class="services__modal_content">
              <div class="imagen">
                <img
                  src="https://picsum.photos/600/600"
                  alt=""
                  class="grid__item"
                />
              </div>
              <h4 class="services__modal_title">asdasd</h4>
              <p>asjdasdasdasdasd</p>
              <i class="uil uil-times services__modal_close"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

  .button{
    display: inline-block;
    background-color: red;
    color: #fff;
    padding: 1rem;
    border-radius: .5rem;
    font-weight: var(--fontMedium);
    transition: .5s;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
}
.button_flex{
    display: inline-flex;
    align-items: center;
}
.services__container{
    gap: 1.5rem;
    grid-template-columns: repeat(2 , 1fr);
}
.services__content{
    position: relative;
    background-color: var(--containerColor);
    padding: 3.5rem .5rem 1.25rem 1.5rem;
    border-radius: .5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,.15);
    transition: .4s;
}
.services__content:hover{
    box-shadow: 0 4px 8px rgba(0,0,0,.15);
}
.services__icon{
    display: block;
    font-size: 1.5rem;
    color: var(--firstColor);
    margin-bottom: .75rem;
}
.services__title{
    font-size: var(--h3FontSize);
    margin-bottom: var(--mb1);
    font-weight: var(--fontMedium);
    color: black;
}
.services__button{
    cursor: pointer;
    font-size: var(--smallFontSize);
}
.services__modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    z-index: var(--zModal);
    opacity:0;
    visibility: hidden;
    transition: .4s;
}
.services__modal_content{
    position: relative;
    background-color: white;
    padding: 1.5rem;
    border-radius: .5rem;
    display: grid;
    grid-template-columns: repeat(3, .5fr 1fr .5fr);
}
.services__modal_servics{
    row-gap: 1rem;
}
.services__modal_service{
    display: flex;
    color: rgba(0,0,0,.5);
}
.services__modal_title{
    font-size: medium;
    font-weight: bold;
    margin: .15rem;
    color: rgba(0,0,0);
}
.services__modal_close{
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    color: var(--firstColor);
    cursor: pointer;
}
.services__modal_icon{
    color: black;
    margin-right: .25rem;
}
.imagen{
    width: 100%;
    z-index: 1;
}
.button:hover{
    transform: translateX(.25rem);
    background-color: var(--firstColorAlt);
}
/*dom*/
.active_modal{
    opacity: 1;
    visibility: visible;
}
