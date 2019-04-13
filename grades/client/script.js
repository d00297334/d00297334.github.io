//TESTING


//***** TEST 1 *****//
//takes in letter array and then returns values for each letter
let getLetterPointsTotal = function (letterArray) {
    let total = 0.0;
    for (let i=0; i < letterArray.length; i++) {
        if (letterArray[i] == 'A' || letterArray[i] == 'a') {
            total += 4.0
        }
        if (letterArray[i] == 'A-' || letterArray[i] == 'a-') {
            total += 3.7
        }

        if (letterArray[i] == 'B+' || letterArray[i] == 'b+') {
            total += 3.3
        }
        if (letterArray[i] == 'B' || letterArray[i] == 'b') {
            total += 3.0
        }
        if (letterArray[i] == 'B-' || letterArray[i] == 'b-') {
            total += 2.7
        }
        if (letterArray[i] == 'C+' || letterArray[i] == 'c+') {
            total += 2.3
        }
        if (letterArray[i] == 'C' || letterArray[i] == 'c') {
            total += 2.0
        }
        if (letterArray[i] == 'C-' || letterArray[i] == 'c-') {
            total += 1.7
        }
        if (letterArray[i] == 'D+' || letterArray[i] == 'd+') {
            total += 1.3
        }
        if (letterArray[i] == 'D' || letterArray[i] == 'd') {
            total += 1.0
        }
        if (letterArray[i] == 'F' || letterArray[i] == 'f') {
            total += 0.0
        }
        
    }
    console.log('total ', total);
    return total;
    
}
//***** END OF TEST 1 *****//




//***** TEST 2 *****//
//calculate average
let calculateGPA = function(letterArray) {
    var total = getLetterPointsTotal(letterArray);
    return Number(total / letterArray.length).toFixed(2);
}
//***** END OF TEST 2 *****//



//***** TEST 3 *****//
//get letter grade 0 - 100 percent
let getLetterGrade = function(pointsEarned, totalPoints) {
    var grade = pointsEarned / totalPoints;
    grade *= 100;
    Math.floor(grade);
    let letter = 'problem';
    console.log('grade ', grade);
    if (grade >= 94) {
        letter = 'A';
    }
    if (grade >= 90 && grade <= 93) {
        letter = 'A-';
    }
    if (grade >= 87  && grade <= 89) {
        letter = 'B+';
    }
    if (grade >= 84 && grade <= 86) {
        letter = 'B';
    }
    if (grade >= 80 && grade <= 83) {
        letter = 'B-';
    }
    if (grade >= 77 && grade <= 79) {
        letter = 'C+';
    }
    if (grade >= 74 && grade <= 76) {
        letter = 'C';
    }
    if (grade >= 70 && grade <= 73) {
        letter = 'C-';
    }
    if (grade >= 67 && grade <= 69) {
        letter = 'D+';
    }
    if (grade >= 64 && grade <= 66) {
        letter = 'D';
    }
    if (grade >= 60 && grade <= 63) {
        letter = 'D-';
    }
    if (grade >= 0 && grade <= 59) {
        letter = 'F';
    }
    //should override problem unless there is a problem
    console.log('letter grade ', letter);
    return letter;
}
//***** END OF TEST 3 *****//




const app = new Vue ({
    el: '#app',
    props: {
        index: Number
    },
    data: {
        name:'',
        grade:'',
        credits:'',
        showGPA: false,
        rows : [
            {
                name:this.name1,
                grade:this.grade1,
                credits:this.credits1,
            },
            {
                name:this.name2,
                grade:this.grade2,
                credits:this.credits2,
            },
            {
                name:this.name3,
                grade:this.grade3,
                credits:this.credits3,
            },
            {
                name:this.name4,
                grade:this.grade4,
                credits:this.credits4,
            },
            {
                name:this.name5,
                grade:this.grade5,
                credits:this.credits5,
            },
            {
                name:this.name6,
                grade:this.grade6,
                credits:this.credits6,
            },
        ],
        showUnweightedText: true,
        showCumulativeText: false, 
        showSemesterText: false,
        showUnweightedContainer: true,
        showSemesterContainer: false,
        showCumulativeContainer: false,
        number:'',
        credits1: '',
        
        credits2: '',
        credits3: '',
        credits4: '',
        
        credits5: '',
        credits6:'',
        name1:'',
        name2:'',
        name3:'',
        name4:'',
        name5:'',
        name6:'',
        
        grade1:'',
        grade2:'',
        grade3:'',
        grade4:'',
        grade5:'',
        grade6:'',
        red: false,
        yellow: false,
        green: false,

        gpa:'',
    },
    watch: {
        number(newVal, old) {
            console.log('new ', newVal);
            console.log('old', old);
        },
        numberMultiplied(n, o) {
            console.log(n);
        },
        addCredits(n, o) {
            console.log(n);
        },
        rows(val) {
            console.log("name0 ", val)
        }
    },
    computed: {
        numberMultiplied() {
            return this.number * 2;
        },
        calculateButton() {
            // console.log('name 1', this.name1)
            // for (let i = 0; i < this.rows.length; i++){
            //     console.log(this.rows.name)
            // }
            // this.rows.forEach(element => {
            //     console.log("element: ", element)
            //     console.log("rows ", this.rows)
            //     this.gpa += element.name;
            //     console.log(this.gpa);
                
                
            // });
            // return this.gpa;
            return Number(this.credits1) + Number(this.credits2) + Number(this.credits3) + Number(this.credits4) + Number(this.credits5) + Number(this.credits6);
        },
        addGrades() {
            return Number(this.grade1) + Number(this.grade2) + Number(this.grade3) + Number(this.grade4) + Number(this.grade5) + Number(this.grade6);
        },
        addCredits() {
            return Number(this.credits1) + Number(this.credits2) + Number(this.credits3) + Number(this.credits4) + Number(this.credits5) + Number(this.credits6);
        },
        calculateGrades() {
            if (this.grade1 && this.grade2 && this.grade3 && this.grade4 && this.grade5 && this.grade6) {
                this.showGPA = true;
            }
            this.gpa =  (Number(this.grade1) 
            + Number(this.grade2)
            + Number(this.grade3)
            + Number(this.grade4)
            + Number(this.grade5)
            + Number(this.grade6)
            ) / 6;
            // let total = 0;
            // let count = 0
            // for (let i = 0; i < this.rows.length; i++) {
            //     console.log('rows i ', this.rows[i]);
            //     if (this.rows[i] !== "") {
            //         total += this.rows[i].grade;
            //         count++;
            //     }
            // }
            // this.gpa = total / count;


            if ( this.gpa <= 4.0 && this.gpa >= 3.5) {
                this.green = true;
                this.red = false;
                this.yellow = false;
                return this.gpa;
            }
            if (this.gpa <= 3.49 && this.gpa >= 2.5) {
                this.red = false;
                this.green = false;
                this.yellow = true;
                return this.gpa;
            }
            if (this.gpa <= 2.49 && this.gpa >= 0.0) {
                this.red = true;
                this.green = false;
                this.yellow = false;
                return this.gpa;
            }
            console.log('red: ', this.red, ' green: ', this.green, ' yellow: ', this.yellow);

            return this.gpa;
           
        }
    },
    methods: {
        buttonOneClicked: function() {
            this.showUnweightedText = true;
            this.showUnweightedContainer = true;
            this.showCumulativeText = false;
            this.showSemesterText = false;
            this.showCumulativeContainer = false;
            this.showSemesterContainer = false;
        },

        buttonTwoClicked: function () {
            this.showUnweightedText = false;
            this.showUnweightedContainer = false;
            this.showCumulativeText = false;
            this.showSemesterText = true;
            this.showCumulativeContainer = false;
            this.showSemesterContainer = true;
        },

        buttonThreeClicked: function () {
            this.showUnweightedText = false;
            this.showUnweightedContainer = false;
            this.showCumulativeText = true;
            this.showSemesterText = false;
            this.showCumulativeContainer = true;
            this.showSemesterContainer = false;
        }


    },
    created: function() {
        console.log('page loaded/created');
    }
});

//june 29- april 10