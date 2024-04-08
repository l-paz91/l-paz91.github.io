/* ------------------------------------------------------------------------- */

let money = 0;
let moneyPerOrder = 1;
let upgradeCost = 50;

let pullEspressoPercentageDone = 0;
let steamMilkPercentageDone = 0;
let foamMilkPercentageDone = 0;

/* ------------------------------------------------------------------------- */



/* ------------------------------------------------------------------------- */

document.getElementById('pullEspressoBtn').addEventListener('click', function() {
    ++pullEspressoPercentageDone;
    document.getElementById('pullEspressoPercentageDone').innerText = `${pullEspressoPercentageDone}%`;
});

/* ------------------------------------------------------------------------- */

document.getElementById('steamMilkBtn').addEventListener('click', function() {
    ++steamMilkPercentageDone;
    document.getElementById('steamMilkPercentageDone').innerText = `${steamMilkPercentageDone}%`;
});

/* ------------------------------------------------------------------------- */

document.getElementById('foamMilkBtn').addEventListener('click', function() {
    ++foamMilkPercentageDone;
    document.getElementById('foamMilkPercentageDone').innerText = `${foamMilkPercentageDone}%`;
});

/* ------------------------------------------------------------------------- */