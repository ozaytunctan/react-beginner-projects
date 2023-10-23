import React from "react";

function Header({increment}) {
    console.log("Header Component Re-rendered")
    return (
        <div>
            <div>Header -</div>
            {/*<div>Header ({data.counter})</div>*/}
            {/*<code>*/}
            {/*    {JSON.stringify(data)}*/}
            {/*</code>*/}
            <button onClick={increment}>Click</button>
        </div>

    )
}


//Çağrıldığı yerde eğer porp ları değişirse o zaman render et yoksa etme. Bu yüzden çağrıldığı yerde herhangi bir pro değişirse otomatik render oluyor du
//React.memo olursa sadece kendi proplar değişirse tekrar render et.
export default React.memo(Header);