function getCategories() {
    const expenditureurl = "http://localhost:8080/income/expenditurecategories";
    const incomeurl = "http://localhost:8080/income/incomecategories";
    async function getapiIncome(incomeurl) {
        fetch(incomeurl, {
            method: "GET",
            mode: 'cors',
        }).then((response) => {
            if (!response.ok) {
                throw new Error(response.error)
            }
            return response.json();
        })
            .then(data => {
                console.log(data);
                var incomecategory=document.getElementById("incomecategory");
                var h4=document.createElement("h4");
                for(let i=0;i<data.length;i++){
                    h4=document.createElement("h4");
                    h4.innerHTML=data[i]['name'];
                    incomecategory.appendChild(h4);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    async function getapiExpenditure(expenditureurl) {
        fetch(expenditureurl, {
            method: "GET",
            mode: 'cors',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.error)
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                var incomecategory=document.getElementById("expenditurecategory");
                var h4=document.createElement("h4");
                for(let i=0;i<data.length;i++){
                    h4=document.createElement("h4");
                    h4.innerHTML=data[i]['name'];
                    incomecategory.appendChild(h4);
                }
            })
            .catch(function (error) {
                console.log(error);
                
            });
    }
    getapiIncome(incomeurl);
    getapiExpenditure(expenditureurl);
    // function showIncome(date){
    //     var h3=document.createElement("h3");
    //     incomediv=document.getElementById("incomecategory");
    //     for(let i=0;i<data.size();i++){
    //         h3.innerHTML=data[i][]
    //     }
    // }
}