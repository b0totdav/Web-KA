function possiblyPerfect(key,answers) {
    let perfect = [];
      
    for(let i=0; i<answers.length;i++)
    {
        if(key[i] != "_"){
           perfect.push(answers[i] == key[i]);
        }
    }
      console.log(perfect);
      return perfect.every((e)=>e == true)||perfect.every((e)=>e == false);
  }