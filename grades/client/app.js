const app = new Vue ({
    el: '#app',
    props: {
        index: Number
    },
    data: {
        name:'',
        grade:'',
        credits:'',
        rows: [
            {
                name: '',
                grades: "",
                credits: ""
            }
        ],
        showUnweightedText: true,
        showCumulativeText: false, 
        showSemesterText: false,
        showUnweightedContainer: true,
        showSemesterContainer: false,
        showCumulativeContainer: false,
        number:'',
        // credits1: '',
        // credits0:'',
        // credits2: '',
        // name0:'',
        name1:'default',
        // name2:'',
        // name3:'',
        // grades0:'',
        // grades1:'',
        // grades2:'',

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
        // addCredits() {
        //     return this.credits0 + this.credits1 +this.credits2;
        // }
    },
    methods: {

        calculateButton: function () {
            
            this.rows.forEach(element => {
                console.log("element: ", element)
                console.log("rows ", this.rows)
                this.gpa += element.name;
                console.log(this.gpa);
                
                
            });
            return this.gpa;
        },
        addRow: function() {
            this.rows.push({
                name: this.names(),
                grade: '',
                credits:''
                // credits: `credits${this.rows.length}`
            });
        },


        names: function() {
            return this.name1
        },
        removeElement: function(index) {
            this.rows.splice(index, 1);
        },

        makePlaceholder: function(index) {
            return `course ${index+1}`;
        },


        makeName: function(index) {
            console.log(`name${index}`)
            return `name${index}`;
        },

        makeGrade: function(index) {
            return `grade${index}`;
        },
        
        makeCredits: function(index) {
            return `credits${index}`;
        },
        
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
        console.log('page sloaded/created');
    }
});

//june 29- april 10