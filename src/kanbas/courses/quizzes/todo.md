GENERAL:
we need a mongodb object type schema to track quiz grades
quiztakerId: objectid
courseId: objectid
quizId: objectid
latest: true

we need to be able to take the quiz itself
one component QuizTaker.tsx where we conditionally render stuff for faculty preview vs student quiz 

QUIZZES SCREEN:
the 3 vertical dots on each of the quizzes need to have edit/delete/publish
under quiz title needs availability, also needs the score if current user === student
points will be set in totalPoints, where we can sum the value of each question with foreach(q => sum + q.value)


TAKE QUIZ DETAILS:
Figure out how to keep score history, and check his wrong/right answers
Create the TakeQuiz component
Add Protected Controls if user is faculty to prevent editing
Add a latest quiz history if attempts are maxxed out
    - GetQuiz
    - GetLatestAttempt


Answer Comparison:
    compare parseInt(correctAnswer) with index of options when we make that map 
    so it will look like right = parseInt(correctAnswer) === userAnswerIndex (1-4)

QUIZ QUESTIONS:
DOING:
    - (OPTIONAL)fix that default value bug for question fields

AFTER YOU FINISH THIS, WORK ON THE QUIZ TAKING COMPONENT 

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

