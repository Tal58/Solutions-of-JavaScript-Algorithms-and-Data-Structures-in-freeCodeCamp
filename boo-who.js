function booWho(bool) {
  if ((bool ==true)||(bool==false)){
     if (typeof bool == "number"){
            return false
        }
    return true
  }else{
    return false
  }
}

booWho(null);