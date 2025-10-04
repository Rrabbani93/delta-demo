 function Header() {
      return(
        <div className="Header">
          <img  id="logo" src="https://cdn.iconscout.com/icon/free/png-512/free-myntra-icon-svg-download-png-2249158.png?f=webp&w=512"/>
          <div className="options" >
              <button  id="H_btn" >Men</button>
              <button id="H_btn">Women</button>
              <button id="H_btn">Kids</button>
              <button id="H_btn">HomeandLiving</button>
              <button id="H_btn">Beauty</button>
              <button id="H_btn">Studio</button>
          </div>
          <input  id="H_search" type="text"  placeholder="order your favourite dish"/>

          <div className="Headerlast">
            <button>Profiles</button>
            <button>Whishlist</button>
            <button>Bag</button>

          </div>

        </div>
      )

    }    
    export default Header;