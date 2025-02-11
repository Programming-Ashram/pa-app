class Header{
    constructor(){
        let logo;
        let address;
    }

    getLogo(){
        return this.logo;
    }

    setLogo(logo){
        this.logo = logo;
    }

    getAddress(){
        return this.address;
    }

    setAddress(address){
        this.address = address;
    }
}

export default Header;