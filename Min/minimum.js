function Min(tomb,IoV)
{
    let lowestValue=1.7976931348623157e+308;
    let lowestIndex=1.7976931348623157e+308;

    if(IoV  == "ertek")
    {
        for(let szam in tomb)
        {
            if(tomb[szam]<lowestValue)
            {
                lowestValue=tomb[szam];
            }
        }
        console.log(lowestValue);
    }else
    {
        for(let szam in tomb)
        {
            if(tomb[szam]<lowestValue)
            {
                lowestIndex=szam;
            }
        }
        console.log(lowestIndex);
    }
}