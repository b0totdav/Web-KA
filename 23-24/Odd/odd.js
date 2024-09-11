function Osszeg(tomb)
{
    let osszeg=0;
        for(let szam in tomb)
        {
            if(tomb[szam]%2!=0)
            {
                osszeg+=tomb[szam];
            }
        }
        console.log(osszeg);

}