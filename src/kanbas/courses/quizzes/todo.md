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


QUIZ DETAILS:
Add quiz preview functionality
fill out all of the details on the screen


QUIZ QUESTIONS:
DOING:
We also need to render all the previous questions and handle those edits as well
Need to fix quiz details ui, if we did successfully add, then we need to render new question creation fields

DONE:
add questions to the quiz object array
    -handle the add to array
    -handle populating the object fields before appending to array
add functionality to all types of questions
