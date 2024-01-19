function possiblyPerfect(key,answers) {
    let perfect = [];
      
    for(let i=0; i<answers.lenght;i++)
    {
        if(key[i] != "_"){
           perfect.push(answers[i] == key[i]);
        }
    }
      console.log(perfect);
      return perfect.every((e)=>e == true)||perfect.every((e)=>e == false);
  }
  console.log( possiblyPerfect([..."A_C_B"],[..."ADCEB"]), true);
  console.log( possiblyPerfect([..."B_B"],[..."BDC"]), false);
  console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]));
  console.log( possiblyPerfect([..."BA__"],[..."BACC"]));
  console.log( possiblyPerfect([..."ABA_"],[..."BACC"]));
  console.log( possiblyPerfect([..."ABC_"],[..."BACC"]),);
  console.log( possiblyPerfect([..."B_"],[..."CA"]));
  console.log( possiblyPerfect([..."BA"],[..."CA"]),);
  console.log( possiblyPerfect([..."B"],[..."B"]));
  console.log( possiblyPerfect([..."_T__"],[..."TFFF"]));
  console.log( possiblyPerfect([..."_T__"],[..."TTFT"]));
  console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]));
  console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]));
  console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]));
  console.log( possiblyPerfect([..."____"],[..."FFFF"]));