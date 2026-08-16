
function calculateTaxdeduction(grossSalary: number) {
    //nssf
    let nssf: number;

    if (grossSalary <= 9000) {
        nssf = grossSalary * 0.06;

    } else if (grossSalary <= 108000) {
        let tier1 = 9000 * 0.06;
        let tier2 = (grossSalary - 9000) * 0.06;
        nssf = tier1 + tier2;
    } else {
        nssf = 6480;
    }


    //shif
    let shif: number = grossSalary * 0.0275;

    //housing levy

    let housinglevy: number = grossSalary * 0.015;

    //PAYE
    let taxableIncome: number = grossSalary - nssf;
    let payeBeforeRelief: number;

    if (taxableIncome <= 24000) {
        payeBeforeRelief = taxableIncome * 0.10;

    } else if (taxableIncome <= 32333) {
        payeBeforeRelief = (24000 * 0.10) + ((taxableIncome - 24000) * 0.25);

    } else if (taxableIncome <= 500000) {
        payeBeforeRelief =
            (24000 * 0.10) +
            (8333 * 0.25) +
            ((taxableIncome - 32333) * 0.30);

    } else if (taxableIncome <= 800000) {
        payeBeforeRelief =
            (24000 * 0.10) +
            (8333 * 0.25) +
            (467667 * 0.30) +
            ((taxableIncome - 500000) * 0.325);

    } else {
        payeBeforeRelief =
            (24000 * 0.10) +
            (8333 * 0.25) +
            (467667 * 0.30) +
            (300000 * 0.325) +
            ((taxableIncome - 800000) * 0.35);
    }
    //personal relief

    let personalrelief: number = 2400;
    let paye = payeBeforeRelief - personalrelief;

    if (paye < 0) {
        paye = 0;
    }

    let totaldeductions = nssf + shif + housinglevy + paye;
    let netsalary = grossSalary - totaldeductions;

    return {
        nssf: Math.round(nssf * 100) / 100,
        shif: Math.round(shif * 100) / 100,
        housinglevy: Math.round(housinglevy * 100) / 100,
        paye: Math.round(paye * 100) / 100,
        totaldeductions: Math.round(totaldeductions * 100) / 100,
        netsalary: Math.round(netsalary * 100) / 100
    };


}

const button = document.getElementById("calcbtn");
const clearbutton = document.getElementById("clearbtn")
const resultDiv = document.getElementById("result");
const salaryinput = document.getElementById("salaryinput") as HTMLInputElement;

if (button && resultDiv && salaryinput) {
    button.addEventListener("click", () => {
        let rawvalue=salaryinput.value.replace(/,/g, "");
        let grossSalary: number = Number(rawvalue);
        if (grossSalary <= 0 || isNaN(grossSalary)) {
            resultDiv.innerHTML = '<p class="error"> Please enter a Valid salary greater than 0.</p>';
            return;
        }

        let result = calculateTaxdeduction(grossSalary);

        resultDiv.innerHTML = `
      <p>NSSF: KES ${result.nssf.toLocaleString()}</p>
      <p>SHIF: KES ${result.shif.toLocaleString()}</p>
      <p>Housing Levy: KES ${result.housinglevy.toLocaleString()}</p>
      <p>PAYE: KES ${result.paye.toLocaleString()}</p>
      <p>Total Deductions: KES ${result.totaldeductions.toLocaleString()}</p>
      <p><strong>Net Salary: KES ${result.netsalary.toLocaleString()}</strong></p>
    `;
    });
}

if (clearbutton && resultDiv && salaryinput) {
    clearbutton.addEventListener("click", () => {
        salaryinput.value = "";
        resultDiv.innerHTML = "";
    });
}
if(salaryinput && button){
    salaryinput.addEventListener("keydown", (event) => {
        if(event.key === "Enter"){
            button.click();

        }
    });

}

if(salaryinput){
    salaryinput.addEventListener("blur", () => {
        let rawvalue=salaryinput.value.replace(/[^0-9]/g, "");
        let num=Number(rawvalue);

        if(!isNaN(num) && rawvalue !== ""){
            salaryinput.value=num.toLocaleString();
        }else{
            salaryinput.value="";
        }
    });
}