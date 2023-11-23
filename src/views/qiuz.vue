<template class=" text-[poppins]">
    <div class=" bg-slate-200 text-[puppins] ">
        <Header :headertext="false" class="fixed z-40 top-0"></Header>
        <div class="  flex justify-center items-center mt-9  w-full h-screen">
            <section  v-if="questionIndex < questions.length" class="bg-white shadows py-4 w-[80%] h-fit">
                <div class="py-2 px-2">
                    <div class=" h-32 py-3 px-3 bg-slate-500 w-full">
                        <h1 class=" text-xl"> {{ question.question }} </h1>
                    </div>
                    <div>
                        <ul v-for="c of question.choices" :key="c">
                            <label class="containers ">{{ c }}
                                <input type="radio" checked="checked" name="radio" v-model="answer" :value="c">
                                <span class="checkmark"></span>
                            </label>
                           
                        </ul>
                    </div>


                </div>
                <div class=" flex px-4 justify-between ">
                  <div @click="previous" class=" sm:w-10 w-6 text-primary hover:text-secondary ease-in-out  duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 256 256" xml:space="preserve">
                    <defs>
                    </defs>
                    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                      <path d="M 45 0 c 24.813 0 45 20.187 45 45 c 0 24.813 -20.187 45 -45 45 C 20.186 90 0 69.813 0 45 C 0 20.187 20.186 0 45 0 z M 51.263 73.4 l 8.6 -8.6 L 40.064 45 l 19.799 -19.799 l -8.6 -8.6 L 22.864 45 L 51.263 73.4 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    </g>
                    </svg>
                  
                  </div>
                  <div @click="next" class=" sm:w-10 w-6 rotate-180 text-primary hover:text-secondary ease-in-out  duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 256 256" xml:space="preserve">
                    <defs>
                    </defs>
                    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                      <path d="M 45 0 c 24.813 0 45 20.187 45 45 c 0 24.813 -20.187 45 -45 45 C 20.186 90 0 69.813 0 45 C 0 20.187 20.186 0 45 0 z M 51.263 73.4 l 8.6 -8.6 L 40.064 45 l 19.799 -19.799 l -8.6 -8.6 L 22.864 45 L 51.263 73.4 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    </g>
                    </svg>
                  
                  </div>
                </div>

                <div class="mt-7 flex justify-center w-full gap-3">
                  <div class=" sm:py-3 sm:px-5 py-1 px-3 bg-primry rounded-full w-fit h-fit font-semibold text-white" v-for="(q, index) in questions" :key="index" @click="goToQuestion(index)"  :class="{ 'bg-red': questionIndex === index, 'bg-yellow': questionIndex !== index }"> <p> {{ index + 1 }}</p></div>

                   </div>
            </section>
        </div>


    </div>
</template>

<script>



const questions = [
  {
    question: "What is American football called in England?",
    choices: ["American football", "football", "Handball"],
    rightAnswer: "American football",
  },
  {
    question: "What is the largest country in the world?",
    choices: ["Russia", "Canada", "United States"],
    rightAnswer: "Russia",
  },
  {
    question: "What is the 100th digit of Pi?",
    choices: [9, 4, 7],
    rightAnswer: 9,
  },
];

export default {
  name: "App",
  data() {
    return {
      questions,
      questionIndex: 0,
      question: questions[0],
      answer: "",
    };
  },
  methods: {
    next() {
      if (this.questionIndex < this.questions.length - 1) {
        this.questionIndex++;
        this.question = this.questions[this.questionIndex];
      }
    },
    goToQuestion(index) {
      this.questionIndex = index;
      this.question = this.questions[this.questionIndex];
    },
    previous() {
      if (this.questionIndex > 0) {
        this.questionIndex--;
        this.question = this.questions[this.questionIndex];
      }

      
    },
  },
};

</script>

<style>
.containers {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.containers input {
  position: absolute;
  opacity: 0;
    margin: 10;
  cursor: pointer;
}
.bg-red {
  background-color: red;
}

.bg-yellow {
  background-color: yellow;
}
/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 6px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.containers:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.containers input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.containers input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.containers .checkmark:after {
 	top: 8px;
	left: 9px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;
}
</style>