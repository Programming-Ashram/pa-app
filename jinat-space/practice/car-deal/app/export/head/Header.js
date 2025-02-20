class Header{
    constructor(){
        let logo;
        let register;
    }
  
      getLogo(){
          return this.logo;
      }
  
      setLogo(logo){
          this.logo = logo;
      }
      getRegister(){
        return this.register;
    }

    setRegister(register){
        this.register = register;
    }
      getSearch(){
          return this.search;
      }
  
      setSearch(search){
          this.search = search;
      }
  }

  export default Header;