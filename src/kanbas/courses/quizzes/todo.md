GENERAL:
- we need to be able to take the quiz itself
- one component QuizTaker.tsx where we conditionally render stuff for faculty preview vs student quiz 

QUIZZES SCREEN:
- the 3 vertical dots on each of the quizzes need to have edit/delete/publish
- under quiz title needs availability, also needs the score if current user === student
- points will be set in totalPoints, where we can sum the value of each question with foreach(q => sum + q.value)


TAKE QUIZ COMPONENT:
- deploy that bitch
- (optional if no time) add the correct answer vs wrong answer/quiz review component

We figured this out i think
<!-- - Figure out if we store all the user answers then check for score? -->
<!--     - we have a handleAttemptScoring function that will run before the dao.createAttempt, where we iterate through questions/userAnswers[scoringIndex], then we sum the value based on if the user is correct -->
<!--     - then finally, we submit -->


ANSWER COMPARISON:
i think these are done already
- compare parseInt(correctAnswer) with index of options when we make that map 
- so it will look like right = parseInt(correctAnswer) === userAnswerIndex (1-4)


QUIZ QUESTIONS:
DOING:
- (OPTIONAL)fix that default value bug for question fields


DONE:
- FIX THE QUESTION TYPE AND TEXT NOT SAVING ON HANDLESAVE, works with HANDLEADDQUESTION
- Handle populating multiple choice question options field correctly
- add questions to the quiz object array
    - handle the add to array
    - handle populating the object fields before appending to array
- add functionality to all types of questions
- Need to fix quiz details ui, if we did successfully add, then we need to render new question creation fields
- We also need to render all the previous questions and handle those edits as well
    - handle the editing and deletion of existing quiz questions
- we need a mongodb object type schema to track quiz grades
    - quiztakerId: objectid
    - courseId: objectid
    - quizId: objectid
    - latest: true
- Add Protected Controls if user is faculty to prevent editing
- Create the TakeQuiz component
- ADD THE ROUTES, ADD THE CLIENT REQUESTS
- Finish handleAttemptSubmission
- Issue with submission answer/score tracking, we need to fix the compare for userAnswer[i] === question[i].answer
- need state to handle if prevScores !== [] AND role === "STUDENT", render a div for previous highest score
- implement the attempt limit in Details component
- quiz attempts aren't being fetched based on userId correctly
- quiz submission keeps creating new attempts instead of appending to the same attempt.scores
