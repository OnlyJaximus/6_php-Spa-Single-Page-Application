class DB {


 

  static getAll(){
    return new Promise((resolve, reject)=>{
        // Ajax Call
          let xml =  new XMLHttpRequest();
          xml.onreadystatechange = () => {
            if(xml.readyState == 4 &&  xml.status == 200){
            //xml.responseText     //rezultat ce biti u  xml.responseText
             //console.log(xml.responseText);   //dobili smo podatke u obliku JSON, i sada ga pretvaramo u data type koji JS razume a to je Array
              
            //console.log(JSON.parse(xml.responseText));
             resolve(JSON.parse(xml.responseText));
            }
          }

          //get_data.php -> stranica koja nam obezbedjuje komunikaciju sa bazom podataka
          xml.open('GET','get_data.php');
          xml.send();
    })
  }

  static save(newAccount){
    return new Promise((resolve, reject)=>{
          let xml =  new XMLHttpRequest();
          xml.onreadystatechange = () => {
            if(xml.readyState == 4 &&  xml.status == 200){
              //xml.responseText
        //      console.log(JSON.parse(xml.responseText));
          //      console.log(xml.responseText);
        //      resolve(JSON.parse(xml.responseText));
                resolve(xml.responseText);
            }
          }
          xml.open('POST','save_data.php');
          xml.setRequestHeader('Content-type', 'application/json');
          xml.send(JSON.stringify(newAccount));
    })

  }
}
