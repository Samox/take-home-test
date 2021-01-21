export class Drug {
    constructor(name, expiresIn, benefit) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }
}

export class Pharmacy {
    constructor(drugs = []) {
        this.drugs = drugs;
    }

    updateBenefitValue() {
        var exclude = ["Magic Pill"];
        for (var i = 0; i < this.drugs.length; i++) {
            if (exclude.indexOf(this.drugs[i].name) == -1) {

                if (this.drugs[i].name != "Herbal Tea" && this.drugs[i].name != "Fervex") {
                    if (this.drugs[i].benefit > 0) {

                        this.drugs[i].benefit = Math.max(0, this.drugs[i].name != "Doliprane" ?
                            this.drugs[i].benefit - 1 :
                            this.drugs[i].benefit - 2);
                    }
                } else {
                    if (this.drugs[i].benefit < 50) {

                        this.drugs[i].benefit++;

                        if (this.drugs[i].name == "Fervex") {

                            if (this.drugs[i].expiresIn < 11 && this.drugs[i].benefit < 50)
                                this.drugs[i].benefit++;


                            if (this.drugs[i].expiresIn < 6 && this.drugs[i].benefit < 50)
                                this.drugs[i].benefit++;

                        }
                    }
                }

                this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;

                if (this.drugs[i].expiresIn < 0) {
                    if (this.drugs[i].name != "Herbal Tea") {
                        if (this.drugs[i].name != "Fervex" && this.drugs[i].benefit > 0) {

                            this.drugs[i].benefit = Math.max(0, this.drugs[i].name != "Doliprane" ?
                                this.drugs[i].benefit - 1 :
                                this.drugs[i].benefit - 2);

                        } else
                            this.drugs[i].benefit = 0;


                    } else {
                        if (this.drugs[i].benefit < 50)
                            this.drugs[i].benefit++;
                    }
                }
            }
        }
        return this.drugs;
    }
}